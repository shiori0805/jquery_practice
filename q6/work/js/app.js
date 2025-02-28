


$(function () {
//select-boxに入力内容が変更されたときのイベントを追加
  $(".select-box").on("change", function () {
  //ingredientTypeに選択された値を
    let ingredientType = $(this).val()
    //foodItemsにfood-listのli要素を代入
    let foodItems = $(".food-list li");
    //ingredientTypeがallの時、
    if (ingredientType === "all") {
      //すべてのliを表示
      foodStuffs.show();
      }else {
      //変数foodBoxにfoodItemsの文字列（番号）を代入し、ループ処理させる
        for (let  foodBox= 0; foodBox < foodItems.length; foodBox++) {
        //itemにfoodItems[foodBox]を代入
        let item = $(foodItems[foodBox]);
        //itemからcategory-typeのデータ属性を取得
        let categoryType = item.data("category-type");
        //ingredientTypeの値が該当のcategoryTypeだったとき、itemを表示させ、それ以外は非表示にする
        if (ingredientType === categoryType) {
          item.show();
          } else {
            item.hide();
          }
        }
      }
    });
  });
