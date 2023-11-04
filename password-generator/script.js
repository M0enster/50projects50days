const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lengthUpBtn = document.getElementById('length-up')
const lengthDownBtn = document.getElementById('length-down')
const lengthElSlider = document.getElementById('slider')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const resultContainerEl = document.querySelector('.result-container')

function pickRandom(len) {
  return Math.floor(Math.random() * len)
}

const generate = () => {
  const length = +lengthEl.value
  const types = []
  if (lowercaseEl.checked) types.push('lower')
  if (uppercaseEl.checked) types.push('upper')
  if (numbersEl.checked) types.push('number')
  if (symbolsEl.checked) types.push('symbol')

  resultEl.innerHTML = ''
  let lineDiv = document.createElement('div')
  for (let i = 0; i < length; i++) {
    if (i > 0 && i % 20 == 0) {
      resultEl.appendChild(lineDiv)
      lineDiv = document.createElement('div')
    }
    let randNum = pickRandom(types.length)
    let newSpan = document.createElement('span')
    newSpan.innerText = charType[types[randNum]]()
    newSpan.classList.add(types[randNum])
    lineDiv.appendChild(newSpan)
  }
  resultEl.appendChild(lineDiv)
  setHeight()
}

function setHeight() {
  resultContainerEl.style.height = `${resultEl.offsetHeight + 30}px`
}

function sliderFill() {
  lengthElSlider.value = lengthEl.value
  const percent = ((lengthEl.value - 16) / (99 - 16)) * 100
  lengthElSlider.style.background = `linear-gradient(to right, darkslateblue 0%, darkslateblue ${percent}%, #363b3d ${percent}%, #363b3d  100%)`
}

lengthEl.addEventListener('input', (e) => {
  lengthElSlider.value = e.target.value
  sliderFill()
  generate()
})
lengthUpBtn.addEventListener('click', () => {
  if (lengthEl.value >= 99) return
  lengthEl.value = +lengthEl.value + 1
  sliderFill()
  generate()
})
lengthDownBtn.addEventListener('click', () => {
  if (lengthEl.value <= 16) return
  lengthEl.value = +lengthEl.value - 1
  sliderFill()
  generate()
})
lengthElSlider.addEventListener('input', (e) => {
  lengthEl.value = e.target.value
  sliderFill()
  generate()
})

lowercaseEl.addEventListener('change', generate)
uppercaseEl.addEventListener('change', generate)
numbersEl.addEventListener('change', generate)
symbolsEl.addEventListener('change', generate)
generateEl.addEventListener('click', generate)

const charType = {
  lower: () => getRandom(97, 26),
  upper: () => getRandom(65, 26),
  number: () => getRandom(48, 10),
  symbol: () => getRandomSymbol(),
}

function getRandom(start, len) {
  return String.fromCharCode(pickRandom(len) + start)
}

function getRandomSymbol() {
  const ranges = [
    [33, 15],
    [58, 7],
    [91, 6],
    [123, 4],
  ]
  return getRandom(...ranges[pickRandom(ranges.length)])
}

clipboardEl.addEventListener('click', async () => {
  const password = resultEl.innerText
  if (!password) return
  try {
    await navigator.clipboard.writeText(password)
  } catch (err) {
    console.error('Failed to copy password: ', err)
  }
})

sliderFill()
generate()
