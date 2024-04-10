$(document).ready(function(){

    $("header").hover(function(){
      $("header").addClass("on");
      $(".drop li").stop().show();
    },function(){
      $("header").removeClass("on");
      $(".drop li").stop().hide();
    });
});
