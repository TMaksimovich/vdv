$(document).ready(function() {
	$('#fullpage').fullpage({
      'autoScrolling': true,
	    'scrollHorizontally': true,
      'slidesNavigation': true,
      'fixedElements': 'header, .footer-social',
      'responsiveWidth': 570,
      'scrollOverflow':true,
      // 'responsiveHeight': 800,
      //'responsiveSlides': true,

	    onSlideLeave: function( section, origin, destination, direction){
			  var leavingSlide = origin.index;

			  $('.fp-slide').removeClass('animateClose');
        $('.fp-slide').eq(leavingSlide).addClass('animateClose');
      },
      afterResize: function() {
        setTimeout(function(){
          $('.front-page').css("height", "100vh");
        }, 100);
      }
	})
});

window.onpageshow = function(evt) {
  if (evt.persisted) {
      document.body.style.display = "none";
      window.location.reload();
  }
};