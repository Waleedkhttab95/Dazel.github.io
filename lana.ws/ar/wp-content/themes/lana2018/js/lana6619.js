jQuery(document).ready(function($){
	

	$('body').jpreLoader({
           preMainSection:     '#main-preloader',
           prePerText:         '.preloader-percentage-text',
           preBar:             '.preloader-bar, .preloader-bar2',
	}); 
	
	$("#btn-menu").click(function(){
		$(this).toggleClass("active");
		$('.primmenu').toggle();
	})
	
     $.fn.equalHeights = function() {
        var maxHeight = 0,
		$this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();
            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
		target = $this.data('equal');
        $this.find(target).equalHeights();
    });
	
	


	
	$(window).bind("load", function() {
		$('.latest-blog .one-lblog .wrap-lblog, .wrap-lblog img').equalHeights();
		$('.os-wrap').equalHeights();
	});	
	$(window).bind("load", function() {
		var osh = $('.one-work.col-sm-3.col-xs-6 .wrap-owork').height();
		$('.boxmoreproject, .boxmoreproject .wrap-owork').height(osh);
	});	
	
	

	if ($(window).width() < 480) {
	$("#pmenu a").click(function(){
		$(".primmenu").hide();
		$("#btn-menu").toggleClass("active");
	})
	}
	
	$(window).on("resize scroll load", function(){
	if ($(window).width() > 767) {
		var height = $(this).height();
		$('.not-found-cont').height(height);
	$(".primmenu").niceScroll({
		cursorcolor: "#b3b3b3",	
		cursoropacitymin: 0.3,
		cursorborder: 0,
	});
	}
	})
	
	
	$(".open-rightspolicy").click(function(){
		$(".black-wrapper").fadeIn();
		$(".rightspolicy").fadeIn();
	})	
	$(".black-wrapper, .close-rightspolicy").click(function(){
		$(".black-wrapper").fadeOut();
		$(".rightspolicy").fadeOut();
	})		
		
		
	$(function(){

		$('#worksmixtup').mixItUp();

	});

	$('[data-toggle="tooltip"]').tooltip();



/*
$('.head-menu li').has('ul').children('a').append('<i class="fa fa-fw fa-angle-down"></i>');

$('.head-menu ul:first-child').slicknav({
	label: '',
		prependTo:'#mob-menu'
});

 
 $('#home-latest-prod').owlCarousel({
    loop:true,
    rtl:true,
    margin:0,
    nav:true,
    responsive:{

		0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
	navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplay: true,
		smartSpeed: 2000

})

*/
});

	
		// Big red button
	var redbutton = document.getElementById('share-button');
	var sharebutton = document.getElementById('shareicon');
	var xbutton = document.getElementById('xicon');

	// Mini share buttons
	var share1 = document.getElementById('share1');
	var share2 = document.getElementById('share2');
	var share3 = document.getElementById('share3');
	var share4 = document.getElementById('share4');
	var share5 = document.getElementById('share5');

	function share_expand() {
		// Animation for the big red button with the share icon
		redbutton.className = 'share-button button-expand';
		sharebutton.className = 'icon-share share-expand';
		xbutton.style.display = 'block';
		xbutton.className = 'icon-x x-expand';
		
		// Opening the mini share buttons
		setTimeout(function(){
			share1.className = 'share facebook opened';
			share2.className = 'share twitter opened';
			share3.className = 'share googleplus opened';
			share4.className = 'share whatsapp opened';
			share5.className = 'share tumblr opened';
		}, 200);
			
		// setTimeou for the big red button with the share icon
		setTimeout(function(){
			sharebutton.className = 'icon-share closed';
			xbutton.className = 'icon-x expanded';
			sharebutton.style.display = 'none';
		}, 200);
	}

	function share_close() {
		// Animation for the big red button with the share icon
		redbutton.className = 'share-button button-close';
		xbutton.className = 'icon-x x-close';
		sharebutton.style.opacity = '0';
		sharebutton.style.display = 'block';
		sharebutton.className = 'icon-share share-close';
		
		// Closing the mini share buttons
		share1.className = 'share facebook nodelay';
		share2.className = 'share twitter nodelay';
		share3.className = 'share googleplus nodelay';
		share4.className = 'share whatsapp nodelay';
		share5.className = 'share tumblr nodelay';
		
		
		// setTimeout for the big red button with the share icon
		setTimeout(function(){
			sharebutton.style.opacity = '1';
			sharebutton.className = 'icon-share';
			xbutton.className = 'icon-x';
			xbutton.style.display = 'none';
			redbutton.style.display = 'block';
			
			// Closing the mini share buttons
		share1.className = 'share facebook';
		share2.className = 'share twitter';
		share3.className = 'share googleplus';
		share4.className = 'share whatsapp';
		share5.className = 'share tumblr';
		}, 200);
	}

	
	//This part of the animation is "under construction" :)
	/*
	function icon_select(iconid) {
		var icon = document.getElementById(iconid);
		icon.className = icon.className + " " + "select";
	}
	*/
	