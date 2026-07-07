// Classes

let person = {
  name: "Loren",
  age: 23,
  alias: "LorenGrz",
}

class Person {
  constructor(name = "XD", age, alias) {
    this.name = name
    this.age = age
    this.alias = alias
  }

  walk() {
    console.log("La persona camina")
  }
}

class PrivatePerson {
  #bank // Propiedad privada
  #age
  #name
  constructor(name = "XD", age, alias, bank) {
    this.#name = name
    this.#age = age
    this.alias = alias
    this.#bank = bank
  }
  get name() {
    return this.name
  }
  set name(newName) {
    this.#name = newName
  }
  pay() {
    this.bank
  }
}

let personObj = new Person("Lorenzo", 23, "LorenGrz2")

console.log(person)

// Herencia
class PersonaConVuelo extends Person {
  // Si paga distinto
  pay() {
    super.pay()
    console.log("distinto")
  }
  volar() {
    console.log("Estoy volando")
  }
}

let personaVoladora = new PersonaConVuelo()

personaVoladora.volar()

// Metodos estaticos

class MathOperations {
  static sum = (a, b) => a + b
}

let myClass = new MathOperations()
console.log(MathOperations.sum(1, 2))
