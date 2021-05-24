$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
    1800: {
      items: 6,
    },
  },
});
