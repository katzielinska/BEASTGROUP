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
        $(".logo").toggleClass("scaled");
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
    
    if ($(window).width() > 768) {

        var slideIndex = 1;
        showSlides(slideIndex);
        setInterval(function() {
            showSlides(++slideIndex);
        }, 3000);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }

});