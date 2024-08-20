const counters  = document.querySelectorAll('.counter')

counters.forEach(cntr => {
    cntr.innerText = '0'

    const updateCounter = () => {

        const target = +cntr.getAttribute('data-target')

        const c = +cntr.innerText

        const increment = target / 200;

        if(c < target){
            cntr.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        else{
            cntr.innerText = target
        }

    }

    updateCounter()

} )