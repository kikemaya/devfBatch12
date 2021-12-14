'use strict'

const numeros = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9]
console.log(numeros);

const selectionSort = numeros => {
    const arr2 = numeros.slice()
    const l = numeros.length
    //Recorrer el arreglo por completo
    for (let i = 0; i < l; i++) {
        //almacenar la posicion minima
        let indiceMinimo = i
        for (let j = i + 1; j < l - 1; j++) {
            //si la posicion siguiente es menor a la minima, establecer una nueva posicion minima
            if (arr2[j] < arr2[indiceMinimo]) {
                indiceMinimo = j
            }
        }

        const temp = arr2[indiceMinimo]
        arr2[indiceMinimo] = arr2[i]
        arr2[i] = temp
    }
    return arr2
}

console.log(selectionSort(numeros))
console.log(numeros);
