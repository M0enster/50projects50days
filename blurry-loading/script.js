const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let blur = 30

let int = setInterval(blurring, 30)

bg.style.filter = `blur(${blur}px)`

function blurring() {
  load++
  loadText.innerText = `${load}%`
  loadText.style.opacity = 1 - load / 100
  bg.style.filter = `blur(${blur - load * (blur / 100)}px)`
  if (load > 99) {
    clearInterval(int)
    loadText.innerText = ''
  }
}
