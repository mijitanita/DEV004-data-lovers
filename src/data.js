// filtrar, ordenar y calcular
import data from "./data/pokemon/pokemon.js";
export  function  filtrarPokemon (arreglo , name){
const resultado = arreglo.filter(elemento=>elemento.name.includes(name))
return resultado
};





/*const input = document.getElementById("buscador");
const filtrarPokemon = (usuarioInput) => {
  return data.pokemon.filter((poke) => {
    if (poke.name.includes(usuarioInput)) {
      return true;
    } else {
      return false;
    }
  });
};*/
