$(function() {
	var dropdown = $('#changeTheme');
	var _currentTheme = 'default'


	function parseParams(params) {
		var ret = {},
			hash,
			hashes = params && params.split('&');

		if (!params) {
			return;
		}

		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');

			// Allow plus sign as a space
			ret[hash[0]] = decodeURIComponent(hash[1].replace(/\+/g, ' '));
		}

		return ret;
	}

	function setTheme(name) {
		var theme = $('#linkPlayerTheme');
		_currentTheme = name;
		theme.attr('href', '../dist/css/' + name + '/le-player.css');

	}

	function _save() {
		var options = editor.getValue();
		var theme = _currentTheme;

		window.history.pushState({}, document.title, location.pathname + '?' + [
			'options=' + encodeURIComponent(options),
			'theme=' + encodeURIComponent(theme),
		].join('&'))
	}

	function _load() {
		var params = parseParams(location.search.split('?')[1]);
		if(params == null) {
			return null;
		}
		if(params.options != null) {
			editor.setValue(params.options);
		}
		if(params.theme != null) {
			setTheme(params.theme);
		}
	}

	function safeEval(str) {
		try {
			return (new Function('return ' + str.trim()))();
		} catch(e) {
			return e;
		}
	}

	$('.link-set-theme').on('click', function (event) {
		var name = $(this).data('name');
		setTheme(name);
		_save();
	})


	var editor = ace.edit("editor");
	editor.$blockScrolling = Infinity
    editor.setTheme("ace/theme/solarized_light");
    editor.getSession().setMode("ace/mode/javascript");


	$('#editor-save').on('click', function() {
		_save();
	});


	$('#editor-go').on('click', function() {
		_save();
		window.location.reload();
	})


	_load();
	var options = safeEval(editor.getValue());
	var player = new lePlayer($('#video'), options);

})

