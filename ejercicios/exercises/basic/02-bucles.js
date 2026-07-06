// // 1. Crea un bucle que imprima los números del 1 al 20
// for (let i = 0; i < 20; i++) {
//   console.log(i + 1)
// }
// // 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
// let suma = 0
// for (let i = 0; i < 100; i++) {
//   suma += i + 1
// }
// console.log(suma)
// // 3. Crea un bucle que imprima todos los números pares entre 1 y 50
// for (let i = 0; i < 50; i++) {
//   if ((i + 1) % 2 == 0) {
//     console.log(i + 1)
//   }
// }
// // 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
// let nombres = ["Lorenzo", "Lautaro", "Lucero", "Magali"]
// for (let valor of nombres) {
//   console.log(valor)
// }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadenaDeTexto = "Parangaricutirimicuaro"
const vocales = "aeiou"
let contadorDeVocales = 0
for (let vocal of cadenaDeTexto.toLowerCase()) {
  if (vocales.includes(vocal)) {
    contadorDeVocales++
  }
}
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5, 6, 7]
let producto = 1

for (let numero of numeros) {
  producto *= numero
}
console.log(producto)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (i = 4; i < 50; i = i + 5) {
  console.log(i + 1)
}
// 8. Usa un bucle para invertir una cadena de texto
let nombre = "Lorenzo"
let nombreInvertido = ""
for (i = 0; i < nombre.length; i++) {
  nombreInvertido = nombreInvertido + nombre[nombre.length - 1 - i]
}
console.log(nombreInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let anterior = 0
let actual = 1
for (i = 0; i < 10; i++) {
  console.log(anterior)
  const siguiente = anterior + actual
  anterior = actual
  actual = siguiente
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNuevo = [1, 2, 3, 4, 5, 6, 13, 23, 34, 45, 56, 34]
let mayoresA10 = []
for (let numero of arrayNuevo) {
  if (numero > 10) {
    mayoresA10.push(numero)
  }
}
console.log(mayoresA10)
