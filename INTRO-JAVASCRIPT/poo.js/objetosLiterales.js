'use strict'

let humano = {
    colorDeCabello: 'Café',
    altura: '1.82',
    saludar: function() {
        console.log('Hola');
    }
}

let frutas = ['Limon', 'Manzana']

console.log(frutas[0]);

console.log(humano.colorDeCabello, humano.altura);
//Notacion de corchetes, es para
//acceder a indices/posiciones o claves,
//dependiendo de la estructura a la que quiera acceder
//objetos o arreglos
console.log(humano['colorDeCabello']);
humano.saludar()


//-----------------
let nombre2 = 'Juanito', apellido2 = 'Martinez', edad2 = 24

let persona = {
    nombre2,
    apellido2,
    edad2,
}
console.log(persona.nombre2);