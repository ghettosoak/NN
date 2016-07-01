$(function($){

	var _gentle = {},
		$body = $('body');

	_gentle.gentleInit = function(){
		_gentle.$gentle = $('#gentle');
		_gentle.$pagePlural = _gentle.$gentle.find('.page');
		_gentle.$goto = _gentle.$gentle.find('.goto');

		_gentle.currentPage = 0;
		_gentle.$pagePlural = $$_.shuffle(_gentle.$pagePlural);
		_gentle.$pagePlural.eq(0).addClass('current');

		_gentle.indicatorDots = _gentle.$gentle.find('.markers span');

		_gentle.indicatorDots
			.eq(_gentle.currentPage).addClass('current');

		_gentle.gentlePageLoader();
	};

	_gentle.gentlePageLoader = function(){
		_gentle.$pagePlural.each(function(e){
			var $that = $(this);
				_mobileToggle = 'desktop';

			$that.addClass('loading');

			if ($$_.mediaQuery.is('mobile'))
				_mobileToggle = 'mobile';

			$$_.imageLoader(
				$that.attr('url-' + _mobileToggle),
				function(src){

					$that.find('.page_image')
						.css(
							'background-image', 
							'url(' + $that.attr('url-' + _mobileToggle) + ')'
						);

					$that.removeClass('loading');

					if (e === 0)
						setInterval(_gentle.gentleGallery, 10000);
				}
			);
		});
	};

	_gentle.gentleGallery = function(){

		if (
			!$body.hasClass('landed') &&
			!$body.hasClass('loading')
		){

			var _availablePages = [];

			_gentle.$pagePlural.each(function(e){
				var $that = $(this);

				if (
					!$that.hasClass('loading') &&
					!$that.hasClass('current')
				){
					_availablePages.push(e);
				}
			});

			if (_availablePages.length){

				_gentle.$pagePlural.eq(_gentle.currentPage).addClass('leaving');

				_gentle.currentPage = $$_.shuffle(_availablePages)[0]

				console.log(_gentle.currentPage)

				_gentle.indicatorDots
					.eq(_gentle.currentPage).addClass('current')
					.siblings().removeClass('current');

				_gentle.$pagePlural.eq(_gentle.currentPage).addClass('entering');

				setTimeout(function(){
					_gentle.$pagePlural.removeClass('leaving entering current')
						.eq(_gentle.currentPage).addClass('current');
				}, 1200);
			}
		}
	};

	_gentle.gentleInit();

	_gentle.$goto.on('click', function(){
		window.location.hash = _gentle.$pagePlural.eq(_gentle.currentPage).attr('link');
	});

});





















