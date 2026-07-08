//importacion
import { add } from "./13-modules.js"
import { PI } from "./13-modules.js"
import { name } from "./13-modules.js"
import { Circle } from "./13-modules.js"
import substract from "./13-modules.js"

// Funciones
console.log(add(5, 7))

// Propiedades
console.log(PI)
console.log(name)

// Classes
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
