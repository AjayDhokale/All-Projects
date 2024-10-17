const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.querySelector('#start-btn')
const game_Container = document.querySelector('#game-container')
const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selected_Insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {

        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selected_Insect = { src, alt }

        screens[1].classList.add('up')
        createInsect()
        startgame()
    })
})


function startgame() {
    setInterval(increseTime, 1000)
}

function increseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}


function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    insect.innerHTML = `<img src="${selected_Insect.src}" alt="${selected_Insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    const { x, y } = getRandomLocation()

    insect.style.top = `${y}px`
    insect.style.left = `${x}px`



    game_Container.appendChild(insect)

    insect.addEventListener('click', catchInsect)




}


function getRandomLocation() {
    let width = window.innerWidth
    let height = window.innerHeight

    let x = Math.random() * (width - 200) + 100
    let y = Math.random() * (height - 200) + 100


    return { x, y }
}


function catchInsect() {
    increseScore()

    this.classList.add('caught')
    setTimeout(() => this.remove(), 1000)
    addInsects()
}


function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}


function increseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`
}

