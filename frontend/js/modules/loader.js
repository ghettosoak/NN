$(function($){

	var $code_interior = $('#code_interior');

	window.loading_message = function(message, relation, emphasis, newLine){
		var _now = new Date(),
			_emphatic = emphasis ? 'emphasis' : ' ';
			_newLine = newLine ? 'newLine' : ' ';


		$code_interior.append(
			'<span class="' + _emphatic + ' ' + _newLine + '">' + 
				'<span class="beginning">++</span>' + 
				'<span class="timestamp">' + 
					' [' + _now.getTime() + 'z] ' + 
				'</span>' + 
				'<span class="message">' + 
					message + 
				' </span>' + 
				'<span class="relation">(@' + 
					relation + 
				')</span>' + 
				'<span class="ending"> // </span>' + 
			'</span>'
		);

		// var elem = document.getElementById('data');
		$code_interior[0].scrollTop = $code_interior[0].scrollHeight;
	}

	window.loading_message('SUB_CONSOLE LOADINGA LOGGER (c) 2016 <3 MF >>>>>>>>>ACCEPTING INPUT', 'ROOT', true);

});