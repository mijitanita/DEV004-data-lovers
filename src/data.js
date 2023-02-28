// filtrar, ordenar y calcular
const filtroNombre = document.addEventListener("keyup", e=> {
  if (e.target.matches("#buscador")) {
    document.querySelectorAll("data.pokemon.name").forEach(nombrePokemon => {
      nombrePokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?nombrePokemon.classList.remove("filtro")
        :nombrePokemon.classList.add("filtro")
    }
    )
  }console.log(filtroNombre);
  
  return "filtroNombre";
});
export default filtroNombre;


/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
