! function (e) {
    "use strict";

    function scrollSmoothTop() {
        if (('.scroll_down').length > 0) {
            //js for scroll to section content
            $('.scroll_down a[href^="#"], .go_to_top a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            });
        }
    }
    scrollSmoothTop();


    $(window).on('scroll', function () {
        var $scTop = $(window).scrollTop();
        var $opcn = 1 - $scTop / 700;
        $(".hero_warp").css("opacity", $opcn);
        if ($opcn < 0) {
            $(".hero_warp").addClass('hide');
        } else {
            $(".hero_warp").removeClass('hide');
        }
        if ($scTop < 120) {
            $('.go_to_top').hide(300);
        } else {
            $('.go_to_top').show(300);
        }
    });


    function wowInit() {
        new WOW().init();
    }
    wowInit();

}(jQuery);
