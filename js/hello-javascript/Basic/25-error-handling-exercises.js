function suma(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    throw new TypeError("Solo pueden ser números")
  }

  if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
    throw new Error("Solo se pueden sumar números enteros")
  }

  if (numero1 === 0 || numero2 === 0) {
    throw new SumIntegrerError(
      "Se está intentando sumar un cero",
      numero1,
      numero2,
    )
  }

  return numero1 + numero2
}

class SumIntegrerError extends Error {
  constructor(message, a, b) {
    super(message)
    this.name = "SumIntegrerError"
    this.a = a
    this.b = b
  }

  printNumbers() {
    console.log(this.a, "+", this.b)
  }
}

try {
  console.log(suma(8, 0))
} catch (error) {
  if (error instanceof SumIntegrerError) {
    console.log(error.message)
    error.printNumbers()
  } else if (error instanceof TypeError) {
    console.log("Es un error de tipos:", error.message)
  } else if (error instanceof Error) {
    console.log("Error genérico:", error.message)
  }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
function transformoAFloat(array) {
  for (let valor of array) {
    if (typeof valor !== "number") {
      throw new Error("No es un numero")
    }
    parseFloat(valor)
  }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad
// específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function ejecutarConReintentos(funcion) {
  const maximoIntentos = 10

  for (let intento = 1; intento <= maximoIntentos; intento++) {
    try {
      const resultado = funcion()

      console.log(`Funcionó en el intento ${intento}`)
      return resultado
    } catch (error) {
      console.log(`Falló el intento ${intento}: ${error.message}`)

      if (intento === maximoIntentos) {
        throw new Error(
          `La operación falló después de ${maximoIntentos} intentos`,
        )
      }
    }
  }
}
