
$(function () {
  //.nav liにクリックイベントを追加する
  $(".nav li").click(function () {
    //変数にnav liを代入しクリックしたときに順番を取得する
    const order = $(".nav li").index(this);
    //.description liにaddClassでis-hiddenのクラス属性を追加する。
    $(".description li").addClass("is-hidden");
    //.description liの特定の要素を取得したとき、その要素のis-hiddenが削除される。
    $(".description li").eq(order).removeClass("is-hidden")
  })
});