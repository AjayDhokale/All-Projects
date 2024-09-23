const contents = document.querySelectorAll('.content')
const tabs = document.querySelectorAll('nav ul li')

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        hideImages()
        hidelist()
        tab.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideImages() {
    contents.forEach(item => {
        item.classList.remove('show')
    })
}

function hidelist() {
    tabs.forEach(item => {
        item.classList.remove('active')
    })
}