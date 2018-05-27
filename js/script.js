$(document).ready(function() {
        
    const PC = $(".pc"),
          ARCADE = $(".arcade"),
          SELALL = $("#all"),
          SELPC = $("#pc"),
          SELARCADE = $("#arcade");
        
    $(".burger-menu").click(function(){
        $("#main-nav").toggleClass("dole");
        $(".header").toggleClass("dole");
        $(".burger-menu a").toggleClass("xified");
        $(".logo").toggleClass("scaled",500);
    });

    $(SELALL).on('click', function () {
        PC.removeClass("invisible");
        ARCADE.removeClass("invisible");
        PC.addClass("visible");
        ARCADE.addClass("visible");
        SELPC.removeClass("underlined");
        SELARCADE.removeClass("underlined");
        SELALL.addClass("underlined");
    });
        
    $(SELPC).on('click', function () {
        PC.removeClass("invisible");
        ARCADE.addClass("invisible");
        PC.addClass("visible");
        SELPC.addClass("underlined");
        SELARCADE.removeClass("underlined");
        SELALL.removeClass("underlined");
    });
        
    $(SELARCADE).on('click', function () {
        PC.addClass("invisible");
        ARCADE.removeClass("invisible");
        ARCADE.addClass("visible");
        SELPC.removeClass("underlined");
        SELARCADE.addClass("underlined");
        SELALL.removeClass("underlined");
    });

    var lastScrollTop = 0;

    $(window).on("scroll", function(){
        var st = $(this).scrollTop()
        if (st > lastScrollTop){
            $(".header").css("transform", "translateY(-100%)");
        } else {
            $(".header").css("transform", "none");
        }
        lastScrollTop = st;
    });

});