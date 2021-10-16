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

    $('.item__imgbox-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.item__imgbox-nav'
    });
    $('.item__imgbox-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.item__imgbox-main',
        dots: false,
        centerMode: false,
        focusOnSelect: true
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

    $('.item__color-item').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).toggleClass('active');
        } else {
            $('.item__color-item').removeClass('active');
            $(this).toggleClass('active');
        }

    });

    $('.item__btn button').on('click', function () {
        if (!$('.item__added').hasClass('active')) {
            $('.item__added').toggleClass('active');
            $(this).text('Remove from cart');
        } else {
            $('.item__added').toggleClass('active');
            $(this).text('Add to cart');
        }
    });

    $('select').styler();


    $('.item__tabsbox-tab').on('click', function () {
        data = $(this).attr('data-id');
        $('.item__tabsbox-item').removeClass('active');
        $('.item__tabsbox-tab').removeClass('active');
        $('#' + data).addClass('active');
        $(this).addClass('active');
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

