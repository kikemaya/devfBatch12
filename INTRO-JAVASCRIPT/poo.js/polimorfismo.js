'use strict'

class Animal {
    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
    }
    saludo() {
        return `Hola soy un animal. Inserte sonido generico de animal XD`
    }
}

const bestia = new Animal('Lobo', 'Gris')
console.log(bestia);
console.log(bestia.saludo());

//Crear un nuevo prototipo, llamado Perro que herede las prop y metodos de Animal.
class Perro extends Animal {
    constructor(nombre, color, raza){
        super(nombre, color)
        this.raza = raza
    }
    saludo() {
        console.log(super.saludo());
        console.log(`Hola, mi nombre es ${this.nombre}.`)
    }
}

//Desestructurar snoopy y obtener su nombre
const snoopy = new Perro('Snoopy', 'Blanco', 'Dalmata')
let { nombre } = snoopy;
console.log(snoopy);
console.log(snoopy.saludo(nombre));

//Polimorfismo: Es la practica de diseñar objetos para compartir comportamientos y poder anular los comportamientos compartidos con otros especificos. El polimorfismo se aprovecha de la herencia para que esto suceda
