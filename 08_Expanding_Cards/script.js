const panels = document.querySelectorAll('.panel') 

panels.forEach( pan1 => {
    pan1.addEventListener('click', function(){
        removeActiveClass()
        pan1.classList.add('active');
        console.log("panel clicked")
       
    })

})


function removeActiveClass(){
    panels.forEach( pan => {
        pan.classList.remove('active')
     
    })
}

