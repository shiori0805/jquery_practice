
$(function () {
  //入力した内容をsearchWordに代入
  let searchWord = "";
  //pageCountの初期値は１ページ目から
  let pageCount = 1;
  //APIから返されたレスポンスを検索結果に表示する
  function displayResult(response) {
    //.messageのクラス要素を削除する
    $(".message").remove();
    //APIから返されたレスポンスにitemsと長さが０より大きいかどうか（１個以上結果が出るかどうか）
    if (response[0].items && response[0].items.length > 0) {
      //レスポンスで出た結果（items,index)を処理
      $.each(response[0].items, function (index, item) {
        //item.titleが存在する場合はその値を、存在しない場合は”タイトル不明”を代入
        const title = item.title || "タイトル不明"
        //item.["dc:creator"]が存在する場合は作成者名を取得し、存在しない場合は”作成者不明”を設定
        const creator = item["dc:creator"] || "作成者不明"
        //item["dc:publisher"]が存在し、配列であれば出版社名を取得し、存在しない場合は”出版社不明”を設定
        const publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"
        //item.link["@id"]が存在する場合はそのリンクを使用、存在しない場合は”＃”を設定
        const link = item.link["@id"] || "#";
        //検索結果をHTMLのリスト<li>にそれぞれの変数を埋め込む
        const listItem = `
        <li class="lists-item">
          <div class="list-inner">
            <p>タイトル:${title}</p>
            <p>作成者:${creator}</p>
            <p>出版社:${publisher}</p>
            <a href="${link}" target="_blank">書籍情報</a>
          </div>
        </li>
        `;
        //.listsのクラス要素の最初にlistItemを挿入する
        $(".lists").prepend(listItem);
      });
      //検索結果がなかったら、”検索結果が見つかりませんでした。別のキーワードで検索してください。”と表示する。
    } else {
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }
  //showErrorMessageという関数を定義、messageという引数を受け取る
  function showErrorMessage(message) {
    //.listsのクラス要素を取得して、検索結果のリストの前にメッセージを表示するHTMLを追加
    $(".lists").before(`<div class="message">${message}</div>`);
  }
  //AJAXリクエストでエラーが出たとき
  function handleError(error) {
    // エラーの詳細を表示
    console.log(error);
    //.list要素を空にして前の結果も削除
    $(".lists").empty();
    //.messageクラス要素削除
    $(".message").remove();
    //error.status ===0は通信失敗という意味なので、”正常に通信できませんでした。インターネットの接続の確認をしてください。”と表示
    if (error.status === 0) {
      showErrorMessage("正常に通信できませんでした。<br>インターネットの接続の確認をしてください。");
      //error.status === 400は無効な検索キーワードだったという意味なので”検索キーワードが有効ではありません。１文字以上で検索してください。”と表示
    } else if (error.status === 400) {
      showErrorMessage("検索キーワードが有効ではありません。<br>１文字以上で検索してください。");
      //その他のエラーは”予期せぬエラーが起きました。再読み込みをおこなってください。”と表示
    } else {
      showErrorMessage("予期せぬエラーが起きました。<br>再読み込みをおこなってください。");
    }
  }
  //.search-btnがクリックされたときにイベント
  $(".search-btn").on("click", function () {
    //search-inputに入力された値を取得
    const inputWord = $("#search-input").val();
    //入力された値と検索ワードが異なるとき
    if (inputWord !== searchWord) {
      //ページ番号を１にして
      pageCount = 1;
      //新しい検索ワードを入力された値にする
      searchWord = inputWord;
      //検索ワードが同じの時はページ番号を追加
    } else {
      pageCount++;
    }
    //API のベースURLを定数化
    const API_base_URL = "https://ci.nii.ac.jp/books/opensearch/search";
    const response_FORMAT = "json"; // 取得フォーマット
    const items_Page = 20; // 1ページあたりの表示件数

    //APIのリクエスト設定
    const settings = {
      "url": `${API_base_URL}?title=${searchWord}&format=${response_FORMAT}&p=${pageCount}&count=${items_Page}`,
      "method": "GET",
    };

    //settingで設定したものをAJAXリクエストで送信、成功したらAPIから'response'で返ってくる
    $.ajax(settings).done(function (response) {
      //responseデータは@graphというプロパティから取得して'result'に入れる
      const result = response['@graph'];
      //resultをdisplayResult関数に渡して画面に表示
      displayResult(result)
      //AJAXリクエストが失敗したらerrを呼び出す
    }).fail(function (err) {
      //handleError（エラーハンドリング。プログラムの処理中に処理が妨げられるとその処理をエラーとして対処する）を行う
      handleError(err)
    });
  });
  //".reset-btnを"click"したときのイベント
  $(".reset-btn").on("click", function () {
    //ページカウントを１にする
    pageCount = 1;
    //searchWordを空にする
    searchWord = "";
    //.listsを空にする（消去する）
    $(".lists").empty();
    //.messageクラスの要素を削除
    $(".message").remove();
    //search-inputに入力されていたものを空にする
    $("#search-input").val("");
  });
});