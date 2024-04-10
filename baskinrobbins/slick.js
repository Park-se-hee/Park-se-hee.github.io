$(document).ready(function(){
$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

$('.event').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
});
});
