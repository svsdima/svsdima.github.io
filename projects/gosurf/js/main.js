/* Слайды */
$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: '.slider-dots',
});

$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    arrows: false,
    responsive: [
      {
        breakpoint: 961,
        setting: "unslick"
      },
    ]
    
});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1081,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
});

$('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
});

/* Инпуты */
$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

/* Расчёт стоимости отеля */

$('.quantity-button').on('click', function () {
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
});

$('.quantity').each(function () {
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
});


/* При клике на + на доске, будет появляться информация */

$('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
});

$('.menu-btn').on('click', function() {
  $('.menu').toggleClass('active');
});

new WOW().init();

/* Появление кнопки */
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.up__arrows').fadeIn();
  } else {
    $('.up__arrows').fadeOut();
  }
});

/* Плавный скролл */
$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

});

