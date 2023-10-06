const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    if (tagsEl.children.length > 0) {
      randomSelect()
    }
  }
})

function createTags(input) {
  const choices = input
    .split(',')
    .map((choice) => choice.trim())
    .filter((choice) => choice !== '')

  tagsEl.innerHTML = ''
  choices.forEach((choice) => {
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = choice
    tagsEl.appendChild(tag)
  })
}

function randomSelect() {
  const times = 30
  let selectedTag = null
  const interval = setInterval(() => {
    if (selectedTag) {
      selectedTag.classList.remove('highlight')
    }
    selectedTag = pickRandomTag()
    selectedTag.classList.add('highlight')
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
  }, times * 100)

  function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
  }
}
