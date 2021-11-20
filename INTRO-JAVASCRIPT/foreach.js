'use strict'

let frutas = [
    'Limon',
    'Manzana',
    'Pera',
    'Uva',
    'Guayaba',
    'sauco',
    'Pitaya',
    'Chirimoya'
]

//Operador de modulo. Nos va a ayudar a operar dos numeros y obtener el resto de la division de los mismos. Se utiliza el simbolo de %

//parametros que recibe por defecto el forEach = elementoDeArray, indice de array y el array
frutas.forEach((fruta, estoNoEsUnIndice, arreglo) => {
    //Puedo ejecutar cualquier tipo de logica y muchas sentencias de codigo
    console.log(fruta, estoNoEsUnIndice, arreglo);
});
