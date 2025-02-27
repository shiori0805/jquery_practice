
$(function(){
  //.doropdwn liにホバーのイベントを追加
  $(".dropdwn li").hover(function(){
    //その中の子要素ulを、slideDownで表示し、カーソルがあっているとき実行したまま停止する
    $(this).children("ul").stop().slideDown()}, function(){
      //子要素ulをslideUpで非表示にし、カーソルがあっているときそのまま停止する
      $(this).children("ul").stop().slideUp()})});