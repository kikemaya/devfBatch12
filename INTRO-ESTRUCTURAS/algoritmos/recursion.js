'use strict'
//Coloque condición de salida del bucle
function saludar() {
    console.log('Saludar')
    return saludar()
}

saludar()
