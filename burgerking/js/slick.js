$(document).ready(function(){
  
  $('.banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 600,
      arrows: true,
      dots: true,
      autoplaySpeed: 2000,
      

      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
      nextArrow : "<button type='button' class='slick-next'>Next</button>",

      dotsClass: "slick-dots",
      draggable: true

    });
});
