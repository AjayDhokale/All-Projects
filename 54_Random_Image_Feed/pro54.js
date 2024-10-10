// const url = 'https://picsum.photos/seed/picsum/'
const container = document.querySelector('.container')

const rows = 5


createImg()

function createImg() {
    for (let i = 0; i < rows * 8; i++) {
        const img = document.createElement('img')
        const randomSeed = Math.floor(Math.random() * 1000);    
        const url = `https://picsum.photos/seed/${randomSeed}/${getRandomSize()}`
        img.src = url
        container.appendChild(img)
    }
}

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`
}


function getRandomNr() {
    return Math.floor(Math.random() * 100) + 400
}