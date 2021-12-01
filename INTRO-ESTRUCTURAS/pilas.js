'use strict'

class Pila {
  constructor() {
    this.pila = [];
  }

  push(dato) {
    this.pila.push(dato);
  }

  pop() {
    this.pila.pop();
  }

  peek() {
    return this.pila[this.pila.length - 1];
  }

  size() {
    return this.pila.length
  }

  print() {
    return this.pila
  }

}

const pila = new Pila();

pila.push('a');
pila.push('b');
pila.push('c');
pila.push(1);
console.log(pila.print());
console.log(pila.peek());
console.log(pila.size());
pila.pop();
pila.pop();
console.log(pila.print());
console.log(pila.peek());
console.log(pila.size());

