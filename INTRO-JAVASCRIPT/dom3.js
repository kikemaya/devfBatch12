'use strict'

//leer nodos
//estas formas son mas especificas. Gastan menos recursos
let parrafo = document.getElementById('parrafo')

//Seleccionan y almacenan en una HTMLCollection
let secondP = document.getElementsByClassName('second-p')
let spansitos = document.getElementsByTagName('span')

console.log(parrafo);
console.log(secondP);
console.log(spansitos);

//Es mas generalista y poderoso. Gasta mas recursos
//el primero, selecciona el primer elemento de su tipo que encuentra.
//el segundo, selecciona todos los elementos que encuentra,
//y los almacena en algo llamado la NodeList
let titulo = document.querySelector('.p-query')
let parrafos = document.querySelectorAll('.p-query')

console.log(titulo)
console.log(parrafos)