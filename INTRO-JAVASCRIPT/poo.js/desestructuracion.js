'use strict'

let numeros = [1, "DOS", 3]

//Sin desestructuracion
let numero2 = numeros[1]
console.log(numero2)

//Con desestructuracion
let [pedro, dos, tres] = numeros

console.log(pedro);

let persona = {
    nombre: 'Jhon',
    apellido: 'Yuval',
    edad: 32
}

let {edad, nombre, apellido} = persona
//Jhon, se apellida Yuval y tiene 32 años
console.log(`${nombre}, se apellida ${apellido} y tiene ${edad} años.`);


console.log(edad)