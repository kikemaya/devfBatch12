'use strict'

//arreglo de objetos literales
let cuentas = [
    {
        nombre: 'Ali',
        saldo: 1000,
        contrasenha: 'admin123'
    },
    {
        nombre: 'Horacio',
        saldo: 100,
        contrasenha: '19990608'
    }
]
//Notacion de corchetes, me permite acceder a la posicion/indice y tambien a la clave de los valores de un arreglo y un objeto, respectivamente
console.log(cuentas[1].saldo);