(function($) {
	$.fn.mySimplePlugin = function() {
		// Plugin code ...
		var dataInterval = $('time').attr('data-interval');
		$('time').html(dataInterval).text('<time data-interval="2012-08-14T20:03Z,2012-08-15T19:40Z,2012-08-16T19:40Z,2012-08-18T08:15Z">Aug 14 - 18, 4 days</time>');
		return this;
	};
})(jQuery);

// Call
$('time').mySimplePlugin();


