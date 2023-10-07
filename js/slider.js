let galleryWrapper = document.querySelector('.gallery__wrapper');
let sliderImages = document.querySelectorAll('.gallery__picture');
let prevButton = document.querySelector('.gallery__slider-button--prev');
let nextButton = document.querySelector('.gallery__slider-button--next');
let paginationButtons = document.querySelectorAll('.gallery__slider-pagination-button');

let currentSlideIndex = 0;

function showSlides() {
  sliderImages.forEach((image) => {
    image.style.display = 'none';
  });

  let slidesToShow = 1;
  if (window.innerWidth >= 768 && window.innerWidth < 1300) {
    slidesToShow = 2;
  } else if (window.innerWidth >= 1300) {
    slidesToShow = 3;
  }

  for (let i = 0; i < slidesToShow; i++) {
    const index = (currentSlideIndex + i) % sliderImages.length;
    sliderImages[index].style.display = 'block';
  }

  paginationButtons.forEach((button, buttonIndex) => {
    if (buttonIndex >= currentSlideIndex && buttonIndex < currentSlideIndex + slidesToShow) {
      button.classList.add('gallery__slider-pagination-button--current');
    } else {
      button.classList.remove('gallery__slider-pagination-button--current');
    }
  });
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = sliderImages.length - 1;
  }
  showSlides();
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
  showSlides();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlideIndex = index;
    showSlides();
  });
});

showSlides();

window.addEventListener('resize', showSlides);
