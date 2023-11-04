const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    const random = Math.floor(Math.random() * 2)
    if (good === theClickedOne) {
      if (random === 0) {
        fast.checked = false
      } else {
        cheap.checked = false
      }
    }

    if (cheap === theClickedOne) {
      if (random === 0) {
        good.checked = false
      } else {
        fast.checked = false
      }
    }

    if (fast === theClickedOne) {
      if (random === 0) {
        good.checked = false
      } else {
        cheap.checked = false
      }
    }
  }
}
