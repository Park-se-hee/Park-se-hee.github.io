function popOpen() {

    var modalPop = $('.modal-wrap');
    var modalBg = $('.modal-bg'); 

    $(modalPop).show();
    $(modalBg).show();

    $('html').css({
        overflow: 'hidden',
        height: 'auto'
    });
}

 function popClose() {
   var modalPop = $('.modal-wrap');
   var modalBg = $('.modal-bg');

   $(modalPop).hide();
   $(modalBg).hide();

   $('html').removeAttr('style');
}

function popOpen1() {

    var modalPop = $('.modal-wrap1');
    var modalBg = $('.modal-bg1'); 

    $(modalPop).show();
    $(modalBg).show();

    $('html').css({
        overflow: 'hidden',
        height: 'auto'
    });
}

 function popClose1() {
   var modalPop = $('.modal-wrap1');
   var modalBg = $('.modal-bg1');

   $(modalPop).hide();
   $(modalBg).hide();

   $('html').removeAttr('style');
}