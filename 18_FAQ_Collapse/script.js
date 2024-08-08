const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.parentNode.classList.toggle('active')
    })

})