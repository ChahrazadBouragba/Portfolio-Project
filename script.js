

//! Functionality of  the buttons horizontal slide:

// Get references to the slide container and buttons
const slideContainer = document.querySelector('.slideHlder');
const prevButton = document.querySelector('.beforeArow');
const nextButton = document.querySelector('.nextArow');

// Add a click event listener to the "Prev" button
prevButton.addEventListener('click', () => {
  // Move the slide container to the left by the width of one slide
  slideContainer.scrollBy({
    left: -slideContainer.offsetWidth,
    behavior: 'smooth'
  });
});

// Add a click event listener to the "Next" button
nextButton.addEventListener('click', () => {
  // Move the slide container to the right by the width of one slide
  slideContainer.scrollBy({
    left: slideContainer.offsetWidth,
    behavior: 'smooth'
  });
});