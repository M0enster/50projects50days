const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgs = document.getElementById('imgs')
const main = document.getElementById('main')
let balls = []

const len = imgs.children.length
let cnt = 0
let interval

createBalls()
resetInterval()

function createBalls() {
  const ballContainer = document.createElement('div')
  ballContainer.classList.add('ball-container')
  for (let i = 0; i < len; i++) {
    const ball = document.createElement('div')
    ball.classList.add('ball')
    ballContainer.appendChild(ball)
  }
  ballContainer.children[0].classList.add('active')
  main.appendChild(ballContainer)
  balls = ballContainer.children
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(() => carousel(1), 2000)
}

leftBtn.addEventListener('click', () => {
  carousel(-1)
})
rightBtn.addEventListener('click', () => {
  carousel(1)
})

function carousel(x) {
  balls[cnt].classList.remove('active')
  cnt = (cnt + x + len) % len
  imgs.style.transform = `translateX(${-500 * cnt}px)`
  balls[cnt].classList.add('active')
  resetInterval()
}

main.addEventListener('mouseover', () => {
  clearInterval(interval)
})

main.addEventListener('mouseleave', () => {
  resetInterval()
})
