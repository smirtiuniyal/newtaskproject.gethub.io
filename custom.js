$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("active");
});
 


$('.nav_link ul li:has(ul)').addClass('hassub');

$(".hassub > a").click(function (e) {
	e.preventDefault();
	$(this).parent('li.hassub').toggleClass('up');
	$(this).parent('li').siblings('li.hassub').removeClass('up');
	$(this).parent('li').siblings('li').children('ul').removeClass("active");
	$(this).siblings('ul').toggleClass("active");
});

	$(".nav_icon").click(function(){
	$(".nav_link").fadeIn(200);
	$("body").addClass("nav-open");
	});

	$(".nav_close").click(function(){

	$(".nav_link").fadeOut(200);
	$("body").removeClass("nav-open");
	})



$(document).ready(function() {
//$.noConflict();

  
  var owl_1 = $('#mainslider');
  owl_1.owlCarousel({
	margin: 0,
	dots: true,
	nav:false,
	// transitionStyle: "fade",
// animateIn: 'fadeIn',
// animateOut: 'fadeOut',
mouseDrag:true,
pullDrag:false,
touchDrag:true,
	autoplay:true,
	autoplayTimeout:7000,
	fluidSpeed:200,
	
	smartSpeed:500,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
  
var owl_1 = $('#app-slider');
  owl_1.owlCarousel({
	margin: 0,
	dots: false,
	nav:true,
autoplay:true,
	autoplayTimeout:4500,
	fluidSpeed:200,
	
	smartSpeed:500,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 3
	  },
	  1000: {
		items: 4
	  }
	}
  })
  
  var owl_1 = $('#activity-areas');
  owl_1.owlCarousel({
	margin: 0,
	dots: false,
	nav:true,
	autoplay:true,
	autoplayTimeout:4500,
	fluidSpeed:200,
	
	smartSpeed:500,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  1000: {
		items: 4
	  }
	}
  })

  var owl_1 = $('#get-application');
  owl_1.owlCarousel({
	margin: 10,
	dots: false,
	nav:false,
	autoplay:true,
	autoplayTimeout:4500,
	fluidSpeed:200,
	
	smartSpeed:500,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })
  
  var owl_1 = $('#social-areas');
  owl_1.owlCarousel({
	margin: 0,
	dots: false,
	nav:false,
	autoplay:false,
	autoplayTimeout:4500,
	fluidSpeed:200,
	
	smartSpeed:500,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  1000: {
		items: 1
	  }
	}
  })

})

// stopping dopdown from closing on clicking inside 


$('.dropdown.left_menu .dropdown-toggle').on('click', function (event) {
    $(this).parent().toggleClass('open');
});

$('body').on('click', function (e) {
    if (!$('.dropdown.left_menu').is(e.target) 
        && $('.dropdown.left_menu').has(e.target).length === 0 
        && $('.open').has(e.target).length === 0
    ) {
        $('.dropdown.left_menu').removeClass('open');
    }
});



$(".footer_bottom strong").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(".overview_s ul li:nth-child(1)").click(function(){
$(".overview_s span").empty();
$(".overview_s span").append("<iframe src='" + "https://www.youtube.com/embed/W5eAlsD6crg" + "' />");
});

$(".overview_s ul li:nth-child(2)").click(function(){
$(".overview_s span").empty();
$(".overview_s span").append("<iframe src='" + "https://www.youtube.com/embed/GJQa6yp-8PY" + "' />");
});

$(".overview_s ul li:nth-child(3)").click(function(){
$(".overview_s span").empty();
$(".overview_s span").append("<iframe src='" + "https://www.youtube.com/embed/GI0JUun6mnc" + "' />");
});

$(".overview_s ul li:nth-child(4)").click(function(){
$(".overview_s span").empty();
$(".overview_s span").append("<iframe src='" + "https://www.youtube.com/embed/bfEBB15lg0g" + "' />");


});














