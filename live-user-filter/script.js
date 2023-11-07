const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
const NUMBER_OF_USERS = 50

getData()
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch(
    `https://randomuser.me/api?results=${NUMBER_OF_USERS}`
  )

  const { results } = await res.json()

  result.innerHTML = ''

  results.forEach((user) => {
    const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.thumbnail}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    result.appendChild(li)
  })
}

function filterData(searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm)) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
