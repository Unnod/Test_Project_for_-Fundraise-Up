$(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            if(($(window).width() > 700))
                $('.header__menu').addClass('fixed');
        }
        else {
            $('.header__menu').removeClass('fixed');
        }
    });

    $('.top__slider').slick({
        prevArrow: '<button class="slick-arrow prev-arrow icon-keyboard_arrow_left" ></button>',
        nextArrow: '<button class="slick-arrow next-arrow icon-keyboard_arrow_right" ></button>',
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    });

    var mixer = mixitup('.top__items');


   // $('.btn__menu').on('click',function(){
    //     $('.menu-list').addClass('active');
    //     $('.header__menu-inner').addClass('active');
    //     $('.btn__menu').addClass('active');
    //     $('span').addClass('active');
    // });

    // $('.close-menu').on('click',function(){
    //     $('.menu-list').removeClass('active');
    //     $('.header__menu-inner').removeClass('active');
    //     $('.btn__menu').removeClass('active');
    //     $('span').removeClass('active');
    // });

    // $('.btn--mobile').on('click', function (){
    //     $('.menu-list').slideToggle();
    // })

    $('.header__top-menu').on('click', function(){
        $('.header__bottom').toggleClass('active');
        $('.wrapper').toggleClass('active');
    });

});

