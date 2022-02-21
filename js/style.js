let menu = document.querySelector('.fa-align-justify')
let Ul = document.querySelector('.ul1')
let nav = document.querySelector('nav')
let ico = document.querySelector('.fa-times')
let main = document.querySelector('.main')
let pop = document.querySelector('.submit')
let valid = document.querySelector('.main6')
let pop2 = document.querySelector('.sub')
let page = document.querySelector('.pagea')
let bot = document.querySelector('.bot')
menu.addEventListener('click', function() {
    Ul.style.display = 'flex'
    ico.style.visibility = 'visible'

})
ico.addEventListener('click', function() {
    Ul.style.display = ''
    ico.style.visibility = 'hidden'
        // Ul.style.display = 'block '
})
pop.addEventListener('click', function() {
    valid.style.display = 'block'
})
pop2.addEventListener('click', function() {
    valid.style.display = 'none'
})
bot.addEventListener('click', function() {
    page.style.height = '0%'
})