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

