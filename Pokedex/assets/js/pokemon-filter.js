const inputSearch = document.querySelector('#search')
const navMenu = document.querySelector("[data-type='nav-menu']")

const lispokemonName = Array.from(navMenu.querySelectorAll('li.pokemonName'))

inputSearch.addEventListener('input', function () {
  const str = this.value.trim().toLowerCase();
  if (str) {
    filterData(str)
  } else {
    showAllItems()
  }
})

function showAllItems() {
  lispokemonName.forEach(li => li.classList.remove('hide'))
}

function filterData(str) {
  showAllItems()
  lispokemonName.forEach(lipokemonName => {
    const nameElement = lipokemonName.querySelector('.name')

    if(!nameElement) return

    const pokemonName = nameElement.textContent.toLowerCase()
    if (pokemonName.includes(str)) {
    liPokemon.classList.remove('hide')
    } else {
    liPokemon.classList.add('hide')
    }
  })
}
