import {
  filtroHuevo, filtroTipo, filtroDebilidad, buscarPorNombre, AsDes, traerDataMap2, evolutions,
} from '../src/data';

describe('traerDataMap2', () => {
  it('deberia ser una funcion', () => {
    expect(typeof traerDataMap2).toBe('function');
  });
  it('Deberia crear una copia del array', () => {
    const dataPrincipal = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }];
    const dataNueva = [{ nombre: 'Bulbasaur' }, { nombre: 'Ivysaur' }];
    expect(traerDataMap2(dataPrincipal)).toEqual(dataNueva);
  });
});

describe('filtroHuevo', () => {
  it('debería ser una función', () => {
    expect(typeof filtroHuevo).toBe('function');
  });

  it('deberia filtrar por la distancia seleccionada 2km', () => {
    const dataHuevo = [{ nombre: 'Bulbasaur', huevo: '2 km' }, { nombre: 'Charmeleon', huevo: 'Not in Eggs' }, { nombre: 'Charmander', huevo: '2 km' }];
    const dataEsperada = [{ nombre: 'Bulbasaur', huevo: '2 km' }, { nombre: 'Charmander', huevo: '2 km' }];
    expect(filtroHuevo(dataHuevo, '2 km')).toEqual(dataEsperada);
  });
});

describe('filtroTipo', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtroTipo).toBe('function');
  });

  it('deberia filtrar por tipo fuego', () => {
    const dataTipo = [{ nombre: 'Bulbasaur', tipo: ['Grass', 'Poison'] }, { nombre: 'Charmeleon', tipo: ['Fire'] }, { nombre: 'Vulpix', tipo: ['Fire'] }];
    const tipoEsperado = [{ nombre: 'Charmeleon', tipo: ['Fire'] }, { nombre: 'Vulpix', tipo: ['Fire'] }];
    expect(filtroTipo(dataTipo, 'Fire')).toEqual(tipoEsperado);
  });
});

describe('filtoDebilidad', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtroDebilidad).toBe('function');
  });

  it('deberia filtrar por debilidad agua', () => {
    const dataDebilidad = [{ nombre: 'Bulbasaur', debilidades: ['Fire', 'Ice'] }, { nombre: 'Charmeleon', debilidades: ['Water', 'Ground'] }];
    const debilidadEsperada = [{ nombre: 'Charmeleon', debilidades: ['Water', 'Ground'] }];
    expect(filtroDebilidad(dataDebilidad, 'Water')).toEqual(debilidadEsperada);
  });
});

describe('buscarPorNombre', () => {
  it('deberia ser una funcion', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });
  it('deberia filtrar por  pokemon que empieza con b', () => {
    const DataNombre = [{ nombre: 'Bulbasaur' }, { nombre: 'Charmeleon' }];
    const nombreEsperado = [{ nombre: 'Bulbasaur' }];
    expect(buscarPorNombre(DataNombre, 'b')).toEqual(nombreEsperado);
  });
});

describe('AsDes', () => {
  it('deberia ser una funcion', () => {
    expect(typeof AsDes).toBe('function');
  });
  it('deberia ordenar', () => {
    const dataOrdenar = [{ nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }];
    const ordenAz = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }];
    const ordenZa = [{ nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }];
    const ascendente = [{ nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }];
    const descendente = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }];
    const frecuencia = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }];
    expect(AsDes(dataOrdenar, 'A-Z')).toEqual(ordenAz);
    expect(AsDes(dataOrdenar, 'Z-A')).toEqual(ordenZa);
    expect(AsDes(dataOrdenar, 'ASC')).toEqual(ascendente);
    expect(AsDes(dataOrdenar, 'DESC')).toEqual(descendente);
    expect(AsDes(dataOrdenar, 'MAYORF')).toEqual(frecuencia);
  });
});

describe('Filtro por Evoluciones', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof evolutions).toBe('function');
  });
  const dataIngreso = [{ identificador: 1, nombre: 'Bulbasaur', Siguiente: [{ num: '002', name: 'Ivysaur' }, { num: '003', name: 'Venusaur' }] }];
  it('Deberia filtrar => EVOLUCIONES', () => {
    const dataSalida = [{ num: '002', name: 'Ivysaur', label: 'Siguiente' }, { num: '003', name: 'Venusaur', label: 'Siguiente' }];
    expect(evolutions(dataIngreso, 'Siguiente', 1)).toEqual(dataSalida);
  });
  it('Deberia filtrar => EVOLUCIONES VACIAS', () => {
    const dataSalida = [];
    expect(evolutions(dataIngreso, 'Previo', 1)).toEqual(dataSalida);
  });
  it('Deberia filtrar => EVOLUCIONES IDENTIFICADOR', () => {
    const dataSalida = [];
    expect(evolutions(dataIngreso, 'Siguiente', '1')).toEqual(dataSalida);
  });
});
