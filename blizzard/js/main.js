$( document ).ready( function() {
    $('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: Boolean,
        dots: true,
        arrows: true,
        variableWidth:true,
        centerMode: true,
        responsive: [ // 반응형 웹 구현 옵션
            {  
              breakpoint: 1920, //화면 사이즈 960px
              settings: {
                slidesToShow: 3
              } 
            },
            { 
              breakpoint: 1500, //화면 사이즈 768px
              settings: {    
                slidesToShow: 3,
                arrows: false,
              } 
            },
            { 
                breakpoint: 720, //화면 사이즈 768px
                settings: {    
                  slidesToShow: 1,
                  arrows: false,
                } 
              }
          ]
      });
      
    $("#pc").on("click",function(){
	    $('#pc > button').css('background-color','#1888EF');
        $('.all_game div').css('display','none');
        $('.all_game .pc_gm').css('display','block');
        $('#console > button').css('background-color','rgba(208, 233, 255, 0.2)');
        $('#mobile > button').css('background-color','rgba(208, 233, 255, 0.2)');
    });

    $("#console").on("click",function(){
	    $('#console > button').css('background-color','#1888EF');
        $('.all_game div').css('display','none');
        $('.all_game .con_gm').css('display','block');
        $('#pc > button').css('background-color','rgba(208, 233, 255, 0.2)');
        $('#mobile > button').css('background-color','rgba(208, 233, 255, 0.2)');
    });

    $("#mobile").on("click",function(){
	    $('#mobile > button').css('background-color','#1888EF');
        $('.all_game div').css('display','none');
        $('.all_game .mb_gm').css('display','block');
        $('#pc > button').css('background-color','rgba(208, 233, 255, 0.2)');
        $('#console > button').css('background-color','rgba(208, 233, 255, 0.2)');
    });
});