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


//COUNTER
const btns = document.querySelectorAll('.counter-btn')
const counter = document.querySelector('.item-number')

let count = 0
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList

        if(styles.contains('minus')) {
            count--
        }

        else if(styles.contains('plus')) {
            count++
        }

        else {
            count = 0
        }

        if(count < 0) {
            count = 0
        } 

        counter.textContent = count
    })
})
