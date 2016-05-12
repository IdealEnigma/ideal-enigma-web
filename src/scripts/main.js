'use strict';

$('.page').css('height', $(window).height());

$('#btnNext1').click(() => {
  $('html, body').animate({
    scrollTop: $('#page2').offset().top
  }, 500);
});

$('#btnNext2').click(() => {
  $('html, body').animate({
    scrollTop: $('#page3').offset().top
  }, 500);
});

$('#btnNext3').click(() => {
  $('html, body').animate({
    scrollTop: $('#page4').offset().top
  }, 500);
});

/*Floating Scroll-to-Top Button*/
let amountScrolled = 300;

$(window).scroll(() => {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

