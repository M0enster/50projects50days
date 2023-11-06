const poke_container = document.getElementById('poke-container')
const pokemons_number = 150
const mode_switch = document.getElementById('switch')
const light_mode = document.getElementById('light')
const dark_mode = document.getElementById('dark')
const colorsDark = {
  normal: '#6C6B45',
  fire: '#9E4C1E',
  water: '#3C5B90',
  electric: '#A4941A',
  grass: '#4E6438',
  ice: '#669E9B',
  fighting: '#8C1E1A',
  poison: '#7A297A',
  ground: '#9E8F43',
  flying: '#7B6DF0',
  psychic: '#BB2E5D',
  bug: '#6E7512',
  rock: '#7D7322',
  ghost: '#4D4274',
  dragon: '#4B25D3',
  dark: '#4E4743',
  steel: '#787882',
  fairy: '#9E5F7E',
}
const colorsLight = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

let colors = colorsLight

mode_switch.addEventListener('change', () => {
  setMode()
})

function setMode() {
  if (mode_switch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    colors = colorsDark
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    colors = colorsLight
  }
  dark_mode.classList.toggle('hidden')
  light_mode.classList.toggle('hidden')
  poke_container.innerHTML = ''
  fetchPokemons()
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon-form/${id}`
  const res = await fetch(url)
  const pokemon = await res.json()
  createPokemonCard(pokemon)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  pokemonEl.style.backgroundColor = colors[pokemon.types[0].type.name]
  if (pokemon.types.length > 1) {
    pokemonEl.style.background = `linear-gradient(90deg, ${
      colors[pokemon.types[0].type.name]
    }, ${colors[pokemon.types[1].type.name]})`
  }
  const paddedId = String(pokemon.id).padStart(3, '0')
  const types = pokemon.types
    .map((type) => type.type.name)
    .join(' / ')
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const pokemonInnerHTML = `
    <div class="img-container">
      <img
        src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedId}.png"
        alt="${name}"
      />
    </div>
    <div class="info">
      <span class="number">#${paddedId}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${types}</span>
      </small>
    </div>
  `
  pokemonEl.innerHTML = pokemonInnerHTML

  poke_container.appendChild(pokemonEl)
}

fetchPokemons()
