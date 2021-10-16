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

    $('.header__top-menu').on('click', function(){
        $('.header__bottom').toggleClass('active');
        $('.wrapper').toggleClass('active');
    });

    $(".checkout__item-count-prev").on('click', function () {
        var block = $(this);
        if (block.parent().children('.count').text() > 1) {
            block.parent().children('.count').text(+block.parent().children('.count').text() - 1);
        }
    });

    $(".checkout__item-count-next").on('click', function () {
        var block = $(this);
        if (block.parent().children('.count').text() < 99) {
            block.parent().children('.count').text(+block.parent().children('.count').text() + 1);
        }
    });



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

});

