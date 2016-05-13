'use strict';

// Set the page height based on the window height.
$('.page').css('height', $(window).height());

// Scroll from page1 to page2.
$('#btnNext1').click(() => {
  $('html, body').animate({
    scrollTop: $('#page2').offset().top
  }, 500);
});

// Scroll from page2 to page3.
$('#btnNext2').click(() => {
  $('html, body').animate({
    scrollTop: $('#page3').offset().top
  }, 500);
});

// Scroll from page3 to page4.
$('#btnNext3').click(() => {
  $('html, body').animate({
    scrollTop: $('#page4').offset().top
  }, 500);
});

/*Floating Scroll-to-Top Button*/
let amountScrolled = 300;

// Fade or unfade the back-to-top button based
//   on the scroll position in the document.
$(window).scroll(() => {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

// Scroll from anywhere in the document to page1.
$('a.back-to-top').click(() => {
  $('html, body').animate({
    scrollTop: $('#page1').offset().top
  }, 500);
});

