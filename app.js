require("colors"); //hice el require de colores

const {mostrarMenu, pausa} = require('./helpers/mensajes')

console.clear(); //te limpia la consola al ejecutar el script

const main = async () => {
  /* console.log("hola mundo"); */

  mostrarMenu()
  pausa()
};

main();
