const background = document.querySelector('#background')
const pass = document.querySelector('#password')

pass.addEventListener('input', (e) => {
    const input = e.target.value.length
    const pixels = 20 - input * 2
    background.style.filter = `blur(${pixels}px)`
})
