
$(function(){
  //.btn__submitにクリックイベントを追加する
  $(".btn__submit").on("click" , function(){
    //”名前”という文字列をコンソールログに出力する
    console.log("\u540d\u5b57");
    //#familiy__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#family__name").val());
    // //”名前(名)”という文字列をコンソールログに出力する
    console.log("\u540d\u524d");
    //#given__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#given__name").val());
    //”生年月日”という文字列をコンソールログに出力する
    console.log("\u751f\u5e74\u6708\u65e5");
    //".year",".month",".day"の値を取得し、それらを結合して生年月日としてコンソールログに表示
    console.log($(".year").val() + "\u5e74" + $(".month").val() + "\u6708" +  $(".day").val() + "\u65e5");
     //”性別”という文字列をコンソールログに出力する
    console.log("\u6027\u5225");
    //ラジオボタンの性別の値を取得し、コンソールログに表示
    console.log($('[name="gender"]:checked').val());
     //”職業”という文字列をコンソールログに出力する
    console.log("\u8077\u696d");
    //.occupationの入力欄の値を取得し、コンソールログに表示
    console.log($(".occupation").val());
    //”アカウント名”という文字列をコンソールログに出力する
    console.log("\u30a2\u30ab\u30a6\u30f3\u30c8\u540d");
    //#account__nameの入力欄の値を取得し、コンソールログに表示
    console.log($("#account__name").val());
     //”メールアドレス”という文字列をコンソールログに出力する
    console.log("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9");
    //#emailの入力欄の値を取得し、コンソールログに表示
    console.log($("#email").val());
     //”パスワード”という文字列をコンソールログに出力する
    console.log("\u30d1\u30b9\u30ef\u30fc\u30c9");
    //#passwordの入力欄の値を取得し、コンソールログに表示
    console.log($("#password").val());
     //”確認用パスワード”という文字列をコンソールログに出力する
    console.log("\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9");
    //#duplication__passwordの入力欄の値を取得し、コンソールログに表示
    console.log($("#duplication__password").val());
     //”住所”という文字列をコンソールログに出力する
    console.log("\u4f4f\u6240");
    //#addressの入力欄の値を取得し、コンソールログに表示
    console.log($("#address").val());
     //”電話番号”という文字列をコンソールログに出力する
    console.log("\u96fb\u8a71\u756a\u53f7");
    //#telの入力欄の値を取得し、コンソールログに表示
    console.log($("#tel").val());
     //”購読情報”という文字列をコンソールログに出力する
    console.log("\u8cfc\u8aad\u60c5\u5831");
    //[name="subscription":checked]で選択されている値をeachで一つずつ取得してコンソールログに表示
    $('[name="subscription"]:checked').each(function () {console.log($(this).val())
    })
  })
});