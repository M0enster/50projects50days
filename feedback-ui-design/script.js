const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

const panelClick = (e) => {
  if (
    e.target.parentNode.classList.contains('rating') ||
    e.target.classList.contains('rating')
  ) {
    ratings.forEach((child) => {
      child.classList.remove('active')
    })
    if (e.target.classList.contains('rating')) {
      e.target.classList.add('active')
      selectedRating = e.target.lastElementChild.innerText
    } else {
      e.target.parentNode.classList.add('active')
      selectedRating = e.target.parentNode.lastElementChild.innerText
    }
  } else if (e.target.classList.contains('btn')) {
    panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
    `

    panel.removeEventListener('click', panelClick)
  }
}

panel.addEventListener('click', panelClick)
