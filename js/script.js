"use strict";

$(document).ready(function(){
    // console.log($('.gnb__sub-menu__container').eq(0));
    // console.log($('.gnb__memu').eq(0));
    /* gnb */
    $('.gnb__sub-menu__wrap').hide();
    $('.gnb__sub-menu__container').hide();
    $('.gnb__memu').mouseenter(function(){
        // $(this).show().$('.gnb__sub-menu__wrap')
        $('.gnb__sub-menu__wrap').slideDown(300);
        $('.gnb__sub-menu__wrap').mouseleave(function(){
            $('.gnb__sub-menu__wrap').slideUp(300);
        })
        $('.gnb__sub-menu__close__btn').click(function(){
            $('.gnb__sub-menu__wrap').slideUp(300);
        })
    })
    $('.gnb__memu').eq(0).mouseenter(function(){
        $('.gnb__sub-menu__container').hide();
        $('.gnb__sub-menu__container').eq(0).fadeIn();
    })
    $('.gnb__memu').eq(1).mouseenter(function(){
        $('.gnb__sub-menu__container').hide();
        $('.gnb__sub-menu__container').eq(1).fadeIn();
    })
    $('.gnb__memu').eq(2).mouseenter(function(){
        $('.gnb__sub-menu__container').hide();
        $('.gnb__sub-menu__container').eq(2).fadeIn();
    })
    $('.gnb__memu').eq(3).mouseenter(function(){
        $('.gnb__sub-menu__container').hide();
        $('.gnb__sub-menu__container').eq(3).fadeIn();
    })
    $('.gnb__memu').eq(4).mouseenter(function(){
        $('.gnb__sub-menu__container').hide();
        $('.gnb__sub-menu__container').eq(4).fadeIn();
    })
    $('.gnb__search input').hide();
    // $('.gnb__search__btn').click(function(){
    //     $('.gnb__right__container').hide();
    //     $('.gnb__search input').show();
    // })
    /* project */
    


    /* main__banner__slider */
    $('.banner__slider').slick({
    //   setting-name: setting-value
    dots: true,
    centerMode: true,
    variableWidth: true
    // centerPadding: '20%'
    });

    /* product__slider */
    $('.product__slider').slick({
    //   setting-name: setting-value
    dots: true,
    // centerMode: true
    // centerPadding: '20%'
    });

});