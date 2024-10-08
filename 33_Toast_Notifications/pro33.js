const btn = document.querySelector('.btn')
const toasts = document.querySelector('#toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = ['info', 'success', 'error']


btn.addEventListener('click', () => createNotification() )

function createNotification(message = null, type = null){
    const notification = document.createElement('div')
    notification.classList.add('toast')

    notification.classList.add(type ? type : getRandomType())
    notification.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notification)

    setTimeout(()=>{
        notification.remove()
    }, 3000)
    
}


function getRandomType(){
    return types[Math.floor(Math.random() * types.length )]
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}