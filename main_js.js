// document.addEventListener('DOMContentLoaded', function () {
//     const projects = document.querySelectorAll('.project-link');
//     const totalItems = projects.length;
//     const halfItems = Math.ceil(totalItems / 2);
  
//     projects.forEach((project, index) => {
//       if (index < halfItems) {
//         project.classList.add('left-column');
//       } else {
//         project.classList.add('right-column');
//       }
//     });
//   });


const sun = document.querySelector('.bi-sun')
const moon = document.querySelector('.bi-moon')
const body  = document.querySelector('body')
const projects  = document.querySelectorAll('.project-link')


sun.addEventListener('click', () => {

    // body.style.backgroundColor = 'black'
    
    
    projects.forEach( pro => {
        pro.style.backgroundColor = 'white'
        pro.style.color = 'black'
    })
    
   

        sun.style.display = 'none'
         moon.style.display = 'inline'

})
moon.addEventListener('click', () => {

    // body.style.backgroundColor = 'white'
  
    
    projects.forEach( pro => {
        pro.style.backgroundColor = 'black'
        pro.style.color = 'white'
    })
    
   

    moon.style.display = 'none'
    sun.style.display = 'inline'


    
})