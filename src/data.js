// filtrar, ordenar y calcular
import data from './data/pokemon/pokemon.js';
export const filtroNombre = document.addEventListener("keyup", e=> {
  if (e.target.matches("#buscador")) {
    data.pokemon.forEach(nombrePokemon => {
      /*nombrePokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?nombrePokemon.classList.remove("filtro")
        :nombrePokemon.classList.add("filtro")
    console.log(nombrePokemon)}
    )
  }console.log(filtroNombre);
  
  return "filtroNombre";
});



/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
