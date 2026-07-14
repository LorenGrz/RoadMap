/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error(
//         `El estado de la peticion es incorrecto: ${response.status}`,
//       )
//     }
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
// async function getPublicaciones() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     if (!response.ok) {
//       throw new Error(
//         `El estado de la peticion es incorrecto: ${response.status}`,
//       )
//     }
//     let data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getPublicaciones()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
const publicacion = {
  title: "Este es el titulo",
  body: "Este es el body",
}
async function crearPublicacion(publicacion) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(publicacion),
  })
  const data = await response.json()
  console.log(data)
}
crearPublicacion(publicacion)

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
