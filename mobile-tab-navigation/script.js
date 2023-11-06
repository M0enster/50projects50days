// select all li in ul in nav
const listItems = document.querySelectorAll('nav ul li')
const imgItems = document.querySelectorAll('.content')

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    listItems.forEach((item) => {
      item.classList.remove('active')
    })
    item.classList.add('active')
    imgItems.forEach((img) => {
      img.classList.remove('show')
    })
    imgItems[idx].classList.add('show')
  })
})
