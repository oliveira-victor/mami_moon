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

// Resources modal
const resources = document.getElementById('resources');

function openResources() {
    resources.classList.add('showModal');
}

function closeResources() {
    resources.classList.remove('showModal');
}

// Modal

const modal = document.getElementById('modal');

const care = document.getElementById('care');
const yoga = document.getElementById('yoga');
const ceremony = document.getElementById('ceremony');
const photography = document.getElementById('photography');

function openModal(e) {
    modal.classList.add('showModal');

    e.classList.add('showContent');
}

function closeModal() {
    modal.classList.remove('showModal');

    care.classList.remove('showContent');
    yoga.classList.remove('showContent');
    ceremony.classList.remove('showContent');
    photography.classList.remove('showContent');
}

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');

const modalPage1 = document.getElementById('modal-page1');
const modalPage2 = document.getElementById('modal-page2');

function switchTabs(e, page) {
    tab1.classList.remove('selected-tab');
    tab2.classList.remove('selected-tab');

    e.classList.add('selected-tab');

    if (page === 1) {
        modalPage2.classList.remove('showPage');
        modalPage1.classList.add('showPage');
    } else if (page === 2) {
        modalPage1.classList.remove('showPage');
        modalPage2.classList.add('showPage');
    }
}

// Footer year
const d = new Date();
let year = d.getFullYear();

document.getElementById('year').innerHTML = year;

// Fetch blog posts
const latestPost = document.getElementById('latest-post');

function getLatestPost(data) {

    if (data.length === 0) {
        return
    }

    latestPost.innerHTML =  `Latest post: <strong>${data[0].title.rendered}</strong>`

}

async function fetchData(postsUrl) {
    try {
        const response = await fetch(postsUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();

        getLatestPost(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const postsUrl = 'https://blog.doulamamimoon.com/wp-json/wp/v2/posts';
fetchData(postsUrl);
