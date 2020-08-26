// Кнопка подробнее
(function($) {
  $("body").css("display", "none");

  $("body").fadeIn(1000);
  
  $(".btn-more").on("click", function(event) {
    event.preventDefault();
    $(".fp-slide").toggleClass("animate-box");
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

	function redirectPage() {
		window.location = linkLocation;
	}

}(jQuery));