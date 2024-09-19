const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

// console.log(nums[0].classList.value);

// console.log(nums.length - 1);

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length -1
       
       
        num.addEventListener('animationend', (e) => {
           
            // console.log("animation ended---------------------")

            // console.log("num log:", nums[idx] );
            
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                // console.log("1st if:", e.animationName === 'goIn' && idx !== nextToLast);
                
                num.classList.remove('in')
                num.classList.add('out')
                
            } else if(e.animationName === 'goOut' && num.nextElementSibling) {
                
                num.nextElementSibling.classList.add('in')
                // console.log("2nd if:", num);
            } else {
                // console.log("3rd if:", );
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
    
        })
    }) 
}


function resetDom() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')


    nums.forEach(num => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

replay.addEventListener('click', () => {
    // console.log("replay clicked");
    resetDom()
    // runAnimation()
    
})