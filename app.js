// MENU TOGGLERS
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})


// CAROUSEL BUTTONS FUNCTIONS
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')
const carousel = document.querySelector('.carousel')

slides.forEach(function(slide) {
    const slideWidth = slide.clientWidth

    nextBtn.addEventListener('click', function() {
        carousel.scrollLeft += slideWidth
    })

    prevBtn.addEventListener('click', function() {
        carousel.scrollLeft -= slideWidth
    })
})