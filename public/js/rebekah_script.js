$("document").ready(function() {
	
	$(window).load(function(){
	  $('#loader').fadeOut(3000);
	});
	$("body").click(function() {
		alert($(window).scrollTop());
	});

	$(".player, .slider").hide();

	$(".listen").click(function() {
		event.preventDefault();
		$(".player").toggle(100);
	});
	$("body").click(function() {
		$(".player").fadeOut(100);
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var xPos = (scrollTop * 2) - 10450;

		if (scrollTop >= 1800 && scrollTop <= 5500) {
			$("#about_rebekah_fixed").show();
		}
		else {
			$("#about_rebekah_fixed").hide();
		}

		if (scrollTop >= 2000 && scrollTop <= 5050) {
			$(".slider").show();
			if (scrollTop<= 4850) {
				$(".slider").css({
					'right': xPos +'px'
				});
			}
		}
		else {
			$(".slider").fadeOut(500);
		}
	});

	$(window).scroll(function() {
		var yPos = $(window).scrollTop(),
		imgHeight = yPos - 6630;
			if (yPos > 6630 && yPos < 7200) {
				$(".roots_center, .roots_side").show();
				$(".roots_center").css({
					height: imgHeight + "px"
				}); // end css
				$(".roots_side").css({
					width: imgHeight + "px"
				}); //end animate

			}// end if statement
			else if(yPos<6630) {
				$(".roots_center, .roots_side").hide()
			}

	}); // end scroll
}); // end document ready
