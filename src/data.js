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
  };
  return obj;
});
// huevos
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// debilidades
export const filtrodebilidad = (array, debilidades) => {
  const nuevoArrays = array.filter((objeto) => objeto.debilidades[0] === debilidades
  || objeto.debilidades[1] === debilidades || objeto.debilidades[2] === debilidades
  || objeto.debilidades[3] === debilidades || objeto.debilidades[4] === debilidades
  || objeto.debilidades[5] === debilidades || objeto.debilidades[6] === debilidades);
  console.log(nuevoArrays);
  return nuevoArrays;
};
// tipo
export const filtroTipo = (array, tipo) => {
  const nuevoArrayss = array.filter((objeto) => objeto.tipo[0] === tipo || objeto.tipo[1] === tipo);
  return nuevoArrayss;
};
// nombre
export const buscarPorNombre = (array, nombre) => {
  console.log(nombre);
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombre));
  return nuevoArraysss;
};
