const leftSide = document.querySelector('.left') 
const rightSide = document.querySelector('.right') 
const contain = document.querySelector('.container')

leftSide.addEventListener('mouseenter', ()=> {
    contain.classList.add('hover-left')
})

leftSide.addEventListener('mouseleave', ()=> {
    contain.classList.remove('hover-left')
})

rightSide.addEventListener('mouseenter', ()=> {
    contain.classList.add('hover-right')
})

rightSide.addEventListener('mouseleave', ()=> {
    contain.classList.remove('hover-right')
})
