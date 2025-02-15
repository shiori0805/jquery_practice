
$(function(){
  //.doropdwn liにホバーのイベントを追加
  $(".dropdwn li").hover(function(){
    //その中の子要素ulを、slideDownで表示したとき、実行したまま停止する
    $(this).children("ul").stop().slideDown()}, function(){
      //子要素ulをslideUpで非表示にしたとき、そのまま停止する
      $(this).children("ul").stop().slideUp()})});