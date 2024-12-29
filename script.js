// Select all slides and dots
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Variable to keep track of the current slide index
let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  // Hide all slides and remove the active class from all dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current slide and activate the corresponding dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Add click events to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlideIndex = index; // Update the current slide index
    showSlide(currentSlideIndex);
  });
});

// Function to move to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlideIndex);
}

// Automatically switch to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the slideshow by showing the first slide
showSlide(currentSlideIndex);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
