$(function($){

	var $body = $('#body'),
		contentLoaderCache = [],
		contentLoaderCallback,
		contentLoaderBusy = false,

	contentLoader_mechanism = function($element, src, callback){
		if (!contentLoaderBusy){
			contentLoaderBusy = true;

			var downloadingImage = new Image();

			downloadingImage.src = src;

			window.loading_message('LOADING IMAGE: ' + src, 'contentloader');

			downloadingImage.onload = function(){
				contentLoaderBusy = false;

				window.loading_message('image ' + src + ' loaded', 'contentloader', true);

				if (contentLoaderCache.length >= 1){
					var nextRequest = contentLoaderCache.pop();
					window.loading_message('requesting next image', 'contentloader');
					contentLoader_mechanism(nextRequest.e, nextRequest.src, nextRequest.callback);
				}else{
					$body.addClass('landed');

					setTimeout(function(){
						window.loading_message('all images loaded, unveiling', 'contentloader');
						$body.removeClass('loading home');

						if (typeof callback === 'function'){
							callback();
						}

					}, 600);
				}

				$element.attr('src', src);

				console.log($element, src)
			};

		}else{
			window.loading_message('loader busy, adding to queue', 'contentloader');
			contentLoaderCache.push({
				e: $element,
				src: src,
				callback: callback
			});
			console.log(contentLoaderCache)
		}
	};


	window.contentLoader = function($target, callback){

		console.log($target)
		if ($target.length){
			$target.each(function(e){
				console.log(e)
				var $that = $(this),
					src;

					console.log($that)

				if (
					$$_.mediaQuery.is('mobile') &&
					$that.attr('src-mobile')
				){
					src = $that.attr('src-mobile');
				}else{
					src = $that.attr('src-desktop');
				}			

				contentLoader_mechanism($that, src, callback);
			});	
		}else{
			window.loading_message('no images found, unveiling', 'contentloader');
			$body.addClass('landed');
			$body.removeClass('loading home');
		}
	}


});