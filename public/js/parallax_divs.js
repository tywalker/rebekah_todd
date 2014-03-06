$("document").ready(function() {
	$(".slider").hide()

	$("#shows").click(function() {

		alert($(window).scrollTop());
	});

	$('.slider[data-type="background"]').each(function() {
		var $scrObj = $(this);

		$(window).scroll(function() {
			var topPos = $(window).scrollTop();

			if (topPos >= 0) {
				$(".slider").hide();
				var initialStage = $(window).scrollTop() - 900;
				var coords = initialStage * 2;
				$scrObj.css({ top: coords + "px"});
			}

		}); // end scroll
	}); // end section
}); // end document ready
