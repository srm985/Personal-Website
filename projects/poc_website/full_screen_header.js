$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).height();
    contentHeight = $('#header_content').height();
    containerWidth = $('.container').width();
    navHeight = 50;
    padding = 100;
    
    if ((windowHeight - navHeight) <= (contentHeight + (padding * 2))) {
    	document.getElementById("break_1").setAttribute("style","height:" + (contentHeight + navHeight + (padding * 2)).toString() + "px");
    	document.getElementById("header_content").setAttribute("style","margin-top:" + (navHeight + padding).toString() + "px");
      $(".header_arrow").hide();
    	
    } else {
    	document.getElementById("break_1").setAttribute("style","height:" + (windowHeight).toString() + "px");
    	document.getElementById("header_content").setAttribute("style","margin-top:" + (((windowHeight - contentHeight - navHeight) / 2) + navHeight).toString() + "px");
      $(".header_arrow").show();
    }
  };

  //**************************************Check to ensure page isn't scrolled on refresh.**************************************
  function checkScrollOnRefresh() {
    if ($(window).scrollTop() != 0) { 
      $(".header_arrow").hide();
    };
  };

  setHeight();
  checkScrollOnRefresh();
  
  $(window).resize(function() {
    //Prevent resizing when mobile search bars dissappear on scroll.
    if ($(window).scrollTop() == 0) { 
      setHeight();
    };
  });

  var scrollDetected = false;

  $(window).scroll(function (event) {
    scrollDetected = true;
  });
  setInterval(function(){
    if (scrollDetected) {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".header_arrow").addClass('removed');
      } else {
        setHeight();
        $(".header_arrow").removeClass('removed');
      };
      scrollDetected = false;
    };
  }, 250);
});