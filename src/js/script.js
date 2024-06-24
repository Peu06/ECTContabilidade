// MENU
let menuOpener = document.querySelector('.menu-opener')
let nav = document.querySelector('header nav')

menuOpener.addEventListener('click', () => {
    if (nav.classList.contains('opened')) {
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon').style.display = 'none'
        menuOpener.querySelector('.hamburguer-icon').style.display = 'flex'
    } else {
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon').style.display = 'flex'
        menuOpener.querySelector('.hamburguer-icon').style.display = 'none'
    }
})

let currentSlide = 0;

function showSlide(index) {
    const container = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    const totalSlides = cards.length;
    const visibleSlides = 3;

    if (index >= totalSlides - visibleSlides) {
        index = totalSlides - visibleSlides;
    }
    if (index < 0) {
        index = 0;
    }

    container.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});