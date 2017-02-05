$(document).ready(function() {
  function setHeight() {
    containerHeight = $('#break_4_wrapper').height();
    containerWidth = $('.container').width();
    
    document.getElementById("break_4").setAttribute("style","height:" + (containerHeight + (containerWidth * 0.3)).toString() + "px");
    document.getElementById("break_4_wrapper").setAttribute("style","margin-top:" + (containerWidth * 0.1).toString() + "px");
  };


  function initialize() {
    var myLatLng = {lat: 32.783234, lng:  -96.799094};
    var mapProp = {
      center:new google.maps.LatLng(32.783234,-96.799094),
      zoom:16,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Power Optimization Center'
    });
  };
 
  setHeight();
  initialize();

  $(window).resize(function() {
    setHeight();
    initialize();
  });
});