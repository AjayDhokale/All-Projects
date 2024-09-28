const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('.btn')
const panel = document.querySelector('.panel-container')
let selectedString = '' 

ratings.forEach((rate,idx) => {
    
    rate.addEventListener('click', () => {
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active')
             
        }

        const smallContent = rate.querySelector('.rating small')
        rate.classList.add('active')
        selectedString = smallContent.textContent
    })
})



sendBtn.addEventListener('click', () => {
    console.log(selectedString);
    panel.innerHTML = `
        <i style="color: red; font-size: 28px;" class="fas fa-heart"></i>
        <br>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedString}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `  
})