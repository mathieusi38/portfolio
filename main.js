

$('#openNav').on('click', function() {
  $('#myNav').css("width", "100%");
  $('.embed-responsive-item').attr({'autoplay':'true'});
});

$('#closeNav').on('click', function() {
  $('#myNav').css("width", "0%");
  $('.embed-responsive-item').attr({'autoplay':'false'});
});
