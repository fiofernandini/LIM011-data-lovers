export const mostrarPokemon = (datos) => {
  let contenedorPokemon = '';
  datos.map((elementos)=>{
    contenedorPokemon += `
    <div class="tarjeta-pokemon">
      <img src="${elementos.img}" class="imagen-pokemon">
      <p class="nombre-pokemon">${elementos.name}</p>
      <p class="numero-pokemon">${elementos.num}</p>
    </div>`;
  });
  return contenedorPokemon;
}