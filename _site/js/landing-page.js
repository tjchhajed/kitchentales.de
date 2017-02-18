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

/* scroll based parallax */
$(document).ready(function() {
    /* css + js driven API */
    AOS.init();
    /* pure js driven API */
    skrollr.init();
});

/* blur background image on scroll */
$(window).on('scroll', function () {
    var pixs = $(window).scrollTop();
    opacityVal = (pixs / 150.0);
    $(".bg-img-blur").css('opacity',opacityVal);
});
