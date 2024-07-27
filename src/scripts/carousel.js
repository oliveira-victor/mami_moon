const carousel = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicator');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;
let autoSlideInterval;

const updateCarousel = () => {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateCarousel();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
    updateCarousel();
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
};

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return;
    }

    const x2 = event.touches[0].clientX;
    const y2 = event.touches[0].clientY;

    const xDiff = x2 - x1;
    const yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }

    x1 = null;
    y1 = null;
};

// Pause auto-slide when mouse is over the carousel
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();
