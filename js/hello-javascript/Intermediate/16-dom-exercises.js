/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const titulo = document.createElement("h1")
titulo.id = "title"
titulo.textContent = "Hola mundo"
document.body.appendChild(titulo)
// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const imagen = document.createElement("img")
imagen.id = "myImage"
imagen.src = "../Images/header.jpg"
imagen.alt = "Imagen de encabezado"
document.body.appendChild(imagen)
// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.createElement("div")
box.id = "box"
document.body.append(box)
box.class = "resaltado"
// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const parrafo = document.createElement("p")
parrafo.id = "parrafo"
parrafo.textContent = "HOLA COMO ESTAS ESTE TEXTO ES DE COLOR NEGRO"
document.body.append(parrafo)
parrafo.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
function agregarElemento() {
  const nuevoElemento = document.createElement("li")
  nuevoElemento.textContent = "ElementoNuevo"
  document.body.appendChild(nuevoElemento)
}
const button = document.createElement("button")
button.id = "boton"
button.textContent = "Agregar Elemento"
document.body.append(button)
button.addEventListener("click", agregarElemento)
const lista = document.createElement("ul")
lista.id = "lista"
document.body.append(lista)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const suicideParagraph = document.createElement("p")
suicideParagraph.id = "deleteParagraph"
suicideParagraph.textContent = "SI ME APRETAS DESAPAREZCO PARA SIEMPRE"
suicideParagraph.addEventListener("click", () => {
  suicideParagraph.remove()
})
document.body.append(suicideParagraph)

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const content = document.getElementById("content")
content.innerHTML = "<p>CAMBIAMOS DE TEXTO</p>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const botonSaludo = document.createElement("button")
botonSaludo.id = "greetBtn"
botonSaludo.textContent = "SALUDADOR"
botonSaludo.addEventListener("click", () => alert("Hola!!"))
document.body.append(botonSaludo)

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const imput = document.getElementById("textInput")
const div = document.getElementById("result")
imput.addEventListener("input", () => (div.innerText = imput.value))

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const cambiaFondo = document.createElement("button")
cambiaFondo.id = "backgroundBtn"
cambiaFondo.innerText = "Cambiar Fondo"
cambiaFondo.addEventListener("click", () => {
  const colorAleatorio = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`

  document.body.style.backgroundColor = colorAleatorio
})
document.body.append(cambiaFondo)
