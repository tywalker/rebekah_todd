$("document").ready(function() {
	$(".player").hide();
	$(".header").hide();
	$(".album_header").hide();
	$(".header").fadeIn(1000);
	$(".album_header").fadeTo(1000, 0.0);
	$(".album_header").fadeTo(500, 1.0);
	$(".slider").hide();
	$("#about_rebekah_fixed").hide();

	$(".listen").click(function() {
		event.preventDefault();
		$(".player").toggle(500);
	});
	$("body").click(function() {
		$(".player").fadeOut(500);
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var xPos = (scrollTop * 2) - 11450;

		if (scrollTop >= 2000 && scrollTop <= 6050) {
			$(".slider").fadeIn(700);
				$("#about_rebekah_fixed").fadeIn(700);
			if (scrollTop<= 6020) {
				$(".slider").css({
					'right': xPos +'px'
				});
			}
		}
		else {
			$("#about_rebekah_fixed").fadeOut(1000);
			$(".slider").fadeOut(500);
		}
	});
}); // end document ready
