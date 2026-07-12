/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
const objetoEjercicios = {
  nombre: "Lorenzo",
  edad: 23,
  email: "lorenzograizzaro55@gmail.com",
}

objetoEjercicios.caminar = () => console.log("Estoy caminando")
objetoEjercicios.caminar()
// 2. Crea un objeto que herede de otro
const otroObjeto = { apellido: "Graizzaro" }
const objetoHeredado = Object.assign(otroObjeto, objetoEjercicios)
console.log(`mi apellido es ${objetoHeredado.apellido}`)
objetoHeredado.caminar()

// 3. Define un método de instancia en un objeto
function MetodoDeInstancia(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}
MetodoDeInstancia.prototype.saludar = () => console.log("Hola")
let objetoInstanciado = new MetodoDeInstancia("lorenzo", 23)
objetoInstanciado.saludar()

// 4. Haz uso de get y set en un objeto
class ObjetoConGetYSet {
  #edad
  #nombre
  constructor(edad = 23, nombre = "Lorenzo") {
    this.#edad = edad
    this.#nombre = nombre
  }
  get nombre() {
    return this.#nombre
  }
  set edad(edad) {
    this.#edad = edad
  }
  get edad() {
    return this.#edad
  }
}
const objetoInstanciado2 = new ObjetoConGetYSet()
console.log(objetoInstanciado2.nombre)
console.log(objetoInstanciado2.edad)
objetoInstanciado2.edad = 25
console.log(objetoInstanciado2.edad)

// 5. Utiliza la operación assign en un objeto
const nuevoObjeto = {
  perro: "Chimuela",
}
const objetoCombinado = Object.assign(nuevoObjeto, objetoInstanciado2)
objetoCombinado.nombre = "Nuevo nombre"
console.log(objetoCombinado.nombre)
ObjetoConGetYSet.prototype.saltar = () => console.log("Estoy saltando")
ObjetoConGetYSet.prototype.nacionalidad = "Argentina"
console.log(ObjetoConGetYSet)
const objetoInstanciado3 = new ObjetoConGetYSet()
objetoInstanciado3.saltar()
console.log(objetoInstanciado3.nacionalidad)
// 6. Crea una clase abstracta
class ClaseAbstractajs {
  constructor(nombre, edad) {
    if (new.target === ClaseAbstractajs) {
      throw new Error("No se puede instanciar una clase abstracta")
    }
    this.nombre = nombre
    this.edad = edad
  }
  metodoAbstracto() {
    throw new Error(
      "Se debe de sobreescribir el metodo de la clase abstracta en las clases heredadas",
    )
  }
}

// 7. Utiliza polimorfismo en dos clases diferentes
class ClaseHeredada1 extends ClaseAbstractajs {
  metodoAbstracto() {
    console.log("Metodo Sobreescrito")
  }
}
class ClaseHeredada2 extends ClaseAbstractajs {
  metodoAbstracto() {}
}

// 8. Implementa un Mixin
const MixinNuevo = {
  serRePiola() {
    console.log("SoyRePiola")
  },
}

Object.assign(ClaseHeredada1.prototype, MixinNuevo)
const objetoInstanciadoConMixin = new ClaseHeredada1()
objetoInstanciadoConMixin.serRePiola()
// 9. Crea un Singleton
class Singleton {
  constructor(nombre) {
    if (Singleton.instance) {
      return Singleton.instance
    }
    this.nombre = nombre
    Singleton.instance = this
  }
}
// de esta manera solo se puede instanciar una vez el nombre, mantiene la Sesion, en caso de modificarlo hay que utilizar un metodo que lo modifique, cosa de instanciarlo luego de otra manera

// 10. Desarrolla un Proxy
const proxy = {
  get(target, property) {
    console.log(`Estoy por mostrar la propiedad ${property}`)
    return target[property]
  },
  set(target, property, value) {
    if (property === "edad" && value < 18) {
      throw new Error("Debe ser mayor de edad para ingresar la edad")
    }
    console.log(`Estoy seteando la propiedad ${property}`)
    target[property] = value
  },
}

const objetoProtegidoPorProxy = new Proxy(
  new ClaseHeredada1("Lorenzo", 23),
  proxy,
)
console.log(objetoProtegidoPorProxy.nombre)
