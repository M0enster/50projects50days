const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // if (smallCups[idx].classList.contains('full')) {
  //   idx--
  // }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup(idx)
}

function updateBigCup(idx) {
  idx++
  liters.innerText = `${2 - (idx * 250) / 1000}L`
  percentage.innerText = `${(idx / 8) * 100}%`
  if (idx === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(idx / 8) * 330}px`
  }
  if (idx === 8) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
  }
}
