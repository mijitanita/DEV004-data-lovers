// filtrar, ordenar y calcular

export function filtrarPokemon(arreglo, name) {
  const resultado = arreglo.filter((elemento) => elemento.name.includes(name));
  return resultado;
}
export function filtrarTipo(arreglo, type) {
  const resultadotipo = arreglo.filter((elemento) =>
    elemento.type.includes(type)
  );
  return resultadotipo;
}

/*export const ordenar = pokemon.pokemon;
ordenar.sort(function(a, b) {
  return b.stats["max-cp"] - a.stats["max-cp"];
});*/

export function ordenar(arreglo, option) {
  const ordenarHeight = arreglo.sort((a, b) =>{
    if(option=== 1){
      console.log(a.size.height.substr(0, a.size.height.length-1))
      return a.size.height.substr(0, a.size.height.length-1)- b.size.height.substr(0, b.size.height.length-1)
    }else{
      return b.size.height - a.size.height
    }
  });
  console.log(ordenarHeight);
  return ordenarHeight;
}

/*export function ordenar(arreglo, height) {
  const resultadoOrdenar = arreglo.sort((a, b) => {
    if (a.height === b.height) {
      return 0;
    }    if (a.height> b.height) {
      return 1;
    }    return -1;
  });
  return resultadoOrdenar;
  // console.log(resultadoOrdenar)//
}*/

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
