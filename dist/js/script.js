$('.owl-carousel').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$('.block').owlCarousel({
  loop: true,
  dots: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

function carousel(selector, button) {
  $(button + ' .next').click(function () {
    $(selector).trigger('next.owl.carousel');
  });
  $(button + ' .previous').click(function () {
    $(selector).trigger('prev.owl.carousel');
  });
}
carousel('.slider-one', '.inspirations');
carousel('.slider-two', '.customer');
