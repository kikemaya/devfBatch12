'use strict'
module.exports = {
  obtenerUsuariosSync(id) {
    const tiempoInicio = new Date().getTime();
    while (new Date().getTime() - tiempoInicio <= 3000) {
      // Esperando...
    }

    return {
      id: id,
      nombre: `Usuario ${id}`
    }
  },
  obtenerUsuariosAsync(id, callback) {
    const usuario = {
      id: id,
      nombre: `Usuario ${id}`
    }

    setTimeout(() => {
      callback(usuario)
    }, 3000);
  },
  objetoDatos: {
    info: ['verde', 'amarillo', 'azul']
  }
}
