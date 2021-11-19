'use strict'

//Que lo haya creado, no significa que se agregue
//porque lo tengo que anexar primero en algun lado del documento.
//Cada nodo que creo tiene que tener una etiqueta padre, de la cual, ser hijo.
/*
document.createElement('h1')
document.createTextNode('Texto')

- Siempre nos va a agregar un nodo al final
parentElement.appendChild

- puedes agregar mas de un nodo y texto 
parentElement.append

document.insertBefore(nodoQueQuieroAgregar, referencia)
*/

const container = document.querySelector('.cont')
const h3 = document.createElement('h3')
const texto = document.createTextNode('Hola!!')

container.appendChild(h3)
h3.appendChild(texto)

container.append('Hola 2', document.createElement('p'))

const titulo  = document.createElement('h1')
titulo.textContent = 'titulo'
const referencia = document.querySelector('h2')

container.insertBefore(titulo, referencia)