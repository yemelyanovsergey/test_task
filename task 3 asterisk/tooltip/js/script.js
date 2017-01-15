(function() {
	$('.hover').mousemove(function(e) {
		var hint = $(this).attr('ht');
		$('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});
		$('#hint').show().fadeIn(500).text(hint);
	}).mouseout(function() {
		$('#hint').hide();
	});
})(jQuery);