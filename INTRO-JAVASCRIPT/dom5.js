'use strict'

//quiero seleccionar desde js, el input de texto
let nombre = document.getElementById('nombre')

nombre.addEventListener('input', (e) => {
    //codigo
    console.log(e)
})

//Seleccione como sea el titulo
let titulo = document.getElementById('title')
titulo.addEventListener('mouseover', () => {
    //Verificar que exista la clase texto-azul
    titulo.classList.remove('texto-azul')
    titulo.classList.add('texto-rojo')
})
titulo.addEventListener('mouseout', () => {
    titulo.classList.add('texto-azul')
})

/*
- Pedir al usuario por un input de texto dos numeros y que imprima cuál es mayor.

- Pedir una frase por un input e imprimir cuántas veces
aparece en esa frase la letra a

- Crear un conversor de grados(con el DOM):
Fahrenheit a Celsius
Celsius a Kelvin
Kelvin a Fahrenheit.
*/


