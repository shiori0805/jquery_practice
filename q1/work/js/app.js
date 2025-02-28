
$(function () {
  //q1の文字の色をcssでgreenに変更
  $("#q1").css("color", "green");

  //q2にクリックのイベントを追加
  $("#q2").on("click", function () {
    //そのイベントにクリックするとcssで背景の色をピンクにするという変更
    $(this).css("background", "pink")
  });

  //q3にクリックイベントを追加
  $("#q3").on("click", function () {
    //そのイベントをクリックすると３秒かけてフェードアウトする。ｊｓでは時間をミリ秒で表すので3秒＝3000ミリ秒
    $(this).fadeOut(3000)
  });

  //q4にクリックイベントを追加
  $("#q4").on("click", function () {
    //q4にaddclassで"large"のクラス属性を追加し、cssで記述された.largeが実行されるようにした。
    $(this).addClass("large")
  });

  //q5にクリックイベントを追加
  $("#q5").on("click", function () {
    //要素の中の最初に”DOMの中の前”という文章を追加する
    $(this).prepend("DOMの中の前")
    //要素の中の最後に”DOMの中の後”という文章を追加する
    $(this).append("DOMの中の後")
    //q5の要素の前に”DOMの前”という文章を追加する
    $(this).before("DOMの前")
    //q5の要素の後に”DOMの後”という文章を追加する
    $(this).after("DOMの後")
  });

  //q6にクリックイベントを追加
  $("#q6").on("click", function () {
    //クリックでアニメーションを追加、2秒かけてmargin-top:100、margin-left:100の場所に動く。
    $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2000)
  });


  //q7にクリックイベントを追加
  $("#q7").on("click", function () {
    //クリックでコンソールログにq7のHTMLを表示する
    console.log(this)
  });

  //q8にmouseenter（マウスが要素の上に来た時にイベント）を追加する
  $("#q8").on({
    mouseenter: function () {
      //q8にクラス属性を追加し、cssで記述されたlargeが実行される。
      $(this).addClass("large")
    },
    //マウスが離れたときにイベントが実行され、追加されたクラス属性を削除する
    mouseleave: function () {
      $(this).removeClass("large")
    }
  });

  //q9のliにクリックでイベントを追加する
  $("#q9 li").on("click", function () {
    //index()で順番を取得し、それぞれのliをクリックしたとき、０からアラートで表示される
    const activateData = $(this).index(); alert(activateData)
  });

  //q10にクリックでイベントを追加する
  $("#q10 li").on("click", function () {
    //indexでq10のliの順番を取得し、クリックしたときに
    const expand = $(this).index();
    //consoleにq11とliのリストを取得し、表示する
    console.log($("#q11 li").eq(expand));
    //q11、liを取得しそのリストにaddClassで"large-text"のクラス属性を追加し、cssで記述された"large-text"が実行される。
    $("#q11 li").eq(expand).addClass("large-text")
  })
});