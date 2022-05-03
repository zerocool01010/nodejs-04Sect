require("colors");

const mostrarMenu = async () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===================".green);
    console.log("Selecciona una opcion".red); //le doy color
    console.log("===================".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tarea`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    const readline = require("readline").createInterface({
      //creo la interface para entrar info desde la consola, como el BufferReader de Java
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion: ", (opt) => {
      //en este punto el usuario elige una opcion (opt de option)
      /* console.log({ opt }); */
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          readline.question(`\nPresione ${"ENTER".blue} para continuar`, (opt) => {
            readline.close();
            resolve() //no mando param porque no me interesa lo que el usuario ingrese
          }); 
    });


  
};

module.exports = {
  mostrarMenu,
  pausa,
};
