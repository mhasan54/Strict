$(document).ready(function() {
	// MIXITUP JS
	var mixer = mixitup('.mixitup-plugin');

	// MOBILE MENU
	$('.bar-icon').on('click',function() {
		$('.mobile-menu').slideToggle();
	})

	$('.mobile-menu ul li a').on('click',function() {
		$('.mobile-menu').hide();
	})

	// Smooth Scroll

	// $('a').on('click', function(event) {
	// 	if (this.hash !== "") {
	// 		event.preventDefault();

	// 		var hash = this.hash;

	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top }, 800, function() {
	// 			window.location.hash = hash;
	// 		});
	// 	}
	// });

	
	// Resize window desktop menu
	$(window).resize(function() {
		var screenSize = $(window).width();

		if (screenSize > 768) {
			$('.mobile-menu').hide();
		}
	});

});