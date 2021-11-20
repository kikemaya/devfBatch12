'use strict'

//Crear una clase Animal
//Azucar sintactica - Simplificar como se definen los prototipos
//No importa que yo escriba "class". En javascript se habla de prototipos
class Animal {
    //funcion especial que se ejecuta en el momento en que se crea una instancia nueva.
    constructor(nombre, color, sonido) {
        //atributos del prototipo
        this.nombre = nombre
        this.color = color
        this.sonido = sonido
    }
    saludar(nombreDelAnimal) {
        return `Hola, soy un ${nombreDelAnimal}`
    }
}

class Jirafa extends Animal {
    constructor(nombre, color, sonido, tam) {
        super(nombre, color, sonido)
        this.tam = tam
    }
}

let jirafaAlbina = new Jirafa('walter', 'white', 'i am the law, crack', '12m')
console.log(jirafaAlbina.saludar(jirafaAlbina.nombre))

let perro = new Animal('Chihuahua', 'Cafesito', 'guauaghjsghags')
let gato = new Animal('Egipcio', 'piel', 'te odio')

//desestruturando
let { nombre } = perro

console.log(perro.nombre);
console.log(perro.saludar(nombre));

console.log(gato);
console.log(jirafaAlbina);

/*
Abstraccion se refiere a cuando el programador hace un analisis de cuales son las caracteristicas minimas y fundamentales (generales), que tiene que tener un molde/prototipo. Para que eventualmente se creen instancias referenciadas a ese prototipo (objetos)

*/


