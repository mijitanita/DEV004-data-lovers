// filtrar, ordenar y calcular
import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
export function filtrarPokemon(arreglo, name) {
  const resultado = arreglo.filter((elemento) => elemento.name.includes(name));
  return resultado;
}
export function filtrarTipo(arreglo, type) {
  const resultadotipo = arreglo.filter((elemento) => elemento.type.includes(type));
  return resultadotipo;
}

export function ordenar(arreglo,height){
const resultadoOrdenar =arreglo.sort((a, b) => a.height - b.height);
return resultadoOrdenar;
}





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
