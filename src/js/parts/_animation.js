// Анимация при скролле
  function scrollTracking(){
    $('.scroll-animate').each(function(){

      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(this).offset().top;
      var eh = $(this).outerHeight();
      var dh = $(document).height();   
    
      if (wt + wh >= et || wh + wt == dh || eh + et < wh){
        // Код анимации
        $(this).addClass("active-animate");
      }
    })
  }

 
$(window).scroll(function(){
      scrollTracking();
});
	
$(document).ready(function(){ 
      scrollTracking();
});