'use strict'

const numeros = [1, 2, 3, 4, 5, 6]
const numeros2 = [7, 8, 9]

const numerosParcial = numeros.slice(0, 2)
const numerosCopia = numeros.slice()

numeros.push(100, 132)
numerosCopia.pop()

console.log(numerosParcial)
console.log(numerosCopia)

//.concat()
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [7, 8, 9]

const d = a.concat(b, c, 1, 4, 8000, 8080)
console.log(d);







