
$(function () {
  //.modal_open_buttonにクリックイベントを追加
  $(".modal_open_button").click(function ()
  //open_buttonをクリックしたときに.modal_winにfadeInイベントを追加
  { $(".modal_win").fadeIn() });
  //.modal_close_buttonにクリックイベントを追加
  $(".modal_close_button").click(function ()
  //close_buttonをクリックしたときに.modal_winにfadeOutイベントを追加する
  { $(".modal_win").fadeOut() })
})
