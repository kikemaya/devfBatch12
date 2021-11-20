'use strict'

//Operador ternario
let resultado = (5 < 4)
                ? "5 es mayor a 4"
                : hola()

function hola() {
    return "Hola";
}
//Funciones anonimas
let saludar = function() {
    console.log('Hola, estoy saludando');
}

//Funciones flecha(arrow functions)
//let saludarFlecha = (nombre) => {
  //  return `Hola, ${nombre}. Soy una funcion flecha`;
//}

//Solo puedo hacer esto, si mi función solo hace return
let saludarFlecha = nombre => `Hola, ${nombre}. Soy una funcion flecha`;

console.log(resultado);
saludar()
console.log(saludarFlecha('David'));
