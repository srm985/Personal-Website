$(document).ready(function() {
    function setHeight() {
        windowHeight = $(window).height();
        contentHeight = $('#header_content').height();
        navHeight = 50;
        padding = 60;

        if (((windowHeight / 2) - navHeight) > (contentHeight + (padding * 2))) {
            document.getElementById("section_1").style.height = String(windowHeight / 2) + "px";
            if ($("#header_image").length) {
                document.getElementById("header_image").style.height = String(windowHeight / 2) + "px";
            };
            document.getElementById("header_content").style.marginTop = String(((((windowHeight / 2) - navHeight) - contentHeight) / 2) + navHeight) + "px";
        } else {
            document.getElementById("section_1").style.height = String(contentHeight + navHeight + (padding * 2)) + "px";
            if ($("#header_image").length) {
                document.getElementById("header_image").style.height = String(contentHeight + navHeight + (padding * 2)) + "px";
            };
            document.getElementById("header_content").style.marginTop = String(padding + navHeight) + "px";
        };
    };
    setHeight();

    $(window).resize(function() {
        //Prevent resizing when mobile search bars disappear on scroll.
        if ($(window).scrollTop() == 0) {
            setHeight();
        };
    });

    var scrollDetected = false;

    $(window).scroll(function(event) {
        scrollDetected = true;
    });
    setInterval(function() {
        if (scrollDetected) {
            var scroll = $(window).scrollTop();
            if (scroll == 0) {
                setHeight();
            };
            scrollDetected = false;
        };
    }, 250);
});
