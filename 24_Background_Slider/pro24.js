const slides = document.querySelectorAll('.slide')
const leftBTN = document.querySelector('.left-arrow')
const rightBTN = document.querySelector('.right-arrow')


let activeSlide = 0

rightBTN.addEventListener('click', () => {

    activeSlide++
    console.log("right clicked");

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBG()
    setActiveSlide()
})

leftBTN.addEventListener('click', () => {

    activeSlide--
    console.log("left clicked");

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBG()
    setActiveSlide()


})

setBG()

function setBG() {
    document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')

}