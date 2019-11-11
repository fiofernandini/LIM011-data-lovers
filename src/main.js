import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, ordenAlfNum, AsDes
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
  seccionCardsPokemones.innerHTML = templateCard(filtroDebilidadTipo(dataPokemon, 'debilidad' ,seleccionarDebilidad));
  console.log(templateCard(filtrodebilidad(dataPokemon, seleccionarDebilidad)));
});

// 003: FILTRO POR ORDEN ALFABETICO Y NUMERICO.
document.querySelector('#ordenAlfNum').addEventListener('change', ()=>{
  const seleccionOpcion = document.querySelector('#ordenAlfNum').value;
  console.log(seleccionOpcion);
  seccionCardsPokemones.innerHTML = templateCard(AsDes(dataPokemon, seleccionOpcion));
  console.log(ordenAlfNum(dataPokemon, seleccionOpcion));
});

// Tipo
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  seccionCardsPokemones.innerHTML = templateCard(filtroDebilidadTipo(dataPokemon, 'tipo' , seleccionarTipo));
});

// nombre
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  seccionCardsPokemones.innerHTML = templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});

// 005: TOP 10 DE FRECUENCIA DE APARICIÓN.
const btnTop10 = document.querySelector('#mayor-frecuencia');
btnTop10.addEventListener('click',() => {
    seccionCardsPokemones.innerHTML = templateCard(AsDes(dataPokemon, btnTop10.value));
});

// menu
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});


