// Concatena 2 cadenas de texto
let cadenasConcatenadas = "Hola" + " ¿Como estas?"

// Muestra la longitud de una cadena de texto
let longitudCadena = cadenasConcatenadas.length
console.log(longitudCadena)

// Muestra el primer y el ultimo caracter de un string
console.log(cadenasConcatenadas[0])
console.log(cadenasConcatenadas[cadenasConcatenadas.length - 1])

// Convierte a mayusculas y minusculas un string
cadenasConcatenadas = cadenasConcatenadas.toUpperCase()
console.log(cadenasConcatenadas)
cadenasConcatenadas = cadenasConcatenadas.toLowerCase()
console.log(cadenasConcatenadas)

// Interpola el valor de una variable en un string
let edad = 23
let mensaje = `${cadenasConcatenadas} tengo ${edad} años`
console.log(mensaje)

// Reemplaza todos los espacios en blanco por guiones
mensaje = mensaje.replaceAll(" ", "-")
console.log(mensaje)

// Comprueba que una cadena tiene una palabra concreta
console.log(cadenasConcatenadas.includes("como"))

// Comprueba si dos strings son iguales
console.log(cadenasConcatenadas == mensaje)
let mensaje2 = mensaje
console.log(mensaje == mensaje2)

// Comprueba que 2 strings tienen la misma longitud
console.log(mensaje.length == cadenasConcatenadas.length)
