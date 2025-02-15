
//.drwer_buttonにクリックイベントを追加する
$(function() { $(".drawer_button").click(function(){
  //クリックしたときに、toggleClassで"active"のクラス属性を追加する
  $(this).toggleClass("active");
  //.drawer_bgにfadeToggleのイベントを追加する
  $(".drawer_bg").fadeToggle();
  //navにtoggleClassで"open"のクラス属性を追加する。
  $("nav").toggleClass("open")});

  //.drawer_bgにクリックイベントを追加する
  $(".drawer_bg").click(function(){
    //クリックしたら、非表示にして
    $(this).hide();
    //.draawer_butoonにremoveClassで"active"のクラス属性を削除
    $(".drawer_button").removeClass("active");
    //navにremoveClassの"open"のクラス属性を削除
    $("nav").removeClass("open")})});