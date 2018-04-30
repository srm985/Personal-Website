$(document).ready(function(){

	$('.news_wrapper').hide();
	$('.employee_wrapper').hide();
	$('.success_wrapper').show();

	$('#success_button').addClass('active_content');
	$('#news_button').removeClass('active_content');
	$('#employee_button').removeClass('active_content');

	$('#success_button').click(function() {
		$('.news_wrapper').hide();
		$('.employee_wrapper').hide();
		$('.success_wrapper').show();

		$('#success_button').addClass('active_content');
		$('#news_button').removeClass('active_content');
		$('#employee_button').removeClass('active_content');
	});
	$('#news_button').click(function() {
		$('.success_wrapper').hide();
		$('.employee_wrapper').hide();
		$('.news_wrapper').show();

		$('#success_button').removeClass('active_content');
		$('#news_button').addClass('active_content');
		$('#employee_button').removeClass('active_content');
	});
	$('#employee_button').click(function() {
		$('.success_wrapper').hide();
		$('.news_wrapper').hide();
		$('.employee_wrapper').show();

		$('#success_button').removeClass('active_content');
		$('#news_button').removeClass('active_content');
		$('#employee_button').addClass('active_content');
	});
});