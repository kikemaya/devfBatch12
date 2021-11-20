'use strict'

//Crear una clase(funcion constructora)
//Dentro coloco la minima cantidad de atributos que necesito
//para genererar un molde/plantilla/clase
//UpperCamelCase
//lowerCamelCase
function Persona(nombre, apellido, edad, correo) {
    //this es un objeto de js, que hace referencia al contexto en el
    //que se esta ejecuntando su funcion
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.correo = correo
    this.obtenerCorreo = function(correo) {
        return this.correo
    }
    this.editarCorreo = function(mail) {
        this.correo = mail
        return this.correo
    }
}

//Un objeto, es una instancia de una clase
let luis = new Persona('Luis Felipe', 'Navarro', 17, 'lfnavarroj@presidente.gob')
console.log(luis);

//callback, es una funcion que ejecuta dentro, otra funcion
console.log(luis.obtenerCorreo()); 
console.log(luis.editarCorreo('luisillo@cracatoa.com')); 
console.log(luis);

let rubi = new Persona('Rubi', 'Wiesse', 56, 'rubi@holasoinuebo.com')
console.log(rubi);
