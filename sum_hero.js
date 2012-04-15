$(document).ready(function(){

  var movedown = function(){
    $("#calc_box").css('top', (parseInt($("#calc_box").css('top'), 10) + 5));
  };

  var start = function(){
    movedown();
    setTimeout(start, 100);
  };

  start();

});