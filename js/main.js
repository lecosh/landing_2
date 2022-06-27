const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});
const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', ()=>{
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})