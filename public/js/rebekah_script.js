$("document").ready(function() {
	
	$(window).load(function(){
	  $('#loader').fadeOut(3000);
	});

	$(".player, .slider, #about_rebekah_fixed").hide();

	$(".listen").click(function(event) {
		event.preventDefault();
		$(".player").toggle(200);
	});
	$('body').click(function() {
		alert($(window).scrollTop());
	});


    $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var xPos = (scrollTop - 7400);

		if (scrollTop >= 1800 && scrollTop <= 6700) {
			$("#about_rebekah_fixed").show();
		}
		else {
			$("#about_rebekah_fixed").hide();
		}

		if (scrollTop >= 2400 && scrollTop <= 6600) {
			$(".slider").fadeIn(500);
			if (scrollTop >= 2400 && scrollTop <= 6450) {
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
		imgHeight = yPos - 8100;
			if (yPos > 8100 && yPos < 8650) {
				$(".roots_center, .roots_side").show();
				$(".roots_center").css({
					height: imgHeight + "px"
				}); // end css
				$(".roots_side").css({
					width: imgHeight + "px"
				}); //end animate

			}// end if statement
			else if(yPos<8100) {
				$(".roots_center, .roots_side").hide()
			}

	}); // end scroll
}); // end document ready
