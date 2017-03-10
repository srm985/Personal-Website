$(document).ready(function() {

    $('.fouc_blocker').removeClass('fouc_blocker'); //Shed our FOUC blocker.

    $(function() {
        var pgurl = '';
        if (window.location.href.lastIndexOf('#') > 1) {
            pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1, window.location.href.lastIndexOf('#') - (window.location.href.lastIndexOf('/') + 1));
        } else {
            pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        }
        $('.navbar ul li a').each(function() {
            if ($(this).attr('href') == pgurl || $(this).attr('href') == '') {
                //$(this).parent('li').removeClass('li');
                $(this).parent('li').addClass('active_link');
            }
        });
    });

    //**************************Hide navbar on mobile devices.**************************
    var scrollDetected = false,
        showNav,
        navbarHeight = $('.navbar').height(),
        initialPosition = 0,
        finalPosition = 0,
        no_click;

    $(window).scroll(function(event) {
        scrollDetected = true;
    });

    setInterval(function() {
        //Only hide browser on mobile devices.
        if ((scrollDetected) && ($(window).width() < 768)) {
            scrollFunction();
            scrollDetected = false;
        }
    }, 250);

    function scrollFunction() {
        finalPosition = $(window).scrollTop();
        if (finalPosition == 0) {
            $('.navbar').removeClass('hidden_nav');
            showNav = true;
        } else if (Math.abs(finalPosition - initialPosition) < navbarHeight) {
            return;
        } else if (finalPosition > (initialPosition + navbarHeight)) {
            $('#myNavbar').collapse('hide');
            $('.navbar').addClass('hidden_nav');
            $('.blackout_background').removeClass('navbar_open');
            showNav = false;
        } else if (finalPosition < (initialPosition - (navbarHeight * 2))) {
            $('#myNavbar').collapse('hide');
            $('.navbar').removeClass('hidden_nav');
            $('.blackout_background').removeClass('navbar_open');
            showNav = true;
        }
        initialPosition = finalPosition;
    };

    $(window).resize(function() {
        if ($(window).outerWidth() > 767) {
            console.log('here');
            $('#myNavbar').collapse('hide');
            $('.blackout_background').removeClass('navbar_open');
            showNav = true;
        } else {
            showNav = false;
        }
    });

    setInterval(function() {
        if (showNav) {
            $('.navbar').removeClass('hidden_nav');
        }
    }, 500);

    $('#hamburger_menu').click(function() {
        $('.blackout_background').toggleClass('navbar_open');
    });
    $('.blackout_background').click(function() {
        $('#myNavbar').collapse('hide');
        $('.blackout_background').toggleClass('navbar_open');
    });


    //**************************Initialize as pointer-attached device and adjust media accordingly.**************************
    var touchMoved = false,
        touchDevice = false;
    document.addEventListener('touchmove', checkMobile);

    function checkMobile() {
        touchMoved = true;
    }

    setInterval(function() {
        if (touchMoved) {
            toggleDeviceType();
            removeCheckMobileEvent();
            touchDevice = true;
            touchMoved = false;
        }
    }, 100);

    function toggleDeviceType() {
        $('.services_tile').toggleClass('touch_device_mode');
        $('#video_thumbnail').toggleClass('touch_device_mode');
        $('.animated_social_icon').toggleClass('animated_social_icon_hover_attr');
        $('.content_button').toggleClass('content_button_hover_attr');
        $('.download_button').toggleClass('touch_device_mode');
        $('.video_thumbnail').toggleClass('touch_device_mode');
        $('#submit_button').toggleClass('submit_button_hover_attr');
        $('#services_tile_8').toggleClass('touch_device_mode');
    }

    function removeCheckMobileEvent() {
        document.removeEventListener('touchmove', checkMobile);
    }

    $('body').find('*').removeAttr('title'); //Hide title attributes from browser.
});

function checkTouchDevice() {
    var raw = navigator.userAgent,
        touchEnabledDevice = false;

    if (raw.match('iPad')) {
        touchEnabledDevice = true;
    }

    return touchEnabledDevice;
}
