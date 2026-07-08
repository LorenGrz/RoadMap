// Errors
let myObject
// try-catch
try {
  console.log(myObject)
  console.log("finaliza la ejecucion sin errores")
} catch {
  console.log("Se ha produciodo un error")
}

// Captura del error
try {
  console.log(myObject.email)
} catch (error) {
  console.log(error.message)
} finally {
  console.log("Este codigo siempre se ejecuta")
}

// Throw
function sum(a, b) {
  if (!(typeof a === "number" && typeof b === "number")) {
    console.log("No se pueden sumar estas propiedades")
    throw new Error("Se ha producido un error")
  }
  return a + b
}

try {
  console.log(sum("5", 10))
} catch (error) {
  console.log(error.message)
}
