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

// Tell more info
const tellMore = document.querySelector('.tell-more');
const extraInfo = document.querySelector('.extra-info');

tellMore.addEventListener('click', function() {
    tellMore.style.display = 'none';
    extraInfo.style.display = 'block';
    extraInfo.classList.add('fade-in')
})

// About tabs
const tabBio = document.getElementById('tab-bio');
const tabFunfacts = document.getElementById('tab-funfacts');
const tabExpect = document.getElementById('tab-expect');

const txtBio = document.querySelector('.txt-bio');
const txtFunfacts = document.querySelector('.txt-funfacts');
const txtExpect = document.querySelector('.txt-expect');

tabBio.addEventListener('click', function() {
    resetTabs();
    this.classList.add('is-selected');
    txtBio.style.display = 'block';
})

tabFunfacts.addEventListener('click', function() {
    resetTabs();
    this.classList.add('is-selected');
    txtFunfacts.style.display = 'block';
})

tabExpect.addEventListener('click', function() {
    resetTabs();
    this.classList.add('is-selected');
    txtExpect.style.display = 'block';
})

const resetTabs = () => {
    tabBio.classList.remove('is-selected');
    tabFunfacts.classList.remove('is-selected');
    tabExpect.classList.remove('is-selected');

    txtBio.style.display = 'none';
    txtFunfacts.style.display = 'none';
    txtExpect.style.display = 'none';
}

// Animate about picture
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("rotate");
        } else {
        reveals[i].classList.remove("rotate");
        }
    }
}

window.addEventListener("scroll", reveal);