// Console

// log
console.log("Hola")

// error
console.error("Este es un mensaje de error")
console.error(
  "Error al conectarse a la base de datos",
  new Error("Conexion fallida"),
)

// warn
console.warn("Este es un mensaje de advertencia")

// info
console.info("Este es un mensaje de informacion adicional")

// table
let data = [["Lorenzo", 23]]
console.table(data)

data = [
  { name: "Lorenzo", age: 23 },
  { name: "Lucero", age: 28 },
]
console.table(data)

// group
console.group("Usuario: ")
console.log("Nombre: Lorenzo")
console.log("Edad: 23")
console.groupEnd()

// time and timeEnd
console.time("Tiempo de ejecucion")

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecucion")

// assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace
function funcA() {
  funcB()
}
function funcB() {
  console.trace("Seguimiento de la ejecucion")
}
funcA()
// clear

// console.clear()
