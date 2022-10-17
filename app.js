
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require( './config/yargs' )
const colors = require('colors')



//const base = 3

/*
crearArchivo( base )
    .then( nombreArchivo => console.log( nombreArchivo, "creado"))
    .catch( err => console.log( err ))

*/

//console.log( process.argv )

console.clear()

console.log( argv )

//console.log( 'base: yargs', argv.b )


crearArchivo( argv.b, argv.l, argv.x )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow , "creado"))
    .catch( err => console.log( err ))


