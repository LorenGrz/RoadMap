// Exportacion de modulos

export function add(a, b) {
  return a + b
}

// Propiedades

export const PI = 3.141531
export let name = "Lorenzo"

// Exportacion por defecto
export default function substract(a, b) {
  return a - b
}

//
export class Circle {
  constructor(radius) {
    this.radius = radius
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}
