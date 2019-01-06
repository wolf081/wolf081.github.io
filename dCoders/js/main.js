$(document).ready(function () {

	// Toggle Navbar Styles While Scrolling
	$(window).scroll(function () {
		$('.navbar').toggleClass('navBar_scrolled', $(this).scrollTop() > 50);
		$('.nav-link').toggleClass('nav-link_scrolled', $(this).scrollTop() > 50);
		$('.navbar-title').toggleClass('navbar-title_scrolled', $(this).scrollTop() > 50);
	});

	// Toggle Hamburger Animation
	$(".hamburger").click(function (event) {
		$(".hamburger").toggleClass('is-active');
	});

	// Start ScrollIt Plugin 
	$(function () {
		$.scrollIt({
			topOffset: -20
		});
	});


	var portfolioContent = $('.portfolio-content-items');
	portfolioContent.mixItUp();


	/*Works Poupup Settings*/
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: false,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	// Testimonials Carousel Settings
	$('.testimonials-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: null,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	// Accordion 
	$(".accordion_head").click(function () {
		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".accordion_head").removeClass('active');
			$(".sign").text('+');
		}
		if ($(this).next(".accordion_body").is(':visible')) {
			$(this).next(".accordion_body").slideUp(300);
			$(this).children(".sign").text('+');
			$(this).removeClass('active');
		} else {
			$(this).next(".accordion_body").slideDown(300);
			$(this).children(".sign").text('-');
			$(this).addClass('active');
		}
	});
});