// 1. Crea una clase que reciba dos propiedades
class Propiedades {
  constructor(unaPropiedad, otraPropiedad) {
    this.unaPropiedad = unaPropiedad
    this.otraPropiedad = otraPropiedad
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class Propiedades2 {
  constructor(unaPropiedad = "Default1 ", otraPropiedad = "Default2 ") {
    this.unaPropiedad = unaPropiedad
    this.otraPropiedad = otraPropiedad
  }
  utilizoPropiedades() {
    return this.unaPropiedad + this.otraPropiedad
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let propiedad = new Propiedades2("Hola", " Lorenzo")
console.log(propiedad.unaPropiedad)
console.log(propiedad.otraPropiedad)
console.log(propiedad.utilizoPropiedades())

// 4. Añade un método estático a la primera clase
Propiedades.sumaEstatica = function (numero1, numero2) {
  return numero1 + numero2
}
console.log(Propiedades)
Propiedades.prototype.sumaInstanciada = (num1, num2) => num1 + num2
console.log(Propiedades.sumaEstatica(1, 2))
let propiedadesObjetoxd = new Propiedades()
console.log(propiedadesObjetoxd.sumaInstanciada(2, 4))

// 6. Crea una clase que haga uso de herencia
class PropiedadHeredada extends Propiedades {
  constructor(propiedadNueva) {
    this.propiedadNueva = propiedadNueva
  }
}
// 7. Crea una clase que haga uso de getters y setters
class ClaseConGettersYSetters {
  #propiedadPrivada
  constructor(propiedad1, propiedad2, propiedadPrivada = "Privado") {
    this.propiedad1 = propiedad1
    this.propiedad2 = propiedad2
    this.#propiedadPrivada = propiedadPrivada
  }
  set propiedadPrivada(nuevoValor) {
    this.#propiedadPrivada = nuevoValor
  }
  get propiedadPrivada() {
    return this.#propiedadPrivada
  }
}

// 9. Utiliza los get y set y muestra sus valores
let objetoGet = new ClaseConGettersYSetters()
objetoGet.propiedadPrivada = "Nuevo Valor"
console.log(objetoGet.propiedadPrivada)
// 10. Sobrescribe un método de una clase que utilice herencia
class ClaseHeredada extends Propiedades2 {
  utilizoPropiedades() {
    return super.utilizoPropiedades() + "Modificado"
  }
}
let claseHeredada = new ClaseHeredada()
console.log(claseHeredada.utilizoPropiedades())
