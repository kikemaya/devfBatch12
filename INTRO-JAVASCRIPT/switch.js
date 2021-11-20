'use strict';

let respuesta = prompt("1, significa saludo. 2, es un adios.");
console.log(typeof respuesta);
respuesta = parseInt(respuesta);

console.log(typeof respuesta);

switch (respuesta) {
    case 1:
        console.log("Hola!!!");
    break;
    case 2:
        console.log("Adios.");
    break;
    case 3: 
        //Instrucciones
    break;   
    default:
        console.log("Aprende a escribir, crack");
    break;
}