$(function($){

	window.$NN.shapeshift = function(er){

		console.log(er)

		if (er === ''){
			console.log('EMPTY')
			window.$NN.$body.removeClass('projecting')
			window.$NN.$project.empty();
		}else{
			console.log('PROJ')
			window.$NN.$body.addClass('loading');

			// setTimeout(function(){

			window.$NN.$project.empty();

			$.ajax({
				type:'get',
				url: er.split('#')[1], 
			}).done(function( html ) {

				var $html = $(html);

				$html.filter('div#master')
					.appendTo(window.$NN.$project);

				window.$NN.$body
					.removeClass('loading')
					.addClass('projecting');
			});

			// }, window.$NN.transitionDuration)
		}
	}
});