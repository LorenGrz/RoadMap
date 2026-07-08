// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let array = [1, 2, 3, 4, 5, 6]
let array2 = [7, 8, 9, 10]
let [el1, , el3] = array
console.log(el1)
console.log(el3)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [el2, , , , , , , el7 = 0] = array
console.log(el7)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
  name: "Loren",
  age: 23,
  alias: "LorenGrz",
}
let { name: nombre, alias: apodo } = person
console.log(nombre)
console.log(apodo)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array4 = [...array, ...array2]
console.log(array4)
// 7. Usa propagación para crear una copia de un array
let array3 = [...array]
// 8. Usa propagación para combinar dos objetos en uno nuevo
let persona2 = {
  name1: "Loren",
  age1: 23,
  alias1: "LorenGrz",
}
let personaCombinada = { ...person, ...persona2 }
console.log(personaCombinada)
// 9. Usa propagación para crear una copia de un objeto
let copiaPerson = { ...person }
// 10. Combina desestructuración y propagación
let { age, name, alias: apodo2, alias1: apodo3 } = { ...person, ...persona2 }
console.log(apodo2)
console.log(apodo3)
