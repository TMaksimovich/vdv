$(document).ready(function() {
	$('#fullpage').fullpage({
      'autoScrolling': true,
	    'scrollHorizontally': true,
      'slidesNavigation': true,
	    'fixedElements': 'header, .footer-social',

	    onSlideLeave: function( section, origin, destination, direction){
			var leavingSlide = origin.index;

			$('.fp-slide').removeClass('animateClose');
      $('.fp-slide').eq(leavingSlide).addClass('animateClose');
		}
	})

})