'use strict'
const { obtenerUsuariosSync } = require('../usuarios/usuarios.js');

console.log('Inicio de programa');
console.time('inicio');

const usuario1 = obtenerUsuariosSync(12);
console.log('Usuario 1: ', usuario1);

const usuario2 = obtenerUsuariosSync(13);
console.log('Usuario 2: ', usuario2);

function suma(num1, num2) {
  return num1 + num2;
}
console.log('suma ', suma(2,5));
console.log('Fin de programa');
console.timeEnd('inicio');
