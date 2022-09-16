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

slides.forEach(function(slide) {
    nextBtn.addEventListener('click', function() {
        slide.style.transform = 'translate(100vw)'
    })

    prevBtn.addEventListener('click', function() {
        slide.style.transform = 'translate(-100vw)'
    })
})