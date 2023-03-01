// filtrar, ordenar y calcular
import data from "./data/pokemon/pokemon.js";
const input = document.getElementById("buscador");
const filtrarPokemon = (usuarioInput) => {
  return data.pokemon.filter((poke) => {
    if (poke.name.includes(usuarioInput)) {
      return true;
    } else {
      return false;
    }
  });
};
input.addEventListener("input", () => {
  const usuarioInput = input.value;
  const resultado = filtrarPokemon(usuarioInput);
  console.log(resultado);
});
export { filtrarPokemon };
/*export const soloNombre = ()=>{
  data.pokemon.filter((poke) =>{ return poke.name.includes(addEventListener("#buscador")})
    if(poke.name === "bulbasaur"){
      return true;
    } else{
      return false;
    }
}
}
  return "filtroNombre";
});
/*export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/