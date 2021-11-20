'use strict';


let oscar = 'Oscar';

//declarando una funcion
//Valores de entrada (input), parámetros
function saludar(nombre, apellido) {
    //La función, se aplica sobre las entradas
    //Salida de resultados
    //Concatenacion
    return "Hola, " + nombre + " "  + apellido;
}

console.log(saludar("Karen", "Davalos"));

function btnSaludar() {
    alert("Hola Mundo");
}

let boton = document.getElementById('botoncito');

boton.addEventListener('click', btnSaludar);

/* Crear una o varias funciones
para una calculadora de 2 numeros.
     - Suma
    resta
    multiplicacion
    division
*/

//funcion flecha
/*let suma = (a, b) => {
    dhsjdhd
    dsdsdsdhdshdjs
    return a + b;
}*/

let a = prompt("escribe tu primer numero");
let b = prompt("escribe tu segundo numero");

function resta (num1, num2){
    let resultado = num1 - num2;
    return resultado; 
}
document.write(resta(a, b) + '<br />')

function multi (num1, num2){
    let resultado = num1 * num2;
    return resultado;
}
document.write(multi(a, b) + '<br />');


function divi (num1, num2){
    let resultado = num1 / num2;
    return resultado; 
}
document.write(divi(a, b) + '<br');
