const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const inputSearch = document.getElementById("search");
 
const maxRecords = 151;
const limit = 10;
let offset = 0;
let allPokemons = []; // armazenar todos os Pokémon carregados
 
function renderPokemons(pokemons) {
  const newHtml = pokemons
    .map(
      (pokemon) => `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
 
        <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
  `
    )
    .join("");
 
  pokemonList.innerHTML = newHtml;
}
 
// Carrega novos Pokémons
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    allPokemons = allPokemons.concat(pokemons); // adiciona ao array completo
    renderPokemons(allPokemons);
  });
}
 
// Load More
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;
 
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
 
// Filtro
inputSearch.addEventListener("input", function () {
  const str = this.value.trim().toLowerCase();
 
  if (!str) {
    renderPokemons(allPokemons); // mostra todos se campo vazio
    return;
  }
 
  const filtered = allPokemons.filter((pokemon) => {
    const name = pokemon.name.toLowerCase();
    const types = pokemon.types.map((t) => t.toLowerCase());
    return name.includes(str) || types.some((type) => type.includes(str));
  });
 
  renderPokemons(filtered);
});
 
// Carrega inicial
loadPokemonItens(offset, limit);

// Conceito de Promise (Processamento Assincrono)
// fetch - Retorna uma Promise, para lidar com o assincronismo dentro do JS (Promessa de uma Resposta)
// => arow function
// Any ???
// concatenar
