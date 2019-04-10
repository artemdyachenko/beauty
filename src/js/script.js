$(document).ready(function() {

    // Slick slider init
    $('.js-slider').each(function(i, elem){
        var currentControll = $(elem).next('.js-slider-controll');

        $(elem).slick({
            dots: true,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).find('.slider-box').data('thumb');
                return '<span>'+thumb+'</span>';
            },
            appendDots: currentControll,
            appendArrows: currentControll,
            prevArrow: "<span class='icon-arrow-left'></span>",
            nextArrow: "<span class='icon-arrow-right'></span>",
        });
    });


});