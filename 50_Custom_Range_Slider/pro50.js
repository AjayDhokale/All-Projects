const range = document.querySelector('#range')
const lbl = document.querySelector('#lbl')

console.log(range.value);

range.addEventListener('input', (e) => {
    console.log(e.target.value);
    const value = e.target.value

    lbl.innerHTML = `${value}`


    const max = e.target.max
    const min = e.target.min
    const percentage = (value - min) / (max - min)

    const sliderWidth = e.target.offsetWidth
    const labelWidth = lbl.offsetWidth
    const newLabelPos = percentage * (sliderWidth - labelWidth)

    lbl.style.left = `${newLabelPos}px`

})