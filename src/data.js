/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// FUNCION MINIDATA.
export const traerDataMap2 = (arr) => arr.map((ele) => {
  const obj = {
    identificador: ele.id,
    nombre: ele.name,
    imagen: ele.img,
    numero: ele.num,
    tipo: ele.type,
    altura: ele.height,
    peso: ele.weight,
    caramelos: ele.candy_count,
    horaAparicion: ele.spawn_time,
    debilidades: ele.weaknesses,
    huevo: ele.egg,
    frecuencia: ele.avg_spawns,
    Previo: ele.prev_evolution,
    Siguiente: ele.next_evolution,
  };
  return obj;
});
// FUNCION HUEVITOS.
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// FUNCION DEBILIDADES.
export const filtroDebilidad = (array, debilidad) => {
  const nuevoArray = array.filter((objeto) => objeto.debilidades[0] === debilidad
  || objeto.debilidades[1] === debilidad || objeto.debilidades[2] === debilidad
  || objeto.debilidades[3] === debilidad || objeto.debilidades[4] === debilidad
  || objeto.debilidades[5] === debilidad || objeto.debilidades[6] === debilidad);
  return nuevoArray;
};
// FUNCION TIPO.
export const filtroTipo = (array, tipos) => {
  const nuevoArray = array.filter((objeto) => objeto.tipo[0] === tipos
  || objeto.tipo[1] === tipos);
  return nuevoArray;
};
// FUNCION PARA BUSCAR NOMBRES.
export const buscarPorNombre = (array, nombre) => {
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombre));
  return nuevoArraysss;
};
// FUNCION PARA ORDENAR POR NOMBRE, NUMERO Y TOP 10
export const ordenAlfNum = (arr, propiedad) => {
  return arr.sort((a, b) => (a[propiedad] < b[propiedad] ? -1 : 1));
};

// SELECCIONANDO STRING.(PARTE DE LA FUNCIÓ ORDENAR).
export const AsDes = (data, string) => {
  switch (string) {
    case 'A-Z':
      return ordenAlfNum(data, 'nombre');
    case 'Z-A':
      return ordenAlfNum(data, 'nombre').reverse();
    case 'ASC':
      return ordenAlfNum(data, 'numero');
    case 'DESC':
      return ordenAlfNum(data, 'numero').reverse();
    case 'MAYORF':
      return ordenAlfNum(data, 'frecuencia').slice(0, 10);
      // no default
  }
};
// FUNCION PARA EVOLUCIONES.
export const evolutions = (arr, propiedad, num) => {
  let newArray = [];
  arr.forEach((objeto) => {
    if (objeto.identificador === num) {
      if (objeto[propiedad] === undefined) {
        newArray = [];
      } else {
        objeto[propiedad].forEach((obj) => {
          obj.label = propiedad;
          newArray.push(obj);
        });
      }
    }
  });
  return newArray;
};
