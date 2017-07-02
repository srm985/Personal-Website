 $(document).ready(function(){
    $('.panel-heading').click(function() {
        //$(this).toggleClass("expanded");
        $(this).find(".cta_arrow").toggleClass("rotation");
    });
});