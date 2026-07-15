/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//{2,} como minimo 2 letras representa minimo y maximo

// 2. Crea una RegEx obtenga Hashtags de un Texto
const regexHashtag = /#/g
// g busca en todas las coincidencias del texto
const textoConHashtags = "hol#a# #Como# Est#as"
console.log(textoConHashtags.replace(regexHashtag, ""))
// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
console.log(regexPassword.test("xd123g"))
// NOTA: Aplícalas utilizando diferentes operaciones
