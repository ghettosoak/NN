// Vendor files
var $ = window.jQuery = window.$ = require('./vendor/jquery-1.11.1.min');

var $$_ = window.$$_ = require('./shared/core'); 

// require('./vendor/jquery.ba-hashchange.min.js'); 

var $NN = window.$NN = {};

window.$NN.transitionDuration = 500;


$(function($){
	window.$NN.$window = $(window);

	window.$NN.$body = $('#body');
	window.$NN.$navigation = $('#navigation');
	window.$NN.$project = $('#project');


	if (window.location.hash){
		window.$NN.shapeshift(window.location.hash);
	}

	window.addEventListener('hashchange', function() {
		window.$NN.shapeshift(window.location.hash);
	}, false);

	window.$NN.$navigation.on('click', '.project-link', function(){
		window.location.hash = $(this).attr('data-link');
		$(window).hashchange();
	});
	  
});

require('./modules/shapeshifter'); 
require('./modules/gentle'); 
require('./modules/navigation'); 







