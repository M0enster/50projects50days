const form = document.getElementById('form')
const input = document.getElementById('input')
const listEl = document.getElementById('todos')

let storedData = localStorage.getItem('todos')
let todos = new Map(JSON.parse(storedData))

todos.forEach((_, idx) => {
  addTodo(idx)
})

function addTodo(uuid) {
  const todo = todos.get(uuid)
  const li = document.createElement('li')
  li.innerText = todo.text
  if (todo.completed) {
    li.classList.add('completed')
  }
  li.addEventListener('click', (e) => {
    if (e.ctrlKey) {
      e.preventDefault()
      todos.delete(uuid)
      li.remove()
      setStorage()
    } else {
      todo.completed = !todo.completed
      li.classList.toggle('completed')
      setStorage()
    }
  })
  listEl.prepend(li)
}

function setStorage() {
  localStorage.setItem('todos', JSON.stringify([...todos]))
}

function appendTodo(input) {
  const uuid = Date.now()
  todos.set(uuid, { text: input, completed: false })
  addTodo(uuid)
  setStorage()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  appendTodo(e.target.input.value)
  e.target.input.value = ''
})
