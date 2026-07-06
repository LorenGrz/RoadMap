// 1. Crea una función que reciba dos números y devuelva su suma
funcionSuma = (a, b) => {
  return a + b
}
console.log(funcionSuma(2, 2))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
devuelvoElMayor = function (array) {
  numeroMayor = 0
  array.forEach((numero) => {
    if (numero > numeroMayor) {
      numeroMayor = numero
    }
  })
  return numeroMayor
}
console.log(devuelvoElMayor([1, 2, 3, 4, 5, 6, 7]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocales = "aeiou"
function cantVocales(unString) {
  let cantidad = 0
  unString.split("").forEach((letra) => {
    if (vocales.includes(letra)) {
      cantidad++
    }
  })
  return cantidad
}
console.log(cantVocales("nilitah te amo"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
devuelvoStringsEnMayusculas = (arrayDeStrings) => {
  for (let i = 0; i < arrayDeStrings.length; i++) {
    arrayDeStrings[i] = arrayDeStrings[i].toUpperCase()
  }
  return arrayDeStrings
}
let xdd = ["hola", " como", " estan"]
console.log(devuelvoStringsEnMayusculas(xdd))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
esPrimo = (numero) => {
  if (numero <= 1) {
    return false
  }
  for (let i = 2; i < numero - 1; i++) {
    if (numero % i === 0) {
      return true
    }
  }
  return false
}
console.log("------------------")
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
valoresComunes = (array1, array2) => {
  let nuevoArray = []
  for (let i = 0; i < array1.length; i++) {
    for (let p = 0; p < array2.length; p++) {
      if (array1[i] === array2[p]) {
        nuevoArray.push(array1[i])
        break
      }
    }
  }
  return nuevoArray
}

valoresComunes2 = (array1, array2) => {
  array1.filter((elemento) => {
    array2.includes(elemento)
  })
}
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
sumaPares = (numeros) => {
  let suma = 0
  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      suma += numero
    }
  })
  return suma
}

console.log(sumaPares([1, 2, 3, 4, 5, 6, 7, 8]))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arrayAlCuadrado(array) {
  return array.map((numero) => (numero = numero ** 2))
}
console.log(arrayAlCuadrado([1, 2, 3, 4, 5]))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reversion(cadena) {
  return cadena.split("").reverse().join("")
}
console.log(reversion("Lorenzo xD"))
// 10. Crea una función que calcule el factorial de un número dado
factorial = (numero) => {
  if (numero === 1 || numero === 0) {
    return 1
  } else {
    return numero * factorial(numero - 1)
  }
}
