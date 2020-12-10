var mensaje1 = "El tiempo ha concluido correctamente.";
var mensaje2 = "El tiempo no ha sido concluido correctamente.";

/**
 * Creo la función obtenerDatos que se encargará de devolver
 * un error dependiendo de la situación, como por ejemplo que la longitud sea igual a 0. 
 * En caso de no tener ningún error, tras 5 segundos mostrará el mensaje1.
 */
const obtenerDatos = ( ) => {
	return new Promise( ( resolver, devolver ) => {
		if ( mensaje1.lenght === 0 ) {
			devolver( new Error( mensaje2 ) );
		}

		setTimeout( ( ) => {
			resolver( mensaje1 );
		}, 5000 );
	} );
}

/**
 * Y a través de la función asíncrona controlDatos, se encargará de devolver
 * la función en caso de estar todo correcto, o devolver un error en caso de que no.
 */
async function controlDatos( ) {
	try {
		const datos = await obtenerDatos( );
		document.body.innerHTML = ( datos );
	} catch ( error ) {
		document.write( error.message );
	}
}

controlDatos( );
