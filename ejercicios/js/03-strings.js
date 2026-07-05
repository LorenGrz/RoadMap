// Strings

//  Concatenacion de cadenas
let myName = "Lorenzo"
let greeting = "Hola, " + myName
console.log(greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[1])

// Metodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Loren"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Loren"))
console.log(greeting.slice(0, 8))
console.log(greeting.replace("Loren", "pepe"))

// Template literals (plantillas literales)

let message = `hola
hola como esta`

let message2 = `Hola ${message}`
