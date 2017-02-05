$(document).ready(function(){
	var services_tile_id_retrieve = getCookie("services_tile_tracking");
	var tempLoc = 0;

	if (services_tile_id_retrieve != '') {

		if ($(window).width() > 767) {
			services_tile_id_retrieve = '#' + services_tile_id_retrieve;
			window.location.href = services_tile_id_retrieve;
			tempLoc = $(window).scrollTop();
			$(window).scrollTop(tempLoc - 100);
			$(services_tile_id_retrieve).hide();
			$(services_tile_id_retrieve).next(".card_back").show();
		} else {
			services_tile_id_retrieve = "#header" + services_tile_id_retrieve.substr(services_tile_id_retrieve.lastIndexOf("_"));
			window.location.href = services_tile_id_retrieve;
			$(services_tile_id_retrieve).click();
			$(services_tile_id_retrieve).toggleClass("expanded");
        	$(services_tile_id_retrieve).find(".cta_arrow").toggleClass("rotation");
        	tempLoc = $(window).scrollTop();
			$(window).scrollTop(tempLoc - 100);
		};
		setCookie("services_tile_tracking", "", 1);	//Clear tracking cookie.
	};

    $('.panel-heading').click(function() {
        $(this).toggleClass("expanded");
        $(this).find(".cta_arrow").toggleClass("rotation");
    });
});