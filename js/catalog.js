
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

    $('select').styler();

    $('.catalog__active-filter-cross').on('click', function() {
        $(this).parent().removeClass('active');
    });

    $('.catalog__pagination-next').on('click', function() {
        active = $('.catalog__pagination-page.active');
        if (active.next().is('.catalog__pagination-page')){
            active.removeClass('active');
            active.next().addClass('active');
        }
        
    });

    $('.catalog__pagination-prev').on('click', function() {
        active = $('.catalog__pagination-page.active');
        if (active.prev().is('.catalog__pagination-page')){
            active.removeClass('active');
            active.prev().addClass('active');
        }
    });

    $('.catalog__aside-category-name').on('click', function() {
        $(this).next().slideToggle();
    });

    $('.catalog__aside-category-dropdown-line').on('click', function() {
        $('.catalog__aside-category-dropdown-line').removeClass('active');
        $(this).addClass('active');
    });




});

