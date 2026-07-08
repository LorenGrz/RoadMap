// 1. Crea un objeto con 3 propiedades
let person = {
  nombre: "Lorenzo",
  edad: 23,
  apodo: "LorenGrz",
}
// 2. Accede y muestra su valor
console.log(person.nombre)
// 3. Agrega una nueva propiedad
person["correo"] = "lorenzograizzaro55@gmail.com"
// 4. Elimina una de las 3 primeras propiedades
delete person["edad"]
console.log(person)

// 5. Agrega una función e invócala
person["walk"] = function () {
  console.log("Estoy caminando")
}
person.walk()
// 6. Itera las propiedades del objeto
for (let propiedad in person) {
  console.log(person[propiedad])
}
