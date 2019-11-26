import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, buscarPorNombre, AsDes, evolutions, filtroDebilidad, filtroTipo,
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
  <p class="nombre-pokemon">${obj.nombre}  </p>
  <p class="numero-pokemon">${obj.numero} </p>  
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
              <img class="imagen-pokemon-modal" src="${obj.imagen}">
            </figure>
            <h4>${obj.nombre}</h4>
            <h6># ${obj.numero}</h6>
          </section>
          <section class="modal-main"> 
            <p><strong>Tipo:</strong> ${obj.tipo}</p>
            <p><strong>Altura:</strong> ${obj.altura}</p>
            <p> <strong>Peso:</strong> ${obj.peso}</p>
            <p><strong>Tipo de huevo:</strong><img class="imagen-huevito" src="./imagenes/huevo.png"> ${obj.huevo}</p>
            <p><strong>Caramelos:</strong><img class="imagen-caramelo" src="./imagenes/candy.png"> ${obj.caramelos}</p>
            <p><strong>Debilidades:</strong></p>
            <p>${obj.debilidades}<p>
            <p><strong>Hora de aparición:</strong> ${obj.horaAparicion}</p>
          </section>
          <div class="modal-footer">
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Previo', obj.identificador))}</div>
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Siguiente', obj.identificador))}</div>
          </div>
        </div>
      </div>
    </div>
    `;
    document.body.appendChild(divElementModal);
    divElementModal.classList.add('modal-open');
    const cerrar = document.getElementById('cerrar');
    // CERRAR MODAL
    cerrar.addEventListener('click', () => {
      document.body.removeChild(divElementModal);
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
  templateCard(filtroDebilidad(dataPokemon, seleccionarDebilidad));
});
// // FILTRO POR TIPO
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  templateCard(filtroTipo(dataPokemon, seleccionarTipo));
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
// FILTRO BUSCADOR NOMBRE
document.querySelector('#busca-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});
// MENU TOGLEE
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
