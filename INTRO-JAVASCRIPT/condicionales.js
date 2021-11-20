'use strcit'

//necesito comparar dos numeros y saber si uno es mas grande

let num1 = 5
let num2 = 4

console.log(num1);
console.log(num2);

//Establezco la condición
//!= -> diferente de
if(5 > 5) {
    //Ejecuta mi codigo
    console.log('Hola');
    //if anidado
    if(3 > 2) {
        console.log('Mundo');
    }
} else if(5 == 5){
  console.log("No amigo, 5 no es mayor 5. Es igual.");
}

//Hacer un programa con switch que reciba un nombre
//y si es Juan, lo imprima

var nombre = prompt("")

switch (nombre) {
    case 'Juan':
        //Ejecuto codigo
        console.log('Hola, Juan');
        break;
    case 'Roberto':
        //Ejecuto codigo
        break;
    default:
        console.log('gg no te entendi');
        break;
}
