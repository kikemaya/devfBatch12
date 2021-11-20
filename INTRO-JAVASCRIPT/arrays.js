'use strict';

//Aquí defino mis variables
//Leer nodos
let parrafo = document.querySelector('#parrafito');
console.log(parrafo);
let boton = document.getElementById('botoncito');
let listita = document.querySelector('#listita');

let frutas = ['Naranja', 'Toronja', 'Uva', 'Limon']

boton.addEventListener('click', btnSaludar);

function btnSaludar() {
    console.log('Has dado un click');
    /*
    parrafo.innerHTML = "<h1>Hola Mundo!!!</h1>";
    for(var i = 0; i < frutas.length; i++){
        document.write(`<li>${frutas[i]}</li>`)
        console.log(frutas[i]);
    }*/
}


/*
let frutas = [
    'Mandarina',
    'Pera',
    'Uva',
    'Fresa',
    'Granada',
];

frutas[1] = 'Durazno';

frutas.push('Aguacate');
frutas.push('Limón');
frutas.pop();
console.log(frutas);

console.log(frutas[1]);

console.log(frutas.length);*/