$(function($){

	var $window = $(window),
		$body = $('#body'),
		$hello, $hello_output, $hello_terminal, $hello_input,
		_user, _lastCommand,
		hello_routes = [
			'hello',
			'email',
			'<3',
			'exit'
		],

	_command = function(_input){
		var _input_ = _input.toLowerCase();

		if (_input_ === hello_routes[0] ){
			_loader('nihad');
			_log('hello: displaying nn interface', true);
		}
		else if (_input_ === hello_routes[1] ){
			window.open('mailto:nasupovic@hotmail.com');
			_log('email: opening email dialog', true);
		}
		else if (_input_ === hello_routes[2]){
			_loader('mike');
			_log('<3 <3 <3', true);
		}
		else if (_input_ === hello_routes[3] ){
			history.back();
			_log('exit: bye', true);
		}else{
			_log(_input + ': command not found', false);
		}
	},

	_loader = function(func){
		$hello_output.attr('viewing', '');

		setTimeout(function(){
			$hello_output.attr('viewing', func);
		}, 100);
	}

	_log = function(cmd, context){
		var _now = new Date().getTime().toString(),
			_context = context ? _user : 'sys';

		$hello_terminal.append(
			'<p>' + 
				_context + '@' + _now.slice(Math.max(_now.length - 5, 1)) + ': ~$ ' + cmd + 
			'</p>'
		);

		$hello_terminal[0].scrollTop = $hello_terminal[0].scrollHeight;
	},

	_startup = function(){
		_log('welcome to ' + window.location.host + ' terminal', false);
		_log('possible commands include: HELLO, EMAIL, EXIT', false);
		$body.addClass('hello')
	},

	_getUser = function(){
		if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
			return 'opera';
		}
		if (typeof InstallTrigger !== 'undefined'){
			return 'firefox';
		}
		if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0){
			return 'safari';
		}
		if (/*@cc_on!@*/false || !!document.documentMode){
			return 'ie';
		}
		if (!!window.StyleMedia){
			return 'edge';
		}
		if (!!window.chrome && !!window.chrome.webstore){
			return 'chrome';
		}
		if ((isChrome || isOpera) && !!window.CSS){
			return 'blink';
		}
	}

	window.hello_init = function(){
		// setTimeout(function(){
		$hello = $('.extract_hello'),
		$hello_output = $('#hello_output'),
		$hello_terminal = $('#hello_terminal'),
		$hello_input = $('#hello_input');

		_user = _getUser();

		$hello_input.on('keyup', function(e){
			console.log(e)

			if (e.keyCode === 13){
				_command($hello_input.val());
				_lastCommand = $hello_input.val();
				$hello_input.val('');
			}else if (e.keyCode == 38){
				$hello_input.val(_lastCommand);
			}
		});

		window.loading_message('hello world!', 'hello');

		window.contentLoader($hello.find('img'));

		_startup();

		// console.log('yeah!', $window, $body, $hello, $hello.find('img'));
	};


});