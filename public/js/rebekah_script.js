$("document").ready(function() {

	function init() {
		$("#player").hide();
		var scrollTop;
		var imgPos;
		var xPos;

		// sets loading gif until images are loaded
		$(window).load(function(){
		    $('#loader').fadeOut(2000);
		    return false;
		}); // end load

		$('body').click(function() {
			alert($(window).scrollTop());
			return false;
		}); // end click

		// hide divs that will be faded in and out later
		$("#about_rebekah_fixed").hide();

		// shows music player
		$("#listen").click(function(event) {
			event.preventDefault();
			$("#player").toggle(200);
			return false;
		}); // end click

		// set active nav function
		$(function() {
			$(window).scroll(function() {
				scrollTop = $(window).scrollTop();
				var removeClass = $(".active").removeClass("active");

				if (scrollTop < 1000) {
					removeClass;
					$("#nav_contain ul li a:first").addClass("active");
				}
				else if (scrollTop >= 1000 && scrollTop < 2000) {
					removeClass;
					$("#nav_contain ul li a:eq(1)").addClass("active");
				}
				else if (scrollTop >= 2000 && scrollTop < 8200) {
					removeClass;
					$("#nav_contain ul li a:eq(2)").addClass("active");
				}
				else if (scrollTop >= 8200 && scrollTop < 9450) {
					removeClass;
					$("#nav_contain ul li a:eq(3)").addClass("active");
				}
				else {
					removeClass;
					$("#nav_contain ul li a:eq(4)").addClass("active");
				}

				return false;
			});
			return false;
		});

		// resizes gallery when browser is adjusted
		$(function() {
			$(window).resize(function() {
				scrollTop = $(window).scrollTop();
				imgPos = -(($(window).width()/2) - ($("#slider img:first").width()/2));
				xPos = ((scrollTop - 7555) - imgPos);

				// centers first gallery img, consequently making sure gallery scrolls smoothly through
				// the process of sizing and resizing
				$("#slider").css({'position' : 'relative', 'right' : imgPos + 'px'});

				// adjusts gallery if gallery scroll has begun
				if (scrollTop >= 2300) {
					$("#slider").css({'position' : 'fixed'});
					$("#slider").css({
						'right': xPos +'px'
					});
				}
				return false;		
			}); // end window resize
			return false;
		}); // end function

		// activates animation for anchor nav tags
	    $(function() {
		    $('a[href*=#]:not([href=#])').click(function() {
		      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		        if (target.length) {
		          $('html,body').animate({
		            scrollTop: target.offset().top
		          }, 1000);
		          return false;
		        }
		      }
		    }); // end click
		    return false;
		}); // end function

	    // function for gallery inititiation
	    $(function() {
			$(window).scroll(function() {
				scrollTop = $(window).scrollTop();
				imgPos = -(($(window).width()/2) - ($("#slider img:first").width()/2));
				xPos = ((scrollTop - 7555) - imgPos);

				// fades about info in and out, before and after #about div
				if (scrollTop >= 2250 && scrollTop <= 6700) {
					$("#about_rebekah_fixed").fadeIn(500);
                    $(".ab_reb").fadeIn(500);
				}
				else {
					$("#about_rebekah_fixed").fadeOut(500);
                    $(".ab_reb").fadeOut(500);
				}

				// switches position to fixed, and then slides gallery left minus the img center
				// and minus the scrolltop position in which the gallery scroll has begun.
				if (scrollTop >= 2300 && scrollTop <= 7100) {
					$("#slider").css({'position' : 'fixed'});
					$("#slider").fadeIn(500);
					$("#slider").css({
						'right': xPos +'px'
					});
				}
				// sets gallery to relative so it is visible before scroll
				else if(scrollTop <= 2300) {
					$("#slider").css({'position' : 'relative', 'right' : imgPos + 'px'});
				}
				// fades gallery after scrolling past
				else {
					$("#slider").fadeOut(500);
				}
				return false;
			}); // end scroll
			return false;
		}); // end function
		return false;
	} // end init


	// Where did little suzy go during the bombing?  Everywhere.
	init();
}); // end document ready
