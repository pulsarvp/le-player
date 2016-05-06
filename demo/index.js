$(function() {
	var dropdown = $('#changeTheme');
	var theme = $('#linkPlayerTheme');
	$('.link-set-theme').on('click', function (event) {
		var name = $(this).data('name');
		theme.attr('href', `../dist/css/${name}/le-player.css`)
	})
})
