

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



//! UP ARROW
// Create the arrow element
// const arrow = document.createElement('a');
// arrow.href = '#section1';
// arrow.className = 'upArrow';
// arrow.innerHTML = '<img class="upArrow" src="/img/up-arrow.png">';

// // Get all the sections on the page
// const sections = document.querySelectorAll('section');

// // Append the arrow element to each section
// sections.forEach(section => {
//   const clonedArrow = arrow.cloneNode(true);
//   section.appendChild(clonedArrow);
// });


window.onscroll = function () {
  toggleScrollUpButton();
};

function toggleScrollUpButton() {
  const scrollUpButton = document.querySelector(".upArrow");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}









