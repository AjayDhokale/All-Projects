const searchDiv= document.querySelector('.search')
const button = document.querySelector('.btn')


button.addEventListener('click', ()=> {
    searchDiv.classList.toggle('active')
})

