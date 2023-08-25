// Navbar scroll effect
const navbar = document.querySelector('.header');
const navbarLogo = document.getElementById('logo-txt');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if (currentPosition < 10) {;
        navbar.classList.remove('change-navbar');
        navbarLogo.style.display = 'none';
        mobileNav.classList.remove('change-mobile-navbar');
    } else {
        navbar.classList.add('change-navbar');
        navbarLogo.style.display = 'block';
        mobileNav.classList.add('change-mobile-navbar');
    }
})