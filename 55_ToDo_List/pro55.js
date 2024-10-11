const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUL = document.querySelector('#todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addToDo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo()
})



function addToDo(todo) {
    let todoText = input.value 
    
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        
        
        
        todoEl.innerHTML = todoText
        
        todosUL.appendChild(todoEl)

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updatLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updatLS()
        })
    }


    input.value = ''
    updatLS()

}

function updatLS() {
    const todoEl = document.querySelectorAll('li')
    
    const todos = []

    todoEl.forEach(todo => {
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

