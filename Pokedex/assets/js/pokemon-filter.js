const inputSearch = document.querySelector("#search");
const navMenu = document.querySelector("#pokemonList");
 
inputSearch.addEventListener("input", function () {
  const str = this.value.trim().toLowerCase();
  const lis = navMenu.querySelectorAll("li.pokemon"); // pega sempre os elementos atuais
 
  lis.forEach((li) => {
    const nameEl = li.querySelector(".name");
    const typesEls = li.querySelectorAll(".types .type");
 
    const name = nameEl ? nameEl.textContent.toLowerCase() : "";
    const types = Array.from(typesEls).map((el) =>
      el.textContent.toLowerCase()
    );
 
    // Se o nome ou algum tipo inclui o texto pesquisado
    if (name.includes(str) || types.some((type) => type.includes(str))) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });
});
