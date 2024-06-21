$( document ).ready( function() {
    $('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: Boolean,
        dots: true,
        variableWidth:true,
        centerMode: true,
      });
  } );