//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//


// Vendor files
var $ = window.jQuery = window.$ = require('./vendor/jquery-1.11.1.min');

var $$_ = window.$$_ = require('./shared/core'); 

// require('./vendor/jquery.ba-hashchange.min.js'); 

var $NN = window.$NN = {};

window.$NN.transitionDuration = 500;

require('./shared/contentLoader'); 

require('./modules/loader'); 

require('./modules/project'); 
require('./modules/gentle'); 
require('./modules/navigation'); 
require('./modules/hello'); 

require('./modules/shapeshifter'); 

$(function($){
	window.$NN.$window = $(window);

	window.$NN.$body = $('#body');
	window.$NN.$navigation = $('#navigation');
	window.$NN.$lander = $('#lander');
	window.$NN.touch = false;	

	function is_touch_device() {
		return 'ontouchstart' in window || navigator.maxTouchPoints;
	};

	if (is_touch_device()){
		window.$NN.touch = true;
	}
	  
});








