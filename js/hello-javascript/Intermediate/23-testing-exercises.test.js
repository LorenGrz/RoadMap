/*
Clase 82 - Testing
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=26946
*/

// 1. Crea una función isEven(number) que devuelva true si el número es par y false si es impar

// 2. Escribe una prueba en Jest para verificar que la función funciona correctamente
const isEven = require("./24-testing-test")

test("Verifica que un numero es par", () => {
  expect(isEven(2)).toBe(true)
})
// 3. Verifica que la prueba se ejecuta satisfactoriamente
