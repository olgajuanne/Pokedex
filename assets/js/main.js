const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 251
const limit = 9
let offset = 0;


function about() {
  location.href = "about.html";
    const nomePokemon = document.getElementsByName('#numb').value;
    document.getElementsByName('valorDigitado').innerHTML = nomePokemon; 
    console.log(nomePokemon)
}

const btn = document.querySelector('#send')
  btn.addEventListener("click", function(e){

    e.preventDefault();
    const numb = document.querySelector("#numb");

    const value = numb.value;
    console.log(value);
  });



function loadPokemonItens(offset, limit) {

  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
          </div>
        </li>
      `).join('')
      pokemonList.innerHTML += newHtml
      
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit

  const qtdRecordNextPage = offset + limit

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }  
})

