require('colors')

const mostrarMenu = () => {
    console.clear()
    console.log('==================='.green)
    console.log('Selecciona una opcion'.red) //le doy color
    console.log('==================='.green)

    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tarea`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir \n`)

    const readline = require('readline').createInterface({ //creo la interface para entrar info desde la consola, como el BufferReader de Java
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Seleccione una opcion: ', (opt) => {
        console.log({opt});
        readline.close();
    })
}

module.exports = {
    mostrarMenu
}