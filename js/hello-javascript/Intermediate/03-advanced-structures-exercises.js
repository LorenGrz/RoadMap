/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let numeros = [4, 3, 2, 6, 5, 4]
const numerosImpares = numeros.filter((numero) => numero % 2 !== 0)
console.log(numerosImpares)

const numerosMapeados = numeros.map((numero) => numero / 2)
console.log(numerosMapeados)

const numerosReducidos = numeros.reduce(
  (resultado, actual) => actual * resultado,
  1,
)
console.log(numerosReducidos)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numerosModificados = numeros
  .map((numero) => numero ** 2)
  .filter((numero) => numero % 2 == 0)
console.log(numerosModificados)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let arrayComplicado = [1, [2, [3, [4, [5]]]]]
console.log(arrayComplicado.flat(3))

let arrayDePalabras = ["Que pasa chabales", "estos son 2 strings"]
console.log(arrayDePalabras.flatMap((str) => str.split(" ")))

// 4. Ordena un array de números de mayor a menor
console.log(numeros.sort((a, b) => b - a))

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const mySet = new Set([2, 3, 4, 5, 6, 4, 6, 7, 8])
const mySet2 = new Set([7, 8, 9, 10, 23])
const unionDeSets = new Set([...mySet, ...mySet2])
console.log(unionDeSets)
const interseccionDeSets = new Set([...mySet].filter((e) => mySet2.has(e)))
console.log(interseccionDeSets)
const diferenciaDeSets = new Set([...mySet].filter((e) => !mySet2.has(e)))
console.log(interseccionDeSets)
const setsSinLasIntersecciones = new Set([
  ...[...mySet].filter((e) => !mySet2.has(e)),
  ...[...mySet2].filter((e) => !mySet.has(e)),
])
console.log(setsSinLasIntersecciones)
// 6. Itera los resultados del ejercicio anterior
Array.from(unionDeSets).forEach((n) => console.log(`El numero unido es: ${n}`))
Array.from(interseccionDeSets).forEach((n) =>
  console.log(`El numero intersectado es: ${n}`),
)
Array.from(diferenciaDeSets).forEach((n) =>
  console.log(`El numero que no esta en el primer set es: ${n}`),
)
Array.from(setsSinLasIntersecciones).forEach((n) =>
  console.log(`El numero que no esta en los 2 a la vez es: ${n}`),
)

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const data = new Map([
  ["Lucero", [28, "lucerorocha@gmail.com"]],
  ["Lorenzo", [23, "lorenzograizzaro55@gmail.com"]],
  ["Ania", [10, "anyaforger@gmail.com"]],
])
data.forEach((value, key) => console.log(`${key}: ${value}`))
// 8. Dado el mapa anterior, crea un array con los nombres
const arrayDeNombre = new Array(...data.keys())
console.log(arrayDeNombre)
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsMayores = new Set(
  [...data.values()]
    .filter(([edad, email]) => edad >= 18)
    .map(([edad, email]) => email),
)
console.log(emailsMayores)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
let objeto = Object.fromEntries(data)
console.log(objeto)
let mapa = new Map(
  Object.entries(objeto).map(([nombre, [edad, mail]]) => [
    mail,
    [nombre, edad],
  ]),
)
console.log(mapa)
