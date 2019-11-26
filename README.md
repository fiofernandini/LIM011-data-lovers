# Data Lovers: Pokémon

## Índice

* [1. Resumen](#1-resumen)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](#3-investigación-UX)
* [4. Prototipo en papel](#4-prototipo-en-papel)
* [5. Feedback](#5-feedback)
* [6. Prototipo en Figma](#6-prototipo-en-figma)
* [7. Objetivos de aprendizaje](#7-obejtivos-de-aprendizaje)
* [8. Reflexión](#8-reflexión)


***

## 1. Resumen

Este proyecto permite al usuario visualizar a los 151 Pokemones de la región Kanto, organizados en orden numérico. Además, también podrá usar filtros avanzados de búsqueda como de manera ascendente o descendente, por huevos (para conocer los kilometros) y por debilidades. 
Buscamos que con esta información el usuario pueda mejorar su estrategia de juego en Pokémon Go.

## 2. Imagen final del proyecto
### 2.1 . Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/pantallafinal1.jpg)

### 2.2. Mobile
![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/pantallamovil.jpg)
***

## 3. Investigación UX

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y una gran comunidad de jugadores que siempre buscan capturar a pokemones únicos, superar desafíos y culminar misiones.

A fin de poder ayudar a esta gran comunidad de jugadores pensamos en una web que les de información de una manera fácil y rápida sobre sus Pokemones ya que habíamos encontrado  que muchos jugadores consultaban en videos de Youtube y en diversas paginas web sobre como mejorar su juego pero  encontraban una saturación de información que no permitía distinguir a los usuarios lo que realmente necesitaban.

Es por ello que creamos POKEDATA, a fin de poder otorgar información rápida y precisa para que los usuarios tomen mejores decisiones en el juego.

Dentro de la investigación encontramos lo siguiente:

- Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
- Un maestro Pokémon antes de salir a cazar los Pokémon tiene que saber el top 10 de frecuencia de aparición de los Pokémon.
- Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes cuando un maestro Pokémon elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los quetienen menos cantidad de debilidades y saber de que tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 2 características.
- Los Pokémon evolucionan y es importante para un
  maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.
- Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber cuáles tienen caramelos más cercanos para poder enfocarse en conseguirlos.

  ### 3.1. Historias de usuario

  Teniendo en cuenta la información que valoran nuestros usuarios, creamos las siguientes historias de usuario a fin de organizar mejor el desarrollo de nuestra web:

  - Como usuario necesito que se vean todos los Pokémon para visualizarlos en orden numérico.
  - Como usuario necesito ver la información de cada Pokémon a fin de elegir mejor al momento de la batalla.
  - Como usuario necesito filtrar a los Pokémon por su tipo, a fin de realizar búsquedas mas específicas.
  - Como usuario necesito filtrar a los Pokémon por sus debilidades para elegir al pokémon indicado en una batalla.
  - Como usuario necesito filtrar por huevos para saber cuantos kilómetros debo caminar para eclosionar.
  - Como usuario necesito poder buscar a un pokémon escribiendo su nombre a fin de que sea una búsqueda mucho mas rápida.
  
  - Como usuario necesito filtrar por orden alfabetico a fin de realizar una búsqueda ordenada.
  - Como usuario necesito ver la página en distintos dispositivos para mayor comodidad.
  - Como usuario necesito filtrar por evolución para saber la siguiente evolcuión de un pokémon.

  ### 3.2. User persona

  Teniendo en cuenta las historias de usuario, creamos el siguiente User Persona:

  ![](https://github.com/fiofernandini/LIM011-data-lovers/blob/master/src/imagenes/userpokemon.png)

  ***
  
## 4. Prototipo en papel

### 4.1. Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio1.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio2.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio3.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio4.jpeg)

### 4.2. Mobile

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel1.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel2.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel3.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel4.jpeg)
***
## 5. Feedback
Testeamos el prototipo de baja fidelidad con 5 usuarios y se realizaron los siguientes cambios:

* Eliminar los botones de tipo de Pokemon que estaban en la parte superior de la pantalla ya que los usuarios encontraron la primera pantalla muy recargada de información.
* Crear un menú desplegable en donde se ubicaban las opciones de filtrado y tipo de Pokemon, ya que los usuarios estaban acostumbrados a este tipo de menú y hacía que la primera página de la web se vea más ordenada.
*  El usuario identificó el listado de Pokemones y su información detallada, tuvo alguna dificultad con el buscador y el idioma ya que en su mayoría el contenido estaba en ingles y las opciones de filtrado en español, sin embargo, al descubrir el bloque de opciones de filtrado y ordenado de cada Pokémon pudo identificar y clasificar a cada Pokemon.
***
## 6. Prototipo en Figma

### 6.1. Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/figmaescritorio.png)

\* Puedes ver el prototipo desktop completo en este [link](https://www.figma.com/proto/AD7dxL6NzPTDVg1AFfpQKC/POKE?node-id=2%3A2&scaling=min-zoom)

### 6.2. Mobile

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/figmacelular.png)

\* Puedes ver el prototipo mobile completo en este [link](https://www.figma.com/proto/8QId6tCu6gQDM7UdPdSz0E/POKE-CELULAR?node-id=1%3A2&scaling=min-zoom)

***
## 7. Objetivos de aprendizaje

### UX
- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener _feedback_ e iterar.
- [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [X] Planear y ejecutar _tests_ de usabilidad.
### HTML y CSS
- [X] Entender y reconocer por qué es importante el HTML semántico.
- [X] Identificar y entender tipos de selectores en CSS.
- [X] Entender como funciona `flexbox` en CSS.
- [X] Construir tu aplicación respetando el diseño planeado (maquetación).
### DOM
- [X] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [X] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)
### Javascript
- [X] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [X] Entender el uso de condicionales (`if-else` | `switch`).
- [X] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [X] Utilizar ES Modules (`import` | `export`).
### Pruebas Unitarias (_testing_)
- [X] Testear funciones (funciones puras).
### Git y GitHub
- [X] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [X] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [X] Colaborar en Github (pull requests).
### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [X] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [X] Utilizar linter para seguir buenas prácticas (ESLINT).

***
## 8. Reflexión

### 1. Sé lo que es, para qué sirve, su contexto y cómo se espera que funcione.

Tengo claro algunos de los objetivos de aprendizaje, pero siento que me falta complementar otros, 
de alguna forma sé para que sirven y que hacen, pero todavía me enredo en como exactamente estan funcionando.

### 2. Lo hice en este proyecto y lo puedo explicar.
### En la parte UX:
* Prototipado baja fidelidad.
* Prototipado de alta fidelidad.
* Test de usabilidad.
* Historias de usuario.
* Iteraciones.

### En la parte de codigo:
* Maquetación con el html.
* Css.
* Función de filtrado por huevitos.
* Función de filtrado por tipos.
* Función de filtrado por debilidades.
* Función de busqueda por nombre.
(la función de tipo y debilidades fue fusionada con ayuda de una Coach para funcionarla a solo una función,
 yo logro entenderlas por separado)

### 3. Lo puedo volver a hacer en otro contexto/proyecto diferente. Qué propones para trabajar la siguiente semana.

* Realizar mi proyecto pensando en mis usuarios.
* Realizar mis prototipos de alta fidelidad con todas las historias de usuario.
* Maquetar con html acorde a mi Figma.
* Dar diseño con css.
* Trabajar con import y export.
* Realizar algunas funciones de filtrado.

Hay ciertas iteraciones que todavía quiero realizar para hacer mi pagina todavía mas amigable para los usuarios, tanto en interacción como lo visual. Mi propuesta es trabajar de forma independiente, para poder concretar estas iteraciones, a parte de eso, todavía me falta concretar objetivos de aprendizaje, que deseo manejar a mi propio ritmo.
