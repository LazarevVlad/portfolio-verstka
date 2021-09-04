'use strict';
var $ = window.$;

let mediaXxs = 320;
let mediaXs = 480;
let mediaSm = 768;
let mediaMd = 1024;
let mediaLg = 1200;
let mediaXl = 1440;
let mediaXxl = 1600;
let mediaXxxl = 1920;

$(document).ready(function () {

  $.fancybox.defaults.touch = false;
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.infobar = false;
  $.fancybox.defaults.arrows = false;
  $.fancybox.defaults.autoFocus = false;

  $('.js-open-menu').on('click', function(e){
    $(this).toggleClass('is-open');
    $('#mobile-menu').toggleClass('is-open');
  });

  function animateInput(input){
    if ($(input).val().length > 0) {
      $(input).addClass('is-full');
    } else {
      $(input).removeClass('is-full')
    }
	}

	$(document).on('change', '.input_animate', function(){
    animateInput(this)
  })

  $.each( $('.input'), function( index, element ) {
    animateInput(element)
  });

  //  Плавный переход к якорю
  
	$('[js-anchor]').on("click", function (event) {
    let target = $(this).attr('href');
    $('.js-open-menu').removeClass('is-open');
    $('#mobile-menu').removeClass('is-open');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100 
    }, 800);
    return true;
	});

});