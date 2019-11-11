import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtrodebilidad, filtroTipo, buscarPorNombre,
} from './data.js';


const dataPokemon = traerDataMap2(POKEMON);
const templateCard = (arr) => {
  let stringTemplate = '';
  arr.forEach((obj) => {
    stringTemplate += `<div class="tarjeta-pokemon" id=${obj.identificador}>
    <img src="${obj.imagen}" class="imagen-pokemon">
    <p class="nombre-pokemon"  >${obj.nombre}  </p>
    <p class="numero-pokemon" >${obj.numero} </p>
    <div class="informacion-alternativa">
    <div class="datos-alternativos">Altura: ${obj.altura}</div>
    <div class="datos-alternativos">Peso: ${obj.peso}</div>
    <div class="datos-alternativos">Caramelos: ${obj.caramelos}</div>
    <div class="datos-alternativos">Hora de aparación: ${obj.horaAparicion}</div>
    <div class="datos-alternativos"}>Debilidades:</div>
    <div class="datos-alternativosD">${obj.debilidades}</div>
    <div class="huevo-pokemon"><img src="./imagenes/huevo.png" width="15" height"15">${obj.huevo}</div>
    </div>
    </div>`;
  });
  return stringTemplate;
};

const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
seccionCardsPokemones.innerHTML = templateCard(dataPokemon);

// huevos
document.querySelector('#filtro-distancia').addEventListener('change', () => {
  const seleccionarhuevo = document.querySelector('#filtro-distancia').value;
  seccionCardsPokemones.innerHTML = templateCard(filtroHuevo(dataPokemon, seleccionarhuevo));
});
// debilidades
document.querySelector('#filtro-debilidades').addEventListener('change', () => {
  const seleccionarDebilidad = document.querySelector('#filtro-debilidades').value;
  console.log(seleccionarDebilidad);
  seccionCardsPokemones.innerHTML = templateCard(filtrodebilidad(dataPokemon, seleccionarDebilidad));
  console.log(templateCard(filtrodebilidad(dataPokemon, seleccionarDebilidad)));
});
// Tipo
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  seccionCardsPokemones.innerHTML = templateCard(filtroTipo(dataPokemon, seleccionarTipo));
});

// nombre
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  seccionCardsPokemones.innerHTML = templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});

/* // filtro alfabetico falta separarlo
document.querySelector('#filtro-alfabetico').addEventListener('change', (event) => {
  if (event.target.value === 'A-Z') {
    dataPokemon.sort((em, em2) => (em.nombre < em2.nombre) ? - 1 :1);
    seccionCardsPokemones.innerHTML = templateCard(dataPokemon);
  } if (event.target.value === 'Z-A') {
    dataPokemon.sort((em, em2) => (em.nombre > em2.nombre) ? - 1 :1);
    seccionCardsPokemones.innerHTML = templateCard(dataPokemon);
  }
}); */

// para retornar a la pantalla de inico con todos los pokemones
document.querySelector('#inicio').addEventListener('click', () => {
  const allPokemons = '';
  seccionCardsPokemones.innerHTML = templateCard(dataPokemon);
  return allPokemons;
});

// menu
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
