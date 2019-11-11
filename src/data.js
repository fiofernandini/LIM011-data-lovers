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
  };
  return obj;
});
// huevos
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// debilidades
export const filtroDebilidadTipo = (array, propiedad, valor) => {
  const newArray = []
  array.forEach((objeto) => {
    objeto[propiedad].forEach((string) => {
      if(string === valor) { 
        newArray.push(objeto);
      }
    });
  });
  return newArray;
};

// nombre
export const buscarPorNombre = (array, nombre) => {
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombre));
  return nuevoArraysss;
};

// 003: FILTRO POR ORDEN ALFABETICO Y NUMERICO.
export const ordenAlfNum = (arr, propiedad) => {
  return arr.sort((a, b) => {
      if(a[propiedad] < b[propiedad]) return -1;
      if(a[propiedad] > b[propiedad]) return 1;
      return 0;
    }); 
};

// 005: TOP 10 DE FRECUENCIA DE APARICIÓN.

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
      return ordenAlfNum(data, 'frecuencia').slice(0,10);
    default:
      break;
  }
}