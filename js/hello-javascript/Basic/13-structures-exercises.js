// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Loro", "Pinguino"]
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
animales.push("nilah")
animales.unshift("lion")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(["libro1", "Libro2", "Libro3"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add("libro4")
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("Libro3")
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [0, "Enero"],
  [1, "Febrero"],
  [2, "Marzo"],
  [3, "Abril"],
  [4, "Mayo"],
  [5, "Junio"],
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
  console.log(meses.get(5))
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set(6, ["octubre", "Noviembre", "Diciembre"])
console.log(meses)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let nuevoArray = ["Lorenzo", "Lucero"]
console.log(nuevoArray)
nuevoSet = new Set(nuevoArray)
console.log(nuevoSet)
meses.set(7, nuevoSet)
console.log(meses)
