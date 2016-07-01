$(function($){

	var $lander = $('#lander'),
		$body = $('#body'),

		$project,
		$lander_nav,

		$navigation = $body.find('#navigation'),
		$project = $('#project_extract'),
		$lander_nav = $('#lander_nav'),
		$nav_menu_button = $('.nav_menu_button'),

		$project_links = $navigation.find('.project-link'),		

		_currentProject,

	project_nav_placement = function(){

		$project_links.each(function(e){
			var $that = $(this);

			if ($that.attr('project-link') === window.location.hash){
				$that.addClass('active')
				_currentProject = e;
				$body.attr('viewing-category', $that.parents('.category').attr('category-index'))
			}else{
				$that.removeClass('active');
			}
		});

		$lander_nav.children('div').each(function(){

			window.closeAllCategoriesExcept(_currentProject);

			var $that = $(this),
				_eq;

			if ($that.hasClass('prev')){
				_eq = _currentProject - 1;
			}else{
				_eq = _currentProject + 1;
			}

			if (
				_eq < 0 || 
				_eq > $project_links.length - 1
			){
				$that.addClass('inactive');
				return false;
			}else{
				$that.removeClass('inactive');
			}

			var _project_title = $project_links
				.eq(_eq)
				.find('.project_title_nav')
				.html(),

				$title = $that.find('.project_title_lander');

			console.log(
				$project_links,
				$project_links.eq(_eq),
				$project_links.eq(_eq).find('.project_title_nav'),
				$project_links.eq(_eq).find('.project_title_nav').html()
			)

			for (var i = 0; i < _project_title.length; i ++){
				$title.append('<span>' + _project_title[i] + '</span>');
			}

			$title.attr('count', _project_title.length);
		});

		$lander_nav.children('div').on('click', function(){
			var $that = $(this);

			if ($that.hasClass('prev')){
				_eq = _currentProject - 1;
			}else{
				_eq = _currentProject + 1;
			}

			$project_links
				.eq(_eq)
				.click();

			setTimeout(function(){
				window.closeAllCategoriesExcept(_eq);
			}, 400);

		});
	};

	window.project_init = function(){
		var $project_images = $lander.find('.images img');

		project_nav_placement();

		window.loading_message(
			'loading ' + 
			$project_images.length + 
			' images'
			, 'PROJECT'
			, true
		);

		$project_links.each(function(e){
			var $that = $(this);

			if ($that.attr('project-link') === window.location.hash){
				$that.addClass('active')
				_currentProject = e;
			}else{
				$that.removeClass('active');
			}
		});

		window.contentLoader($project_images);	
	};
});