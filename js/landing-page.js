// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

/* transparency of the navigation bar with scrolling*/
function checkScroll(){
    var startY = $('.navbar').height() * 5; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

/* fadeIn animation with scroll (applicable anywhere in the html body)*/
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fadeIn').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});

/* testimonial slider */
$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    margin:30,
    stagePadding:30,
  });
});

/* blur background image on scroll */
$(window).on('scroll', function () {
    var pixs = $(window).scrollTop();
    opacityVal = (pixs / 150.0);
    $(".bg-img-blur").css('opacity',opacityVal);
});

$(document).ready(function() {
    // init AOS
    AOS.init();
});

(function($){
			$(document).ready(function (){
				$("#side-menu-content").mCustomScrollbar({
					theme:"rounded-dots",
					scrollInertia:800
				});

			});
		})(jQuery);

document.getElementById("audio").volume = 0.5;


var position = [27.1959739, 78.02423269999997];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    shirdi_map = new google.maps.Map(document.getElementById('shirdi'),
        mapOptions);

    // Show the default red marker at the location
    shirdi_marker = new google.maps.Marker({
        position: latLng,
        map: shirdi_map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    siliguri_map = new google.maps.Map(document.getElementById('siliguri'),
        mapOptions);

    // Show the default red marker at the location
    siliguri_marker = new google.maps.Marker({
        position: latLng,
        map: siliguri_map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);
