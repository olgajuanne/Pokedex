
function redirecionar() {
  location.href = "index.html";
}
const id = 1 
const  url = `https://pokeapi.co/api/v2/pokemon/${id}`

fetch(url).then(function (response) {
  console.log(response)
})