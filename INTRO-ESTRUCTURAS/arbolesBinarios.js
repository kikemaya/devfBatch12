'use strict'

class Nodo {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class ArbolBinario {
  constructor() {
    this.root = null;
  }

  insertar(value) {
    //Construir el nuevo nodo a agregar
    const nodoNuevo = new Nodo(value, null, null);

    //Valida que la raiz no este vacia
    if (!this.root) {
      this.root = nodoNuevo;
    } else {
      let nodoActual = this.root;
      let bandera = false;

      while (!bandera) {
        if (value === nodoActual.value) {
          bandera = true;
        }

        if (value !== nodoActual.value) {
          if (value < nodoActual.value) {
            if (!nodoActual.left) {
              nodoActual.left = nodoNuevo //{valor: 'valor', left: null, right null}
              bandera = true
            } else {
              nodoActual = nodoActual.left;
            }
          }

          if (value > nodoActual.value) {
            if (!nodoActual.right) {
              nodoActual.right = nodoNuevo //{valor: 'valor', left: null, right null}
              bandera = true
            } else {
              nodoActual = nodoActual.right;
            }
          }
        }
      }
    }
  }

  print() {
    console.log('this.root ', this.root);
  }

  find(value) {
    let arbolBinario = this.root;
    let encontrar = false;
    let contador = 0;
    while (!encontrar) {
      contador++
      if (!arbolBinario) {
        encontrar = true;
        return;
      }

      if (value === arbolBinario.value) {
        encontrar = true;
        return `El valor fue encontrado, valor.- ${value} las iteraciones fueron.- ${contador}`;
      }

      if (value !== arbolBinario.value) {
        if (value < arbolBinario.value) {
          arbolBinario = arbolBinario.left;
        }

        if (value > arbolBinario.value) {
          arbolBinario = arbolBinario.right;
        }
      }
    }
  }
}

const arbolBinario = new ArbolBinario;

arbolBinario.insertar(50);
arbolBinario.insertar(55);
arbolBinario.insertar(40);
arbolBinario.insertar(45);
arbolBinario.insertar(38);
arbolBinario.insertar(70);
arbolBinario.print();
console.log(arbolBinario.find(38));

//Comparación de algoritmo de busqueda lineal vs arbol binario
function algoritmoBusquedaLineal(valor) {
  const datosNumericos = [50,55,40,45,38,70];
  let respuesta = '';
  datosNumericos.forEach((datosNumerico, index) => {
    if (datosNumerico === valor) {
      respuesta = `El valor fue encontrado, valor.- ${valor} las iteraciones fueron.- ${index + 1}`;
    }
  })

  return respuesta;
}

console.log(algoritmoBusquedaLineal(38));