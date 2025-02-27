


$(function () {
//select-boxに入力内容が変更されたときのイベントを追加
  $(".select-box").on("change", function () {
  //bに選択された値を
    let b = $(this).val()
    //ｃにfood-listのli要素を代入
    let c = $(".food-list li");
    //bがallの時、
    if (b === "all") {
      //すべてのliを表示
      c.show();
      }else {
      //変数iにcの文字列（番号）を代入し、ループ処理させる
        for (let i = 0; i < c.length; i++) {
        //itemにc[i]を代入
        let item = $(c[i]);
        //itemからcategory-typeのデータ属性を取得
        let categoryType = item.data("category-type");
        //bの値が該当のcategoryTypeだったとき、itemを表示させ、それ以外は非表示にする
        if (b === categoryType) {
          item.show();
          } else {
            item.hide();
          }
        }
      }
    });
  });
