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
const tabExpect = document.getElementById('tab-expect');

const txtBio = document.querySelector('.txt-bio');
const txtExpect = document.querySelector('.txt-expect');

tabBio.addEventListener('click', function() {
    resetTabs();
    this.classList.add('is-selected');
    txtBio.style.display = 'block';
})

tabExpect.addEventListener('click', function() {
    resetTabs();
    this.classList.add('is-selected');
    txtExpect.style.display = 'block';
})

const resetTabs = () => {
    tabBio.classList.remove('is-selected');
    tabExpect.classList.remove('is-selected');

    txtBio.style.display = 'none';
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

// Accordion
const questions = document.querySelectorAll('[data-accordion-question]')

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', showOrHide);
}

function showOrHide(element) {
    const toggleClass = 'accordion__box__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(toggleClass);
}

// Package cards
const pinkMoonBtn = document.getElementById('card-button-pink');
const pinkPackageTxt = document.getElementById('included-pink');

const orangeMoonBtn = document.getElementById('card-button-orange');
const orangePackageTxt = document.getElementById('included-orange');

pinkMoonBtn.addEventListener('click', function() {
    pinkMoonBtn.style.display = 'none';
    pinkPackageTxt.style.display = 'block';
})

orangeMoonBtn.addEventListener('click', function() {
    orangeMoonBtn.style.display = 'none';
    orangePackageTxt.style.display = 'block';
})

// Selecting packages
const selectPinkMoon = document.getElementById('selectPinkMoon');
const selectOrangeMoon = document.getElementById('selectOrangeMoon');
const selectIndividualSession = document.getElementById('individualSessionLink');
const selectYoga = document.getElementById('selectYoga');
const selectRitual = document.getElementById('selectRitual');

selectPinkMoon.addEventListener('click', function() {
    document.getElementById('pink-moon').checked = true;
})

selectOrangeMoon.addEventListener('click', function() {
    document.getElementById('orange-moon').checked = true;
})

selectIndividualSession.addEventListener('click', function() {
    document.getElementById('individual').checked = true;
})

selectYoga.addEventListener('click', function() {
    document.getElementById('yoga-class').checked = true;
})

selectRitual.addEventListener('click', function() {
    document.getElementById('mother-ritual').checked = true;
})

// Footer year
const d = new Date();
let year = d.getFullYear();

document.getElementById('year').innerHTML = year;