$(function($){

	var $body = $('#body'),
		$navigation = window.$NN.$body.find('#navigation'),
		$nav_menu_button = $navigation.find('.nav_menu_button'),
		$nav_contact = $navigation.find('.nav_contact');

	$nav_menu_button.on('click', function(){
		if (window.$NN.$body.hasClass('navigation_open')){ // REMOVE
			window.$NN.$body.removeClass('navigation_open');
		}else{ // ADD
			window.$NN.$body.addClass('navigation_open');

			
		}
	});



});