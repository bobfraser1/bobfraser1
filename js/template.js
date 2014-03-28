$(document).ready(function() {
	$.get('templates/header.html', function(data) {
		$('#content').before(data);
	});
	$.get('templates/footer.html', function(data) {
		$('#content').after(data);
	});
});
