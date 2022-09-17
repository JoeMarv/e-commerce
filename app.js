//DECLARATIONS
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')
const menu = document.querySelector('.menu')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')
const carousel = document.querySelector('.carousel')
const btns = document.querySelectorAll('.counter-btn')
const counter = document.querySelector('.item-number')
const addBtn = document.querySelector('.add-btn')
const cartNumber = document.querySelector('.cart-number')
const cartBtn = document.querySelector('.cart-btn')
const cartContainer = document.querySelector('.cart-contents')
const removeBtn = document.querySelector('.remove-btn')
const qty = document.querySelector('.qty')
const qtyPrice = document.querySelector('.qty-price')


// MENU TOGGLERS
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})


// CAROUSEL BUTTONS FUNCTIONS
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


// ADD TO CART
addBtn.addEventListener('click', function() {
    cartNumber.textContent = counter.textContent
    qty.textContent = counter.textContent
    qtyPrice.textContent = '$'+ 125*counter.textContent

    if(cartNumber.textContent == 0) {
        cartNumber.classList.remove('show-number')
        cartContainer.classList.remove('filled')
    }else{
        cartNumber.classList.add('show-number')
        cartContainer.classList.add('filled')
    }
})


//CART CONTENTS TOGGLE
cartBtn.addEventListener('click', function() {
    cartContainer.classList.toggle('show-cart')
})


//REMOVE BUTTON
removeBtn.addEventListener('click', function() {
    cartContainer.classList.remove('filled')
    counter.textContent = 0
    cartNumber.textContent = ''

    console.log(counter);
})