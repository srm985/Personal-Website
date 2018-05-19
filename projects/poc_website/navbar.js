 $(document).ready(function($){

    $('.fouc_blocker').removeClass('fouc_blocker'); //Shed our FOUC blocker.
    
    $(function() {
    	var pgurl = '';
    	if(window.location.href.lastIndexOf("#") > 1) {
    		pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf('#')-(window.location.href.lastIndexOf("/")+1));
    	} else {
    		pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    	};
    	$(".navbar ul li a").each(function(){
	        if($(this).attr("href") == pgurl || $(this).attr("href") == '' ){
	        	//$(this).parent('li').removeClass("li");
	        	$(this).parent('li').addClass("active_link");
	        };
     	});
	});

    //**************************Hide navbar on mobile devices.**************************
    var scrollDetected = false,
        showNav,
        navbarHeight = $(".navbar").height(),
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
        };
    }, 250);
    function scrollFunction() {
        finalPosition = $(window).scrollTop();
        if (finalPosition == 0) {
            $(".navbar").removeClass("hidden_nav");
            showNav = true;
        } else if(Math.abs(finalPosition - initialPosition) < navbarHeight) {
            return;
        } else if (finalPosition > (initialPosition + navbarHeight)){
            $(".navbar").addClass("hidden_nav");
            $("#myNavbar").collapse("hide");
            $(".blackout_background").removeClass("navbar_open");
            showNav = false;
        } else if (finalPosition < (initialPosition - (navbarHeight * 2))) {
            $(".navbar").removeClass("hidden_nav");
            showNav = true;
        };
        initialPosition = finalPosition;
    };
    $(window).resize(function() {
        if ($(window).width() > 767) {
            $(".blackout_background").removeClass("navbar_open");
            showNav = true;
        } else {
            showNav = false;
        } 
    });
    setInterval(function(){
        if (showNav) {
            $(".navbar").removeClass("hidden_nav");
        }
    }, 500);

    $("#hamburger_menu").click(function() {
        $(".blackout_background").toggleClass("navbar_open");
    });
    $(".blackout_background").click(function() {
        $("#myNavbar").collapse("hide");
        $(".blackout_background").toggleClass("navbar_open");
    });


    //**************************Initialize as pointer-attached device and adjust media accordingly.**************************
    var touchMoved = false, touchDevice = false;
    document.addEventListener("touchmove", checkMobile);
    function checkMobile(e) {
        touchMoved = true;
    }
    setInterval(function() {
        if (touchMoved) {
            toggleDeviceType();
            removeCheckMobileEvent();
            touchDevice = true;
            touchMoved = false;
        };
    }, 100);
    function toggleDeviceType() {
        $('.services_tile').toggleClass("touch_device_mode");
        $('#video_thumbnail').toggleClass("touch_device_mode");
        $('.animated_social_icon').toggleClass("animated_social_icon_hover_attr");
        $('.content_button').toggleClass("content_button_hover_attr");
        $('.download_button').toggleClass("touch_device_mode");
        $('.video_thumbnail').toggleClass("touch_device_mode");
        $('#submit_button').toggleClass("submit_button_hover_attr");
        $('#services_tile_8').toggleClass("touch_device_mode");
    }
    function removeCheckMobileEvent() {
        document.removeEventListener("touchmove", checkMobile);
    }

    //**************************Toggle social media drawer.**************************
    var expanded, holdTimeout, drawerMoused = false, drawerClicked = false;
    $(".social_media_container").removeClass("social_drawer_expanded");
    $("#drawer_icon").click(function(){
        /*if (touchDevice) {
            $(".social_media_container").toggleClass("social_drawer_expanded");
            alert("clicked");
        };*/
        drawerClicked = true;
    });
    $(".social_media_container").mouseenter(function(){
        /*if (!touchDevice) {
            clearTimeout(holdTimeout);
            $(".social_media_container").addClass("social_drawer_expanded");
            alert("moused");
        };*/
        drawerMoused = true;
    });
    setInterval(function(){
        if (drawerClicked && drawerMoused) {
            clearTimeout(holdTimeout);
            $(".social_media_container").addClass("social_drawer_expanded");
            drawerClicked = false;
            drawerMoused = false;
        } else if (drawerClicked && !drawerMoused) {
            clearTimeout(holdTimeout);
            $(".social_media_container").toggleClass("social_drawer_expanded");
            drawerClicked = false;
            drawerMoused = false;
        } else if (drawerMoused) {
            clearTimeout(holdTimeout);
            $(".social_media_container").addClass("social_drawer_expanded");
            drawerClicked = false;
            drawerMoused = false;
        };
    },50);
    $(".social_media_container").mouseleave(function(){
        holdTimeout = setTimeout(function(){
            $(".social_media_container").removeClass("social_drawer_expanded");
            drawerClicked = false;
            drawerMoused = false;
        }, 400);
    });

    //******************************Social Media Actions*****************************
    $("#social_icon_1").click(function(){

        var pageLink = window.location.href;
        window.open("https://twitter.com/intent/tweet?text=" + pageLink, "_blank");
    });
    $("#social_icon_2").click(function(){

        var pageLink = window.location.href;
        window.open("http://www.facebook.com/share.php?u=" + pageLink, "_blank");
    });
    $("#social_icon_3").click(function(){

        var pageLink = window.location.href;
        //window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + pageLink + "&title=POC", "_top");
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + pageLink, "_blank");
    });
    $("#social_icon_4").click(function(){

    });

    /*$('body').find('*').each(function() {
        $(this).removeAttr("title");
    });*/
    $('body').find('*').removeAttr("title");    //Hide title attributes from browser.
});



