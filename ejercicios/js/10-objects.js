// Objetos
// Sintaxis

let person = {
  name: "Lorenzo",
  edad: 23,
  correo: "lorenzograizzaro55@gmail.com",
}

// acceso a propiedades

// notacion punto
console.log(person.name)

// notacion corchetes
console.log(person["name"])

person.name = "Lorenzo Graizzaro"
console.log(person.name)

// Eliminacion de propiedades
delete person.edad

console.log(person)

// Metodos
let person2 = {
  name: "Lorenzo",
  edad: 23,
  correo: "lorenzograizzaro55@gmail.com",
  walk: () => console.log("La persona camina"),
}

person2.walk()

// Iteracion

for (let key in person2) {
  console.log(key + ": " + person2[key])
}

// funciones como objects
function Person(name, age) {
  this.name = name
  this.age = age
}

let person3 = new Person("Lorenzo", 23)
console.log(person3)
