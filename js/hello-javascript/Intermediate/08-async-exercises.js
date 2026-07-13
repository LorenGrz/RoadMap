/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback.
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre)
  }, 2000)
}

saludar("Lucero", (nombre) => console.log(`Hola ${nombre}`))
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
task1 = (callback) => {
  setTimeout(() => {
    console.log("Task1")
    callback()
  }, 1000)
}
task2 = (callback) => {
  setTimeout(() => {
    console.log("Task2")
    callback()
  }, 1000)
}
task3 = (callback) => {
  setTimeout(() => {
    console.log("Task3")
    callback()
  }, 1000)
}
task1(() => {
  task2(() => {
    task3(() => {})
  })
})
// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
const verificador = function (numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero % 2 === 0) {
        console.log("Numero Par")
        resolve()
      } else {
        console.log("Numero Impar")
        reject(new Error("La promise fue rechazada"))
      }
    }, 5000)
  })
}
verificador(3)
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error.message)
  })

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera tarea completada")
      resolve()
    }, 1000)
  })
}
function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda tarea completada")
      resolve()
    }, 2000)
  })
}
function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercer tarea completada")
      resolve()
    }, 1500)
  })
}
firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(() => {
    console.log("Se terminaron las tareas")
  })
  .then(executeTasks)
// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {
  await firstTask()
  console.log("Se ejecuto la primera")
  await secondTask()
  console.log("Se ejecuto la segunda")
  await thirdTask()
  console.log("Se ejecuto la tercera")
}

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) {
        resolve({ id: id, nombre: "Usuario " + id })
      } else {
        console.log("Usuario No encontrado")
        reject(new Error("No se encontro el usuario correspondiente"))
      }
    }, 2000)
  })
}
async function ejecutarTareasUsuario() {
  try {
    const usuario = await getUser(6)
    console.log(usuario)
  } catch (error) {
    console.error(error.message)
  }
}
ejecutarTareasUsuario()

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function funcion1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera funcion")
      resolve()
    }, 1900)
  })
}
function funcion2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda funcion")
      resolve()
    }, 2000)
  })
}
function funcion3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera funcion")
      resolve()
    }, 1800)
  })
}
setTimeout(() => {
  Promise.all([funcion1(), funcion2(), funcion3()]).then(() =>
    console.log("Todas las promesas resueltas"),
  )
}, 8000)

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds)
  })
}
exec = async () => {
  await waitSeconds(3000)
  console.log("Tiempo finalizado")
}
exec()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let saldo = 500
function checkBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Saldo disponible: ${saldo}`)
      resolve()
    }, 1000)
  })
}

function withdrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= saldo) {
        console.log("Se retira el dinero")
        saldo -= amount
        resolve()
      } else {
        reject(new Error("No se hay suficientes fondos en la cuenta"))
      }
    }, 2000)
  })
}

async function bankFunction() {
  await checkBalance()
  console.log("Chequeamos balance")
  try {
    await withdrawMoney(300)
    console.log("Se retiro el dinero")
  } catch (error) {
    console.error(error.message)
  }
  await checkBalance()
  console.log("Volvimos a checkear para ver si falla correctamente")
  try {
    await withdrawMoney(300)
    console.log("Se retiro el dinero")
  } catch (error) {
    console.error(error.message)
  }
}
setTimeout(() => {
  bankFunction()
}, 11000)
