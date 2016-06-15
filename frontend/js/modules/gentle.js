$(function($){

	var _gentle = {};

	_gentle.gentleInit = function(){
		_gentle.$gentle = $('#gentle');
		_gentle.$pagePlural = _gentle.$gentle.find('.page');

		_gentle.currentPage = 0;
		_gentle.$pagePlural = $$_.shuffle(_gentle.$pagePlural);
		_gentle.$pagePlural.eq(0).addClass('current');

		_gentle.indicatorDots = $()

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
				$that.attr('data-url-' + _mobileToggle),
				function(src){

					$that.find('.page_image')
						.css(
							'background-image', 
							'url(' + $that.attr('data-url-' + _mobileToggle) + ')'
						);

					$that.removeClass('loading');



					// if (e === 0)
						// setInterval(_gentle.gentleGallery, 10000);
				}
			);
		});
	};

	_gentle.gentleGallery = function(){

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

		// console.log(_availablePages)

		if (_availablePages.length){

			_gentle.$pagePlural.eq(_gentle.currentPage).addClass('leaving');

			_gentle.currentPage = $$_.shuffle(_availablePages)[0]

			_gentle.$pagePlural.eq(_gentle.currentPage).addClass('entering');


			setTimeout(function(){
				_gentle.$pagePlural.removeClass('leaving entering current')
					.eq(_gentle.currentPage).addClass('current');
			}, 1200);
		}
	};

	_gentle.gentleInit();
});