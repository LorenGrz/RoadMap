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
console.log(myValue0)
console.log(myValue2)

// sintaxis objects

let { nombre, edad, apodo } = person
