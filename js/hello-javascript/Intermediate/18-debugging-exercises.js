/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
function escribePalabras(palabra1, palabra2) {
  if (typeof palabra2 === "number") {
    throw new Error("Debe ser un string")
  }
  console.log("Que onda muestro las palabras en orden: ")
  console.log(palabra1 + " ")
  console.log(palabra2)
}

escribePalabras("Hola mina ", 5)
