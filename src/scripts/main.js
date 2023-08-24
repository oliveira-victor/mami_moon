// Navbar scroll effect
const navbar = document.querySelector('.header');
const navbarLogo = document.getElementById('logo-txt');

window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if (currentPosition < 10) {;
        navbar.classList.remove('change-navbar');
        navbarLogo.style.display = 'none'
    } else {
        navbar.classList.add('change-navbar');
        navbarLogo.style.display = 'block'
    }
})