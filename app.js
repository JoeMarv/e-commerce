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