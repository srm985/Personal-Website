$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).height();
    
    $(".media_container").css("height", String(windowHeight/2).concat('px'))  /*Set video modal height.*/
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});


$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = '';
    $('.video_source').click(function() {
      url = $(this).attr('data-theVideo');
    });
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stops the video playing */
    $(".video_modal").on('hidden.bs.modal', function(e){
        $(this).find(".media_container").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $(".video_modal").on('shown.bs.modal', function(e){
        $(this).find(".media_container").attr('src', url);
    });
});