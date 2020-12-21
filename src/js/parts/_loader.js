// Прелоадер
$(window).on('load', function () {
  var $preloader = $('.loader-inner'),
    $spinner   = $('.loader');
  //$spinner.fadeOut();
  $spinner .delay(1000).fadeOut('slow');
});