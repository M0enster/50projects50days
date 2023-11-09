const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const NR = 10

for (let i = 0; i < NR; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * NR) + 300
}

window.addEventListener('scroll', () => {
  const { scrollTop, _, clientHeight } = document.documentElement
  const containerBottom = container.offsetTop + container.offsetHeight
  const width = window.innerWidth

  if (scrollTop + clientHeight > containerBottom) {
    for (let i = 0; i < Math.floor(width / 320); i++) {
      const img = document.createElement('img')
      img.src = `${unsplashURL}${getRandomSize()}`
      container.appendChild(img)
    }
  }
})
