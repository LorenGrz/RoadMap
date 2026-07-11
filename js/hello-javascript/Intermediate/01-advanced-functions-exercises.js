/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/
sum = (...array) => {
  let suma = 0
  for (let a of array) {
    suma += a
  }
  return suma
}
mult = (...array) => {
  let suma = 1
  for (let a of array) {
    suma *= a
  }
  return suma
}
// 1. Crea una función que retorne a otra función
function retornoFuncion(lista) {
  return sum(lista)
}

console.log(retornoFuncion(1, 2, 3, 4))
// 2. Implementa una función currificada que multiplique 3 números
function currificada(a) {
  return function (b) {
    return function (c) {
      return mult(a, b, c)
    }
  }
}
const sumAB = currificada(2)(2)
const sumC = sumAB
console.log(sumC(4))
console.log(sumAB(5))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potenciaDe(numero, exponente) {
  if (exponente === 0) {
    return 1
  }
  return potenciaDe(numero, exponente - 1) * numero
}

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
createCounter = () => {
  let contador = 0
  return function () {
    contador++
    console.log(`Contador: ${contador}`)
  }
}

const contador = createCounter()
contador()
contador()
const contador2 = createCounter()
contador2()
console.log()
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  let result = 0
  for (let number of numbers) {
    result += number
  }
  return result * multiplier
}

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
sumaTodosLosNumeros = (numeros, callback) => {
  let result = 0
  for (let numero of numeros) {
    result += numero
  }
  callback(result)
}

sumaTodosLosNumeros([1, 2, 3, 4, 5], (resultado) =>
  console.log(`El resultado es: ${resultado}`),
)
// 7. Desarrolla una función parcial
function sumaParcial(a) {
  return function sumaTotal(b, c) {
    return sum(a, b, c)
  }
}
const suma = sumaParcial(10)
console.log(suma(5, 15))

// 8. Implementa un ejemplo que haga uso de Spread
const numeros = [1, 2, 3, 4]
sumaConSpread = (a, b, c, d) => {
  return a + b + c + d
}
console.log(sumaConSpread(...numeros))
// 9. Implementa un retorno implícito
retornoImplicito = (a, b) => a + b
console.log(retornoImplicito(10, 15))
