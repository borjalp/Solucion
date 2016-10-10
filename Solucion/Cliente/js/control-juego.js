//FUNCIONES QUE MODIFICAN INDEX

function inicio()
{
	mostrarCabecera();
}

function borrarControl()
{
	$('#control').remove(); //borra el id = control
}

function mostrarCabecera()
{
	$('#cabecera').remove(); //borra el id = cabecera
	$('#control').append('<div id="cabecera"><h1>Panel de control:</h1> <input type ="text" id="nombre" placeholder="Introduce tu nombre: "></div>');
}

function botonNombre()
{
	var nombre="";
	$('#cabecera').append('<button type="button" id="nombreBtn" class="btn btn-primary btn-md">Enviar</button>');
	//$('#cabecera').append('<button type="button" id="nombreBtn" >');
	$('#nombreBtn').on('click',function(){
		// $('#nombreBtn').remove();
		// crearUsuario($('#nombre').val());

		nombre=$('#nombre').val();
 		$('#nombre').remove();
 		$('#nombreBtn').remove();		
 		crearUsuario(nombre);	});
}

function mostrarInfoJugador(datos)
{
 	$('#datos').remove();
 	$('#cabecera').append('<div id="datos">Nombre: '+datos.nombre+' Nivel: '+datos.nivel+'</div>');
 }

//FUNCIONES DE COMUNICACION CON EL SERVIDOR

function crearUsuario(nombre)
{
	if (nombre="") 
	{
		nombre= "jugador vacio";
	}
	$.getJSON('/crearUsuario/'+nombre,function(datos)
		{
			//datos tiene la respuesta del servidor
			//mostrar los datos del usuario
			mostrarInfoJugador(datos);
		});
	//mostrar datos (lo que este aqui no controlo en que momento se ejecuta)
}