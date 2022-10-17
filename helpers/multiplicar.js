
const fs = require('fs')

//async por defecto regresa una "promesa"
//Problema que no estoy manejando posibles errores
/*
const crearArchivo = async( base = 0 ) => {

    console.log("Creando tabla")
    let salida ="";

    for( let i = 1; i <= 10; i++){
        salida += `${ base } x ${ i } = ${ base * i }\n`
    }

    fs.writeFileSync( `tabla-${ base }.txt creado`, salida )

    return `tabla-${ base }.txt`

}
*/
//async con manejo de errores, a traves de try catch
const crearArchivo = async( base = 0, l, x ) => {

    try
    {
        console.log("Creando tabla")
        let salida ="";

        for( let i = 1; i <= x; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )

        if(l) console.log( salida )

    return `tabla-${ base }.txt`
    }catch(error){
        throw error
    }
    

}

module.exports = {
    crearArchivo
}