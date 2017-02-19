$(document).ready(function(){
   $('ul.tabs').tabs('select_tab', 'tab_id');

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $('#showAbout').click(function() {
    $('html,body').animate({
        scrollTop: $('.aboutme').offset().top},
        'slow');
});

$('#showSkills').click(function() {
  $('html,body').animate({
      scrollTop: $('.skils').offset().top},
      'slow');
});

$('#showPortfolio').click(function() {
  $('html,body').animate({
      scrollTop: $('.portfolio').offset().bottom},
      'slow');
});


});
