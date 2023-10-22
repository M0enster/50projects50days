const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0

// loveMe.addEventListener('dblclick', (e) => {
loveMe.addEventListener('click', (e) => {
  if (clickTime == 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  times.innerHTML = parseInt(times.innerHTML) + 1
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const rect = loveMe.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  heart.style.left = `${x}px`
  heart.style.top = `${y}px`

  loveMe.appendChild(heart)

  setTimeout(() => heart.remove(), 600)
}
