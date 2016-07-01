$(function($){

	var $window = $(window),
		$body = $('#body'),
		$lander_target = $('#lander_target'),
		$navigation = $('#navigation'),
		_start, _end, _diff, _delta,

	shapeshift = function(er){

		console.log(er)

		if (er === '' || er === ' '){
			$body.removeClass('landed');

			setTimeout(function(){
				$lander_target.empty();
				$body.addClass('home');
			}, 600);
		}else{
			window.loading_message('project loader init', 'SHAPESHIFTER', true, true);
			window.loading_message('loading path @' + er, 'SHAPESHIFTER');
			
			$body
				.addClass('loading')
				.removeClass('home landed');

			$lander_target.empty();

			_start = new Date();

			var _url;

			if (er === '#hello'){
				_url = 'hello';
			}else{
				_url = er.split('#')[1];
			}

			$.ajax({
				type:'get',
				url: _url,
			}).done(function(html){
				postshift(er, html);
			});
		}
	},

	postshift = function( _path, html ) {
		window.loading_message('path ' + _path + ' loaded', 'SHAPESHIFTER');
		
		$body.removeClass('navigation_open');

		var $html = $(html);

		_end = new Date();
		_diff = (_end - _start) / 1000;

		if (_diff < 600){
			_delta = 600 - _diff;
		}else{
			_delta = 0;
		}

		setTimeout(function(){
			$html.filter('div.extract')
				.appendTo($lander_target);

			if (_path === '#hello'){
				window.hello_init();
				window.loading_message('#hello_extract extracted && appended', 'SHAPESHIFTER');
				window.loading_message('handing over to hello.js', 'SHAPESHIFTER', true);
			}else{
				window.project_init();
				window.loading_message('#project_extract extracted && appended', 'SHAPESHIFTER');
				window.loading_message('handing over to project.js', 'SHAPESHIFTER', true);
			}
			
		}, _delta);

		console.log(_delta)
	}

	if (window.location.hash){
		$body.removeClass('home')
			.addClass('loading');

		shapeshift(window.location.hash);
	}else{
		window.location.hash = ' '; // sets hash to simply #
	}

	setTimeout(function(){
		$body.addClass('present');
	}, 500);

	window.addEventListener('hashchange', function() {
		shapeshift(window.location.hash);
	}, false);

});



