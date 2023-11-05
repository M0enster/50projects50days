const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num) => {
    num.addEventListener('animationend', (e) => {
      if (num.nextElementSibling) {
        if (e.animationName === 'goIn') {
          num.classList.remove('in')
          num.classList.add('out')
        } else {
          num.nextElementSibling.classList.add('in')
        }
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => resetDOM())
