jQuery(document).ready(function($){
	

	$('#wrapper').fullpage({
		menu: '#pmenu',
		navigation: true,
		lockAnchors: false,
		anchors:['Home', 'AboutUs', 'Services', 'Team', 'Clients', 'Portfolio', 'Blog', 'ContactUs'],
		navigationTooltips: ['', 'About Us', 'Services', 'Team', 'Clients', 'Portfolio', 'Blog', 'Contact Us'],
		scrollingSpeed: 600,
		easing: 'easeInOutExpo',
		paddingTop: '0',
		paddingBottom: '0',
		lazyLoading: true,
		scrollOverflow: false,
		responsiveWidth: 768,

	});
	var owl = $('#slider');
	owl.owlCarousel({
		loop:true,
		rtl:true,
		margin:0,
		nav:false,
		dots:true,
		items:1,
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplay: true,
		smartSpeed: 800,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	})
	

	$(".logo img").attr("src", $(".logo img").data('src') );

	owl.on('changed.owl.carousel', function(event) {
	if(event.item.index == 3 || event.item.index == 4 ){
		$(".logo img").attr("src", $(".logo img").data('inv') );

	} else {
		$(".logo img").attr("src", $(".logo img").data('src') );
	}
	});
	
	$('[data-tilt]').tilt({
		reset: false,
		glare: true,
		maxGlare: .6
	})
	$('.img-team').tilt({
		reset: false,
		glare: false,
		maxGlare: .6
	})
	$(window).on("resize scroll load", function(){
		var height = $(this).height();
		$('.slider, .slider .slid, .slider .slid img').height(height);
		
		if ($(window).width() > 767) {
		var ofirstheight = $('.ofirst-work').height();
		$('.ofirst-work .wrap-owork, .ofirst-work .wrap-owork img').height(ofirstheight+2);
		}
	})
	
	

	$('.clients-caros .one-client').removeClass("col-xs-4 col-sm-2");

	$('.clients-caros').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		rtl:true,
		dots:true,
		responsive:{

			0:{
				items:2
			},
			400:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		},
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplay: true,
		smartSpeed: 300

	})
	

});