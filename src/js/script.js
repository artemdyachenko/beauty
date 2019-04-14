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

});