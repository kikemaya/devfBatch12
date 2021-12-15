'use strict'

// INICIO DE PRIMER EJEMPLO
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
setTimeout(() => {
  console.log(3);
}, 2000);
console.log(4);
// FIN DE PRIMER EJEMPLO

// INICIO DE SEGUNDO EJEMPLO
console.log('-- SIMULACION DE CUELLO DE BOTELLA --');
console.log(1);
setTimeout(() => {
  return console.log(2);
}, 2000);
for (let index = 0; index < 9999999999; index++);
console.log(3);
// FIN DE SEGUNDO EJEMPLO
