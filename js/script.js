// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 6 + '%)',
  });
  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll / 4 + '%)',
  });
  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll / 2 + '%)',
  });
});
