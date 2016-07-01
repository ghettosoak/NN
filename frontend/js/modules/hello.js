$(function($){

	var $window = $(window),
		$body = $('#body'),
		$hello;

	window.hello_init = function(){
		// setTimeout(function(){
		$hello = $('.extract_hello');

		window.loading_message('hello world!', 'hello');

		window.contentLoader($hello.find('img'));

		console.log('yeah!', $window, $body, $hello, $hello.find('img'));
		// }, 1000)
	};
});