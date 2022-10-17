

const argv = require('yargs').options({
    
    'b':{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    },
    'x':{
        alias: 'xNumero',
        type: 'number',
        default: 10,
        describe: 'Cuántas veces se va multiplicar'
    },
    'l':{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    }, 
    
    })
    .check( 
    (argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        } return true
    })
    .check( 
        (argv, options) => {
            if( isNaN(argv.x)){
                throw 'El xNumero tiene que ser un número'
            } return true
        })
    .argv;

module.exports = argv