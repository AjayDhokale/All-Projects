const closeBtn = document.querySelector('.close-btn') 
const openBtn = document.querySelector('.open-btn') 
const sidebar = document.querySelectorAll('.nav') 


closeBtn.addEventListener('click', () => {
    
    sidebar.forEach(navEl => {
        navEl.classList.remove('visible')
    } )

})


openBtn.addEventListener('click', () => {

    sidebar.forEach(navEl => {
        navEl.classList.add('visible')
    } )

})