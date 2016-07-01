$(function($){

	var $window = $(window),
		$body = $('#body'),
		$navigation = $body.find('#navigation'),
		$nav_menu_button = $navigation.find('.nav_menu_button'),
		$nav_contact = $navigation.find('.nav_contact'),
		$nav_category = $navigation.find('.category'),
		_thumbnailShiftInterval,

		_categories = [],

	getCategoryData = function(){
		$nav_category.each(function(e){
			var $that = $(this);

			_categories[e] = {
				height: $that.find('.projects').outerHeight(true) + 68,
				thumbnails:[]
			};

			$that.find('.project').each(function(f){
				var $thatthat = $(this);
				_categories[e].thumbnails[f] = {
					showing: 0,
					count: $thatthat.attr('project-image-count')
				};
			});
		});
	},

	projectShifter = function($which){
		var imageCurrent = parseInt(_categories[shiftingCategory].thumbnails[shiftingIndex].showing),
			imageCount = parseInt(_categories[shiftingCategory].thumbnails[shiftingIndex].count),
			imageNext = (imageCurrent + 1) % imageCount;
		$(
			'.category[category-index="' + shiftingCategory +  '"] ' + 
			'.project[project-image-index="' + shiftingIndex +  '"]'
		).attr('project-image-showing', imageNext);

		_categories[shiftingCategory].thumbnails[shiftingIndex].showing = imageNext;
	},

	init = function(){
		getCategoryData();
	};


	//     _____   ____________   ________  _____  ______   _____ __  ____________   ____  __________________  __
	//    /  _/ | / /  _/_  __/  /_  __/ / / /   |/_  __/  / ___// / / /  _/_  __/  / __ )/  _/_  __/ ____/ / / /
	//    / //  |/ // /  / /      / / / /_/ / /| | / /     \__ \/ /_/ // /  / /    / __  |/ /  / / / /   / /_/ /
	//  _/ // /|  // /  / /      / / / __  / ___ |/ /     ___/ / __  // /  / /    / /_/ // /  / / / /___/ __  /
	// /___/_/ |_/___/ /_/      /_/ /_/ /_/_/  |_/_/     /____/_/ /_/___/ /_/    /_____/___/ /_/  \____/_/ /_/
	


	init();



	//     __    ______________________   ____________  _____
	//    / /   /  _/ ___/_  __/ ____/ | / / ____/ __ \/ ___/
	//   / /    / / \__ \ / / / __/ /  |/ / __/ / /_/ /\__ \
	//  / /____/ / ___/ // / / /___/ /|  / /___/ _, _/___/ /
	// /_____/___//____//_/ /_____/_/ |_/_____/_/ |_|/____/
	

	$window.on('resize', function(){
		getCategoryData();
		$nav_category.each(function(e){
			$(this).find('.category_button').click();
		})
		$nav_category.each(function(e){
			$(this).find('.category_button').click();
		})
	});

	$nav_menu_button.on('click', function(){
		if ($body.hasClass('navigation_open')){ // REMOVE
			$body.removeClass('navigation_open');
		}else{ // ADD
			$body.addClass('navigation_open');
		}
	});

	$('.category_button').on('click', function(){
		var $that = $(this),
			$_category = $that.parents('.category')
			projectsHeight = _categories[$_category.attr('category-index')].height;

		// console.

		$_category.toggleClass('category_open');

		if ($_category.hasClass('category_open')){
			$_category.css('height', + projectsHeight + 'px');

			setTimeout(function(){
				$_category
				.find('.project').each(function(e){
					var $that = $(this);
					setTimeout(function(){
						$that.addClass('flicker');
					}, e * 100);
				});
			}, 200);
		}else{
			$_category.css('height', '84px');

			setTimeout(function(){
				$_category.find('.project').removeClass('flicker');
			}, 200);
		}
	});

	$navigation.on('click', '.project-link', function(){
		var $that = $(this);
		
		if (window.location.hash !== $that.attr('project-link'))
			window.location.hash = $that.attr('project-link');
	});


	$('.project').on({
		mouseover: function(e){
			var $that = $(this);

				$that.removeClass('flicker')

				setTimeout(function(){
					$that.addClass('flicker')
				}, 50);


			shiftingCategory = $that.parents('.category').attr('category-index');
			shiftingIndex = $that.attr('project-image-index');

			_thumbnailShiftInterval = setInterval(projectShifter, 600);
		}, 
		mouseout: function(e){
			clearInterval(_thumbnailShiftInterval);
		}
	});



	//     _______  __ ____  ____  ____  ________________
	//    / ____/ |/ // __ \/ __ \/ __ \/_  __/ ____/ __ \
	//   / __/  |   // /_/ / / / / /_/ / / / / __/ / / / /
	//  / /___ /   |/ ____/ /_/ / _, _/ / / / /___/ /_/ /
	// /_____//_/|_/_/    \____/_/ |_| /_/ /_____/_____/
	
	window.closeAllCategoriesExcept = function(thisone){
		$nav_category.each(function(e){
			var $that = $(this);

			if (
				(e !== thisone && $that.hasClass('category_open')) || 
				(e === thisone && !$that.hasClass('category_open'))
			){
				$that.find('.category_button').click();
			}
		});
	};
});