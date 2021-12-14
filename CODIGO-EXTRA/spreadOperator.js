'use strict'

let palabra1 = 'Hola';
let palabra2 = palabra1;

palabra2 = 'Adios';

console.log('palabra1 ', palabra1);
console.log('palabra2 ', palabra2);


const arregloLetras1 = ['a', 'b', 'c', 'd'];
const arregloLetras2 = arregloLetras1.slice();
const arregloLetras3 = [...arregloLetras1];

arregloLetras2[0] = 'z';
arregloLetras3[0] = 'u';

console.log('arregloLetras1 ', arregloLetras1);
console.log('arregloLetras2 ', arregloLetras2);
console.log('arregloLetras3 ', arregloLetras3);


const arregloObjetos = [{ piece: 5 }, { piece: 2 }, { piece: 5 },];
const arregloObjetos2 = arregloObjetos.slice();
const arregloObjetos3 = arregloObjetos.map(arregloObjeto => ({...arregloObjeto}));

arregloObjetos2[0].piece = 10;
arregloObjetos3[0].piece = 8;

console.log('arregloObjetos ', arregloObjetos);
console.log('arregloObjetos2 ', arregloObjetos2);
console.log('arregloObjetos3 ', arregloObjetos3);

