'use strict'

//document -> es mi document, y con .querySelector, estoy
//accediendo al método que me permite leer un elemento de mi html
let parrafo = document.querySelector('#parrafito')
console.log(parrafo)
let boton = document.getElementById('botoncito')

let frutas = ['Naranja', 'Toronja', 'Uva', 'Limon', 'Durazno', 'Fresa']
let listita = document.querySelector('#listita');

let animal = {
    nombre: 'jaguar',
    familia: 'Felinos',
    color: 'amarillo',
    vivo: true,
    grunir (){
        //Coloco código
        return('arg')
    }
}

console.log(animal.grunir());

function btnSaludar() {
    parrafo.innerHTML = '<h1>Hola, soy un parrafo</h1>'
    parrafo.textContent = '<h1>Hola, soy un parrafo</h1>'
    //
    parrafo.style = 'color: yellow'
    //
    for(var i = 0; i < frutas.length; i++){
        document.write(`<li>${frutas[i]}</li>`)
        console.log(frutas[i]);
    }
    console.log('Hola')
}

boton.addEventListener('click', btnSaludar)

