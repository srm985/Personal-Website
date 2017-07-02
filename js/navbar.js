$(document).ready(function() {

    $('head').append('<link rel="stylesheet" type="text/css" href="/font-icons/css/styles.min.css"/>');

    $('.fouc_blocker').removeClass('fouc_blocker'); //Shed our FOUC blocker.

    toggleDeviceType(); //Initialize as non-touch device.

    $(function() {
        var pgurl = '';
        if (window.location.href.lastIndexOf('#') > 1) {
            pgurl = window.location.href.substr(window.location.href.lastIndexOf('/'), window.location.href.lastIndexOf('#') - (window.location.href.lastIndexOf('/')));
        } else {
            pgurl = window.location.href.substr(window.location.href.lastIndexOf('/'));
        }
        $('.navbar ul li a').each(function() {
            if ($(this).attr('href') == pgurl || ($(this).attr('href') == '/portfolio.htm' && $('body').hasClass('portfolio-project')) || ($(this).attr('href') == '/index.htm' && pgurl == '')) {
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

    $(document).on('click touch', '#hamburger_menu', function() {
        $('.blackout_background').toggleClass('navbar_open');
    });
    $(document).on('click touch', '.blackout_background', function() {
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
        $('.link_button').toggleClass('link_button_hover_attr');
        $('.social_media_icon').toggleClass('social_media_icon_hover_attr');
        $('#submit_button').toggleClass('submit_button_hover_attr');
        $('.portfolio-back-button').toggleClass('portfolio-back-button-hover-attr');
    }

    function removeCheckMobileEvent() {
        document.removeEventListener('touchmove', checkMobile);
    }

    $('body').find('*').removeAttr('title'); //Hide title attributes from browser.

    appendBackButton();
});

function checkTouchDevice() {
    var raw = navigator.userAgent,
        touchEnabledDevice = false;

    if (raw.match('iPad')) {
        touchEnabledDevice = true;
    }

    return touchEnabledDevice;
}

function appendBackButton() {
    var pageDirectory = { 'axure-redline-tool': 'project_0', 'mok-project': 'project_1', 'terminal-project': 'project_2', 'statistical_analysis': 'project_3', 'poc_website': 'project_4', 'autonomous_drone': 'project_5', 'statistical_maintenance': 'project_6', 'bearing_wipe': 'project_7', 'graphic_design': 'project_8', 'bit_error': 'project_9' },
        currentURL = window.location.href;

    if ($('body').hasClass('portfolio-project')) {
        $('body').append('<div class="portfolio-back-button portfolio-back-button-hover-attr"><i class="icons8-undo-2"></i></div>');
        $('body').on('click touch', '.portfolio-back-button', function() {
            window.location.href = '/portfolio.htm#' + pageDirectory[currentURL.substr(currentURL.lastIndexOf('/') + 1).replace('.htm', '')];
        });
    }
}
