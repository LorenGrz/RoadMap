myArray = [1, 2, 3, 4, 5]

let person = {
  name: "Loren",
  age: 23,
  alias: "LorenGrz",
}
myArray.push(6)

myValue = myArray[1]
// console.log(myValue)

// Destructuracion
// Sintaxis arrays y valores predeterminados e ignoerar elementos
let [myValue0 = 0, , myValue2] = myArray
// console.log(myValue0)
// console.log(myValue2)

// sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis objects con nombres nuevos
let { name: nombre, age: edad, alias: apodo } = person
console.log(nombre)
console.log(edad)
console.log(apodo)

// Propagacion (...)

let myArray2 = [...myArray] // Copia

let myArray3 = [...myArray, 6, 7]
console.log(myArray2)
console.log(myArray3)

// Combinacion de arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sintaxis objects
let person4 = { ...person, email: "lorenzograizzaro55@gmail.com" }
console.log(person4)

// Copia de objects
let person5 = { ...person }
