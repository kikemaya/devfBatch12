'use strict'
const { obtenerUsuariosAsync } = require('../usuarios/usuarios.js');

console.log('Inicio de programa');
console.time('inicio');

obtenerUsuariosAsync(1, (usuario) => {
  console.log('Usuario 1: ', usuario);
});

obtenerUsuariosAsync(2, (usuario) => {
  console.log('Usuario 2: ', usuario);
  console.timeEnd('inicio');
});

function suma(num1, num2) {
  return num1 + num2;
}
console.log('suma ', suma(2,5));
console.log('Fin de programa');

