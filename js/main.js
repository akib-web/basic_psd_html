(function ($) {
	"use strict";
/*---------------------
TOP Menu Stick
--------------------- */
var s = $("#site-navigation");
var pos = s.position();
$(window).scroll(function () {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
		s.addClass("stick");
	} else {
		s.removeClass("stick");
	}
});
/*---------------------
on page nav
--------------------- */
$('.nav, .slide').onePageNav({
	currentClass: 'current',
	changeHash: true,
	scrollSpeed: 1500,
	scrollThreshold: 0.5,
	filter: ':not(.external)',
	easing: 'swing',
	begin: function () {
//I get fired when the animation is starting
},
end: function () {
//I get fired when the animation is ending
},
scrollChange: function (jQuerycurrentListItem) {
//I get fired when you enter a section and I pass the list item of the section
}
});




/*---------------------
scrollup
--------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
});

// banner carousel
var owl = $("#banner-carousel");
owl.owlCarousel({
items: 1, //10 items above 1000px browser width
itemsDesktop: [1000, 1], //5 items between 1000px and 901px
itemsDesktopSmall: [768, 2], // betweem 900px and 601px
itemsTablet: [600, 2], //2 items between 600 and 0
itemsMobile: [479, 1],// itemsMobile disabled - inherit from itemsTablet option
loop:true,
autoPlay: false,

pagination: true,
// navigation: true, // Show next and prev buttons
// slideSpeed: 1000,
// paginationSpeed: 1000,
// singleItem: true,
});
// // Custom Navigation Events
// $(".next").click(function () {
//     owl.trigger('owl.next');
// })
// $(".prev").click(function () {
//     owl.trigger('owl.prev');
// })
// $(".play").click(function () {
//     owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
// })
// $(".stop").click(function () {
//     owl.trigger('owl.stop');
// })
// ===========banner carousel end==========




// ceo-carousel
var owl = $("#ceo-carousel");
owl.owlCarousel({
items: 1, //10 items above 1000px browser width
itemsDesktop: [1000, 1], //5 items between 1000px and 901px
itemsDesktopSmall: [768, 2], // betweem 900px and 601px
itemsTablet: [600, 2], //2 items between 600 and 0
itemsMobile: [479, 1],// itemsMobile disabled - inherit from itemsTablet option
loop:true,
autoPlay: false,

pagination: true,
// navigation: true, // Show next and prev buttons
slideSpeed: 1000,
paginationSpeed: 1000,
singleItem: true,
});
// Custom Navigation Events
$(".next").click(function () {
	owl.trigger('owl.next');
})
$(".prev").click(function () {
	owl.trigger('owl.prev');
})
// $(".play").click(function () {
//     owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
// })
// $(".stop").click(function () {
//     owl.trigger('owl.stop');
// })
// ===========ceo-carousel end===========


// $('[data-social]').socialButtons(
//     {
	
//     });






          
// mixit up
// ============
$('#portfolio-items').mixItUp({
	animation: {
		effects: 'fade scale',
		duration: 600,
	}
});


/*---------------------
    prettyPhoto active
    --------------------- */
    $("a[rel^='prettyPhoto']").prettyPhoto({

    });
// wow js
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };

    
})(jQuery);