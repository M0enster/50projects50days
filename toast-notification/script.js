const toasts = document.getElementById('toasts')
const btn = document.getElementById('btn')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification())

function createNotification(type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandom(types))

  notif.innerText = getRandom(messages)

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandom(lst) {
  return lst[Math.floor(Math.random() * lst.length)]
}
