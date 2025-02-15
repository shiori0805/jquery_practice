


    $(function () {
      //select-boxに入力内容が変更されたときのイベントを追加
      $(".select-box").on("change", function () {
        //bにselect-boxを代入し、cにfood-list liを代入
        let b = $(this).val(),  c = $(".food-list li");
        //bがallの時、cの値を表示する
        if (b === "all") {c.show();}　else {
          //変数iにcの文字列（番号）を代入し、ループ処理させる
          for (let i = 0; i < c.length; i++) {
            //itemにc[i]を代入
            let item = $(c[i]);
            //categoryTypeをitem.data属性にする
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
