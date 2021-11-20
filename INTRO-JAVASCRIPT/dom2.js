'use strict'

//estoy leyendo un nodo de html y almacenandolo en una variable
let texto = document.getElementById('texto')
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById('boton')

function obtenerTexto() {
    let textito = parseFloat(texto.value)
    //imprimir textito en el parrafo, con esta misma funcion
    parrafo.textContent = textito
    parrafo.style.color = 'blue'
    parrafo.style.backgroundColor = 'red'
    parrafo.style.fontSize = '35px'
}

boton.addEventListener('click', obtenerTexto)