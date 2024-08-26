const btns = document.querySelectorAll('.ripple')

btns.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        console.log("btn clicked");
        
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(()=> circle.remove(), 500)
    })
})





    // btn.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const circle = document.querySelector('.circle')
    //             circle.style.transform= `scale(10)`;
               
    //             circle.style.backgroundColor = "white"
            
    //             console.log("btn clicked");
                
            
    //             setTimeout(() => {
    //                 circle.classList.remove('circle')
    //             }, 500)

    //           temp()
                
             
    //     })
    
    // })
    


    // function temp(){
    //     circle.classList.add('circle')
    // }

