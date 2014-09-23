$(document).ready(function() {
	$.get('templates/header.html', function(data) {
		$('#page').prepend(data);
	});
	$.get('templates/footer.html', function(data) {
		$('#page').append(data);
	});
});
