$("document").ready(function() {
	
	$(window).load(function(){
	  $('#loader').fadeOut(3000);
	});

	$(".player, #about_rebekah_fixed").hide();

	$(".listen").click(function(event) {
		event.preventDefault();
		$(".player").toggle(200);
	});
	$('body').click(function() {
		alert($(window).scrollTop());
		alert($(window).width());
		alert(($(window).width()/2) - ($(".slider img:first").width()/2));
	});

	$(window).resize(function() {
		var scrollTop = $(window).scrollTop();
		var imgPos = -(($(window).width()/2) - ($(".slider img:first").width()/2));
		var xPos = ((scrollTop - 7560) - imgPos);
		$(".slider").css({'position' : 'relative', 'right' : imgPos + 'px'});
		if (scrollTop >= 2300) {
			$(".slider").css({'position' : 'fixed'});
			$(".slider").css({
				'right': xPos +'px'
			});
		}		
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
		var imgPos = -(($(window).width()/2) - ($(".slider img:first").width()/2));
		var xPos = ((scrollTop - 7560) - imgPos);

		if (scrollTop >= 2250 && scrollTop <= 6700) {
			$("#about_rebekah_fixed").fadeIn(500);
		}
		else {
			$("#about_rebekah_fixed").fadeOut(500);
		}

		if (scrollTop >= 2300 && scrollTop <= 7100) {
			$(".slider").css({'position' : 'fixed'});
			$(".slider").fadeIn(500);
			$(".slider").css({
				'right': xPos +'px'
			});
		}
		else if(scrollTop <= 2300) {
			$(".slider").css({'position' : 'relative', 'right' : imgPos + 'px'});
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
				$(".roots_side").animate({
					width: imgHeight + "px"
				}, 100); //end animate

			}// end if statement
			else if(yPos<8100) {
				$(".roots_center, .roots_side").hide()
			}

	}); // end scroll
}); // end document ready
