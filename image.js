document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.children;
    const totalSlides = slides.length;
    let index = 0;
    const interval = 3000; // Change slide every 3 seconds

    function showNextSlide() {
        index = (index + 1) % totalSlides;
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
    }

    setInterval(showNextSlide, interval);

    // Prevent default action on slider-nav links
    const navLinks = document.querySelectorAll('.slider-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});