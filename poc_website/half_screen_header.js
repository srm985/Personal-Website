$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).height();
    contentHeight = $('#header_content').height();
    containerWidth = $('.container').width();
    navHeight = 50;
    padding = 75;
    
    if (((windowHeight / 2) - navHeight) <= (contentHeight + (padding * 2))) {
    	document.getElementById("break_1").setAttribute("style","height:" + (contentHeight + navHeight + (padding * 2)).toString() + "px");
    	document.getElementById("header_content").setAttribute("style","margin-top:" + (navHeight + padding).toString() + "px");
    	
    } else {
    	document.getElementById("break_1").setAttribute("style","height:" + (windowHeight / 2).toString() + "px");
    	document.getElementById("header_content").setAttribute("style","margin-top:" + ((((windowHeight / 2) - contentHeight - navHeight) / 2) + navHeight).toString() + "px");
    }
  };
  setHeight();
  
  $(window).resize(function() {
    //Prevent resizing when mobile search bars disappear on scroll.
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
      if (scroll == 0) {
        setHeight();
      };
      scrollDetected = false;
    };
  }, 250);
});