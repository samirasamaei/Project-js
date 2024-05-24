const _li = document.querySelectorAll('ul>li')
const myimg = document.querySelector('figure>img')
const span = document.getElementById('icon')
const card = document.querySelector('.card')
const s = document.getElementById('span')

span.addEventListener('click', () => {
    card.style.width = '660px'
    span.style.display = 'none'
    myimg.classList.add("hov")
})
s.addEventListener('click', () => {
    card.style.width = '330px'
    span.style.display = 'flex'
    myimg.classList.remove("hov")

})

function para() {
    myimg.src = "img/img1.webp";
}
function par() {
    myimg.src = "img/img2.webp";
}
function pa() {
    myimg.src = "img/img3.webp";
}
function p() {
    myimg.src = "img/img4.webp";
}