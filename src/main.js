import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes, evolutions,
} from './data.js';

// MINIDATA.
const dataPokemon = traerDataMap2(POKEMON);

// CREACION TEMPLATE DE EVOLUCIONES.
const stringEvolution = (arr) => {
  let newString = '';
  arr.forEach((obj) => {
    newString += `
    <div class = "columna-evo">
      <h5>${obj.label}</h5>
      <figure>
       <img class="imagen-evolucion" src="http://www.serebii.net/pokemongo/pokemon/${obj.num}.png">
      </figure>
      <h5>${obj.name}</h5>
    </div>
  `;
  });
  return newString;
};
// CREACIÓN ELEMENTO DIV CON STRING TEMPLATE.
const card = (obj) => {
  const divElement = document.createElement('div');
  divElement.classList.add('tarjeta-pokemon');
  divElement.innerHTML = `<img src="${obj.imagen}" class="imagen-pokemon">
  <p class="nombre-pokemon"  >${obj.nombre}  </p>
  <p class="numero-pokemon" >${obj.numero} </p>  
  </div>`;

  divElement.addEventListener('click', () => {
    const divElementModal = document.createElement('div');
    divElementModal.classList.add('modal');
    divElementModal.innerHTML = `
    <div class="flex">
      <div class="contenido-modal">
        <span class="cerrar" id="cerrar">&times;</span>
        <div class="modal-body">
          <section class="modal-header">
              <figure>
                <img src="${obj.imagen}">
              </figure>
                <p>${obj.nombre}</p>
                <p>${obj.numero}</p>
          </section>
          <section class="modal-main">
            <section class = "columna">
                <p class="datos-alternativos">Tipo</p>
                <p><span class="datos-alternativos1">${obj.tipo}</span></p>
                <p class ="datos-alternativos">Altura</p>
                <p><span class="datos-alternativos1">${obj.altura}</span></p>
                <p class = "datos-alternativos">Peso</p>
                <p><span class = "datos-alternativos1">${obj.peso}</span></p>
                <p class = "datos-alternativos">Debilidades</p>
                <p><span class = "datos-alternativos1">${obj.debilidades}</span></p>           
            </section>
            <section class = "columna">
                <p class = "datos-alternativos">H.Aparación</p>
                <p><span class = "datos-alternativos1">${obj.horaAparicion}</span></p>
                <p class = "datos-alternativos">Caramelos</p>
                <p><span class = "datos-alternativos1">${obj.caramelos}</span></p> 
                <p class = "datos-alternativos">Incubadora</p>
                <p><span class = "datos-alternativos1">${obj.huevo}</span><p/> 
            </section>
          </section>
          <section class="modal-footer"> 
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Previo', obj.identificador))}</div>
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Siguiente', obj.identificador))}</div>
          </section>
        </div>
      </div>
    </div>`;
    document.querySelector('#insertar-pokemones').appendChild(divElementModal);
    divElementModal.classList.add('modal-open');
    // CERRAR MODAL
    const cerrar = document.getElementById('cerrar');
    cerrar.addEventListener('click', () => {
      document.querySelector('#insertar-pokemones').removeChild(divElementModal);
    });
  });
  return divElement;
};
// PINTAR POKEMONES
const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
const templateCard = (arr) => {
  seccionCardsPokemones.innerHTML = '';
  arr.forEach((obj) => {
    seccionCardsPokemones.appendChild(card(obj));
  });
};
templateCard(dataPokemon);

// FILTRO POR HUEVO.
document.querySelector('#filtro-distancia').addEventListener('change', () => {
  const seleccionarhuevo = document.querySelector('#filtro-distancia').value;
  templateCard(filtroHuevo(dataPokemon, seleccionarhuevo));
});

// FILTRO POR DEBILIDADES.
document.querySelector('#filtro-debilidades').addEventListener('change', () => {
  const seleccionarDebilidad = document.querySelector('#filtro-debilidades').value;
  templateCard(filtroDebilidadTipo(dataPokemon, 'debilidades', seleccionarDebilidad));
});

// FILTRO POR TIPO
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  templateCard(filtroDebilidadTipo(dataPokemon, 'tipo', seleccionarTipo));
});

// FILTRO POR ORDEN ALFABETICO Y NUMERICO.
document.querySelector('#ordenAlfNum').addEventListener('change', () => {
  const seleccionOpcion = document.querySelector('#ordenAlfNum').value;
  templateCard(AsDes(dataPokemon, seleccionOpcion));
});

// TOP 10 DE FRECUENCIA DE APARICIÓN.
const btnTop10 = document.querySelector('#mayor-frecuencia');
btnTop10.addEventListener('click', () => {
  templateCard(AsDes(dataPokemon, btnTop10.value));
});
// FILTRO BUSCADOR
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});
// MENU TOGLEE
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
