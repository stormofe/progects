$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeigh: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/for_skroll/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/for_skroll/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }   
            }
        ]
    });
  });