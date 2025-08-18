const inputSearch = document.querySelector('#search')
const navMenu = document.querySelector("[data-type='nav-menu']")

const details = Array.from(navMenu.querySelectorAll('.name'))
const lisPokemon = Array.from(navMenu.querySelectorAll('li.pokemon'))

inputSearch.addEventListener('input', function () {
  const str = this.value;
  if (str) {
    filterData(str)
  } else {
    showAllItems()
  }
})

function showAllItems() {
  lisPokemon.forEach(li => li.classList.remove('hide'))
  details.forEach(detail => detail.removeAttribute('open'))
}

function filterData(str) {
  showAllItems()
  lisPokemon.forEach(liPokemon => {
    const details = liPokemon.querySelector('.name')

    if(!details) return

    const pokemon = details.querySelector('pokemon')

    if (pokemon && pokemon.textContent.toLowerCase().includes(str.toLowerCase())) {
      return details.setAttribute('open', '')
    }

    const lis = details.querySelectorAll('li')

    let found = false

    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      if (li.textContent.toLowerCase().includes(str.toLowerCase())) {
          found = true
          li.classList.remove('hide')
      } else {
          li.classList.add('hide')  
      }
    }

    if(found){
      details.setAttribute('open', '')
    } else {
      details.removeAttribute('open')
    }
  })
}