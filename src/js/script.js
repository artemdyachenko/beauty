$(document).ready(function() {

    // Slick slider init
    $('.js-slider').each(function(i, elem){
        var currentControll = $(elem).siblings('.js-slider-controll');

        $(elem).slick({
            dots: true,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).find('.slider-box').data('thumb');

                if (thumb) {
                    return '<span>'+thumb+'</span>';
                }

                return '<span class="slider-dot"></span>'
            },
            appendDots: currentControll,
            appendArrows: currentControll,
            prevArrow: "<span class='icon-arrow-left'></span>",
            nextArrow: "<span class='icon-arrow-right'></span>",
        });
    });


    // Magnific popup
    $('.js-gallery-item').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
          tCounter: '%curr% из %total%'
        }
    });


    // Toggle mobile menu
    $('.js-nav-btn').click(function() {
        $('body').toggleClass('nav-mobile-is-open');
    });


    // Popup open
    $('.js-popup-open').click(function(e) {
        e.preventDefault();

        var currentPopup = $(this).data('popup');

        $('body').addClass('popup-is-open');
        $('#' + currentPopup).addClass('is-active');
    });


     // Popup close
    $('.js-popup-close').click(function() {
        $('body').removeClass('popup-is-open');
        $('.popup__box').removeClass('is-active');
    });


    // Toggle phone box
    $('.js-phone').click(function() {
        $(this).parent('.call__phone').toggleClass('is-active');
    });

});