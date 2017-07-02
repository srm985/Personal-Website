 $(document).ready(function(){
 	$(window).keyup(function() {
	 	$('.input_space').each(function() {
	 		var input_valid = $(this).val();
	 		var input_focused = $(this).is(":focus");
	 		if ($.trim(input_valid) != '') {
	 			$(this).prev().addClass("contact_icon_animation");
	 		} else if (!input_focused) {
	 			$(this).prev().removeClass("contact_icon_animation");
	 		};
	 	});
	 	
	 });

 	$('.input_space').focus(function() {
	 	$(this).prev().addClass("contact_icon_animation");
	});
 	$('.input_space').focusout(function() {
	 	$('.input_space').each(function() {
	 		var input_valid = $(this).val();
	 		if ($.trim(input_valid) != '') {
	 			$(this).prev().addClass("contact_icon_animation");
	 		} else {
	 			$(this).prev().removeClass("contact_icon_animation");
	 			$(this).val('');
	 		};
	 	});
	});

	
	$('#contact_form').submit(function(event){

		$("#submit_button").prop('value', ' ');
		$("#submit_button").html('&nbsp;');

		$("#submit_button").addClass("message_sending");

		var dataString = {
			'name': $('input[name=name]').val(),
			'company': $('input[name=company]').val(),
			'email': $('input[name=email]').val(),
			'description': $('textarea[name=description]').val()
		};

		$.ajax({
			type: 'POST',
			url: 'contact_engine.php',
			data: dataString,
			success: function(result){mailed(result);}
		})
		$('.input_space').prev().removeClass("contact_icon_animation");
		$('.input_space').val('');
		event.preventDefault();
	});
	function mailed(result) {
		holdTimeout = setTimeout(function(){
			if (result == "success!") {
				//alert("mailed!");
				$("#submit_button").removeClass("message_sending");
				$("#submit_button").addClass("send_confirm");
			} else {
				//alert("caught!");
				$("#submit_button").removeClass("message_sending");
				$("#submit_button").addClass("send_error");

				$("#submit_button").prop('value', 'SEND ERROR!');
				$("#submit_button").html('SEND ERROR!');
			};
			holdTimeout = setTimeout(function(){
				$("#submit_button").removeClass("send_confirm");
				$("#submit_button").removeClass("send_error");

	            $("#submit_button").prop('value', 'SUBMIT');
	            $("#submit_button").html('SUBMIT');
	        }, 3000);
        }, 1000);
	}
});