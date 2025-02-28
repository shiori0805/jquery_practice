
$(function () {
  //.btn__submitにクリックイベントを追加する
  $(".btn__submit").on("click", function () {
    //”名前”という文字列をコンソールログに出力する
    console.log("名前");
    //#familiy__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#family__name").val());
    // //”名前(名)”という文字列をコンソールログに出力する
    console.log("名前");
    //#given__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#given__name").val());
    //”生年月日”という文字列をコンソールログに出力する
    console.log("生年月日");
    //".year",".month",".day"の値を取得し、それらを結合して生年月日としてコンソールログに表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
    //”性別”という文字列をコンソールログに出力する
    console.log("性別");
    //ラジオボタンの性別の値を取得し、コンソールログに表示
    console.log($('[name="gender"]:checked').val());
    //”職業”という文字列をコンソールログに出力する
    console.log("職業");
    //.occupationの入力欄の値を取得し、コンソールログに表示
    console.log($(".occupation").val());
    //”アカウント名”という文字列をコンソールログに出力する
    console.log("アカウント名");
    //#account__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#account__name").val());
    //”メールアドレス”という文字列をコンソールログに出力する
    console.log("メールアドレス");
    //#emailの入力欄の値を取得し、コンソールログに表示
    console.log($("#email").val());
    //”パスワード”という文字列をコンソールログに出力する
    console.log("パスワード");
    //#passwordの入力欄の値を取得し、コンソールログに表示
    console.log($("#password").val());
    //”確認用パスワード”という文字列をコンソールログに出力する
    console.log("確認用パスワード");
    //#duplication__passwordの入力欄の値を取得し、コンソールログに表示
    console.log($("#duplication__password").val());
    //”住所”という文字列をコンソールログに出力する
    console.log("住所");
    //#addressの入力欄の値を取得し、コンソールログに表示
    console.log($("#address").val());
    //”電話番号”という文字列をコンソールログに出力する
    console.log("電話番号");
    //#telの入力欄の値を取得し、コンソールログに表示
    console.log($("#tel").val());
    //”購読情報”という文字列をコンソールログに出力する
    console.log("購読情報");
    //[name="subscription":checked]で選択されている値をeachで一つずつ取得してコンソールログに表示
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val())
    })
  })
});