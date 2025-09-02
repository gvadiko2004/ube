const swiper = new Swiper(".swiper-price", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 1000,
  loop: false,

  breakpoints: {
    // экран ≥ 1080px — 3 слайда с отступом 24px
    1080: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // экран ≥ 768px — 2 слайда с отступом 16px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // экран < 768px — 1 слайд с отступом 8px
    0: {
      slidesPerView: 1.04,
      spaceBetween: 8,
    }
  },
});
