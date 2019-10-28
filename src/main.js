import POKEMON from './data/pokemon/pokemon.js'
import { mostrarPokemon } from './data.js';

document.querySelector('#insertar-pokemones').innerHTML = mostrarPokemon(POKEMON);