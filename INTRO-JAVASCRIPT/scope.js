//Ambito Global
'use strict';

/*
var nombre = 'Enrique';
console.log(nombre);
nombre = 'Lemuel';
console.log(nombre);
let name = 'Sharif';

function saludar() {
    //Ambito Local
    let name = 'Ramses';
    return "Hola, " + name;
}
console.log(saludar());
console.log(name);
*/

var nombre2 = "Enrique"

//Scope local
function Saludo() {
    const nombre = 'Luis'
    console.log(nombre2)
    //scope local nuevo
    function name() {
        const nombre3 = 'Miguel'
        return nombre2;
    }
    var info = name();
    console.log(info);
}

console.log(Saludo())
