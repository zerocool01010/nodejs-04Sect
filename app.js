require("colors"); //hice el require de colores

const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear(); //te limpia la consola al ejecutar el script

const main = async () => {
  /* console.log("hola mundo"); */

  let opt = ''

  do {
    opt = await mostrarMenu(); //lo que resuelva la promesa va a volver por el parametro del resolve() y lo guardo en la variable creada
    console.log('La opcion elegida es: ', opt)

    await pausa() //vamos a evitar que se limpie la consola con el console.clear cada vez

  } while (opt !== "0");
};

main();
