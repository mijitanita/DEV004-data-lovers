import { example } from './data.js';

import data from './data/pokemon/pokemon.js';
// console.log(pokemon.pokemon)
let acortado = data.pokemon.slice(0,9);
console.log(acortado)

function mostrarPokemon(arreglo){
    const contenedorPokemon = document.getElementById('contenedorPokemon')
    for(let i = 0 ; i < arreglo.length ; i++ ){
        // crear elementos *****
      //  console.log(arreglo[i])
     /* const h1 = document.createElement('h1')
      h1.textContent = arreglo[i].name
      contenedorPokemon.appendChild(h1) */
      // interpolacion de variables y template string *****
      /*
       contenedorPokemon.innerHTML += ` <article>
       <h4>${arreglo[i].name}</h4>
       <img src="${arreglo[i].img}" alt="">
     </article>`*/
     //concatenacion ****
     // contenedorPokemon.innerHTML += '<h4>' + arreglo[i].name + '</h4>'

     contenedorPokemon.innerHTML += ` <article>
       <h5>${arreglo[i].num}</h5>
       <h1>${arreglo[i].name}</h1>
       <h5></h5> Num: ${arreglo[i].generation.num}</h5>
       <h5> Name: ${arreglo[i].generation.name}</h5>
       <h4> CP: ${arreglo[i].stats ["max-cp"]}</h4>
       <h4> HP: ${arreglo[i].stats ["max-hp"]}</h4>
       <img src="${arreglo[i].img}" alt="">
       <h6> Height: ${arreglo[i].size.height}</h6>
       <h6> Weight: ${arreglo[i].size.weight}</h6>
      <h4>${arreglo[i].type}</h4>
      <h3> RESISTANT ${arreglo[i].resistant}</h3>
      <h3> WEAKNESSES ${arreglo[i].weaknesses}</h3>
      <h6> <img src="/egg.png">${arreglo[i].egg}</h6>
      <h6> <img src="/candy.png">${arreglo[i].evolution.candy}</h6>


      



     </article>`
     
    }
}
mostrarPokemon(acortado)