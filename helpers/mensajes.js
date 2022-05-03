require('colors')

const mostrarMenu = () => {
    console.clear()
    console.log('==================='.green)
    console.log('Selecciona una opcion'.red) //le doy color
    console.log('==================='.green)
}

module.exports = {
    mostrarMenu
}