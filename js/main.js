 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
			center: true,
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    autoplayHoverPause: false,
	    items: 3,
	    dots: true,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:2,
	        nav:false
	      },
	      1000:{
	        items:3,
	        nav:false
	      }
	    }
	   });
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 15,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 2
				}
			}
		});
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   
   $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#appointment_time').timepicker({
		'minTime': '8:00am',
    	'maxTime': '8:00pm',
    	'showDuration': false
	});

	/* Scroll to top when arrow up clicked BEGIN */
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if (height > 50) {
	        $('#myBtn').fadeIn();
	    } else {
	        $('#myBtn').fadeOut();
	    }
	});
	$(document).ready(function() {
	    $('#myBtn').click(function(event) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: 0 }, 'slow');
	        return false;
	    });

	});
	 /* Scroll to top when arrow up clicked END */


	/* Scrool to Selling Process Section BEGIN */
	$(document).ready(function() {
	    $('#sellBtn').click(function(event) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: $('#selling').offset().top }, "slow");
	        return false;
	    });
	});
	/* Scrool to Selling Process Section END */


	/* Scrool to Buying Process Section BEGIN */
	$(document).ready(function() {
	    $('#buyBtn').click(function(event) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: $('#buying').offset().top }, "slow");
	        return false;
	    });
	});
	/* Scrool to Buying Process Section END */


	/* Scrool to Leasing Process Section BEGIN */
	$(document).ready(function() {
	    $('#leaseBtn').click(function(event) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: $('#leasing').offset().top }, "slow");
	        return false;
	    });
	});
	/* Scrool to Leasing Process Section END */


	/* Scrool to Marketing Stratgey Section BEGIN */
	$(document).ready(function() {
	    $('#marketBtn').click(function(event) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: $('#marketing').offset().top }, "slow");
	        return false;
	    });
	});
	/* Scrool to Marketing Strategy Section END */


	// Real Estate - Book An Appointment Form START.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#appointment-form')[0],
					$submit = document.querySelectorAll('#appointment-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = true;

							// Show message.
								$message._show('success', 'Thank you! Your appointment has been sent and Bama will contact you as soon as possible.');
								//$message._show('failure', 'Something went wrong, Please try again!');

						}, 1000);

				});

		})();
	// Real Estate - Book An Appointment Form END.


	// Freelancer - Start A Project Form START.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#freelancer-form')[0],
					$submit = document.querySelectorAll('#freelancer-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					var $freelancer_name = $('#freelancer_name').val(),
						$freelancer_email = $('#freelancer_email').val(),
						$freelancer_cell = $('#freelancer_cell').val(),
						$human1 = document.getElementById("human1").checked,
						$human2 = document.getElementById("human2").checked,
						$human3 = document.getElementById("human3").checked,
						$human4 = document.getElementById("human4").checked,
						$human5 = document.getElementById("human5").checked,
						$freelancer_message = $('#freelancer_message').val();

						if ($human1 == true) {
							$human1 = "YES";
						} else {
							$human1 = "NO"
						}
						if ($human2 == true) {
							$human2 = "YES";
						} else {
							$human2 = "NO"
						}
						if ($human3 == true) {
							$human3 = "YES";
						} else {
							$human3 = "NO"
						}
						if ($human4 == true) {
							$human4 = "YES";
						} else {
							$human4 = "NO"
						}
						if ($human5 == true) {
							$human5 = "YES";
						} else {
							$human5 = "NO"
						}

				        $.ajax({
				            type: 'POST',
				            url: 'freelancer.php',
				            data: {'freelancer_name':$freelancer_name, 'freelancer_email':$freelancer_email, 'freelancer_cell':$freelancer_cell, 'human1':$human1, 'human2':$human2, 'human3':$human3, 'human4':$human4, 'human5':$human5, 'freelancer_message':$freelancer_message},
				        	cache: false
				        });

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = true;

							// Show message.
								$message._show('success', 'Thank you! Bama will contact you soon about your project.');
								//$message._show('failure', 'Something went wrong, Please try again!');

						}, 1000);

				});

		})();
	// Freelancer - Start A Project Form END.


	// Contact Form START.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#contact-form')[0],
					$submit = document.querySelectorAll('#contact-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener', $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					var $contact_name = $('#contact_name').val(),
						$contact_email = $('#contact_email').val(),
						$contact_category = $('#contact_category').val(),
						$contact_message = $('#contact_message').val();

				        $.ajax({
				            type: 'POST',
				            url: 'contact.php',
				            data: {'contact_name':$contact_name, 'contact_email':$contact_email, 'contact_category':$contact_category, 'contact_message':$contact_message},
				            cache: false
				        });

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = true;

							// Show message.
								$message._show('success', 'Thank you! Your message has been sent.');
								//$message._show('failure', 'Something went wrong, Please try again!');

						}, 1000);

				});

		})();
	//Contact Form END.

	//Critique Form START.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#critique-form')[0],
					$submit = document.querySelectorAll('#critique-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener', $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					var $critique_name = $('#critique_name').val(),
						$critique_occupation = $('#critique_occupation').val(),
						$critique_message = $('#critique_message').val();

				        $.ajax({
				            type: 'POST',
				            url: 'critique.php',
				            data: {'critique_name':$critique_name, 'critique_occupation':$critique_occupation, 'critique_message':$critique_message},
				            cache: false
				        });

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = true;

							// Show message.
								$message._show('success', 'Thank you for your review.');
								//$message._show('failure', 'Something went wrong, Please try again!');

						}, 1000);

				});

		})();
	//Critique Form END.


	//Radio Button START
	$("#radioBuy").hide();
	$("#radioSell").hide();
	$("#radioRent").hide();

	$('input[id="priority-low"]').click(function() {
		$("#radioSell").hide();
		$("#radioRent").hide();
        $("#radioBuy").show();
    });
    $('input[id="priority-normal"]').click(function() {
        $("#radioBuy").hide();
        $("#radioRent").hide();
        $("#radioSell").show();
    });
    $('input[id="priority-high"]').click(function() {
        $("#radioBuy").hide();
        $("#radioSell").hide();
        $("#radioRent").show();
    });
    $('input[type="submit"]').click(function() {
        $("#radioBuy").hide();
        $("#radioSell").hide();
        $("#radioRent").hide();
    });
	//Radio Button END


	//Human Checkbox Questions START
	$("#updateSiteQues").hide();
	$("#redesignSiteQues").hide();
	$("#instagramQues").hide();

	$('input[id="human2"]').click(function() {
		if($('#human2:checked').length) {
            $("#updateSiteQues").show();
        } else {
            $("#updateSiteQues").hide();
        }
    });
    $('input[id="human3"]').click(function() {
    	if($('#human3:checked').length) {
            $("#redesignSiteQues").show();
        } else {
            $("#redesignSiteQues").hide();
        }
    });
	$('input[id="human4"]').click(function() {
        if($('#human4:checked').length) {
            $("#instagramQues").show();
        } else {
            $("#instagramQues").hide();
        }
    });
    $('input[type="submit"]').click(function() {
    	$("#updateSiteQues").hide();
		$("#redesignSiteQues").hide();
        $("#instagramQues").hide();
    });
	//Human Checkbox Questions END


	//Vacation Responder Timer START
	/*$(window).load(function() {
        setTimeout(function() {
            $('#vacationResponder').modal('show');
    	}, 2000);
    });*/
    //Vacation Responder END


    //Real Estate Modal Timer START
	/*$(window).load(function() {
        setTimeout(function() {
            $('#modalRequest').modal('show');
    	}, 5000);
    });*/
    //REal Estate Modal Timer END

});

