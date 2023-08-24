// Navbar scroll effect
const navbar = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if (currentPosition < 10) {
        navbar.classList.remove('.change-navbar');
        navbar.classList.add('.reset-navbar');
    } else {
        navbar.classList.remove('.reset-navbar');
        navbar.classList.add('.change-navbar');
    }
})