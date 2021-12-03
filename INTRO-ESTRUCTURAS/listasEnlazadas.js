'use strict'

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertar(value) {
    const node = new Node(value, this.head);
    this.head = node;
    console.log('INSERT ', this.head);
  }

  delete() {
    if (this.head) {
      if (this.head.next) {
        const segundoNodo = this.head.next;
        this.head = segundoNodo;
      } else {
        this.head = null;
      }
    }
  }

  recorrido() {
    let nodoActual = this.head;
    while (nodoActual) {
      console.log('RECORRIDO ', nodoActual);
      nodoActual = nodoActual.next;
    }
  }

  busqueda(valor) {
    // ! simbolo de admiracion que cierra retorna el valor contrario
    // if > true o false
    // this.head tiene valores > true
    // this.head no tiene valores > false
    // !true == false
    // !false == true

    if (!this.head) {
      return null;
    }

    let nodoActual = this.head;
    while (nodoActual) {
      if (nodoActual.data === valor) {
        return nodoActual.data;
      }
      nodoActual = nodoActual.next
    }
    return 'valor no encontrado'
  }

}

const linkedList = new LinkedList();
linkedList.insertar('a');
linkedList.insertar('b');
linkedList.insertar('c');
linkedList.insertar('z');
linkedList.recorrido();
const valorEncontrado = linkedList.busqueda('d');
console.log('valorEncontrado ', valorEncontrado);
linkedList.delete();
linkedList.delete();
linkedList.delete();