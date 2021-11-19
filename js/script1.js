let mayorDeEdad = prompt("¿Cuántos años tienes?");
let regalo = prompt("¿Trae regalo? s/n");
let amigo = prompt("¿Eres un amigo? s/n");

if(mayorDeEdad >= 18 && regalo == 's' && regalo == 's') {
  document.write("Puedes pasar");
} else {
    document.write('No puede pasar');
}