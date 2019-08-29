(function () {

    // Start Loader

    $(window).on('load',function () {

        $("body").css("overflow-y", "auto");

        $(".loader").fadeOut();

        $(".loading").fadeOut().css({
            'transituin-delay' : '1s'
        });

        $(".wave-1").addClass("left");

        $(".wave-2").addClass("right");

    });

    $(window).on('load',function(){
        new WOW().init();
    });

    
})(jQuery);

