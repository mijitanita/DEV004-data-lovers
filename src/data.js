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

export function filtrarResistencia(arreglo, resistant) {
  const resultadoResistant = arreglo.filter((elemento) =>
    elemento.resistant.includes(resistant)
  );
  return resultadoResistant;
}

export function filtrarDebilidad(arreglo, weaknesses) {
  const resultadoWeaknesses = arreglo.filter((elemento) =>
    elemento.weaknesses.includes(weaknesses)
  );
  return resultadoWeaknesses;
}









export function ordenar(arreglo, option) {
  const ordenarHeight = arreglo.sort((a, b) =>{
    if(option=== 1){
      //console.log(a.size.height.substr(0, a.size.height.length-1))//
      return a.size.height.substr(0, a.size.height.length-1)- b.size.height.substr(0, b.size.height.length-1)
    }else{
      return b.size.height.substr(0, b.size.height.length-1)- a.size.height.substr(0, a.size.height.length-1)
    }
  });
  console.log(ordenarHeight);
  return ordenarHeight;
}
export function ordenarCp(arreglo, option) {
  const ordenaCp = arreglo.sort((a, b) =>{
    if(option=== 1){
      //console.log(a.size.height.substr(0, a.size.height.length-1))//
      return a.stats["max-cp"]- b.stats["max-cp"]
    }else{
      return b.stats["max-cp"]- a.stats["max-cp"]
    }
  });
  console.log(ordenaCp);
  return ordenaCp;
}

