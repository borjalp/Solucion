function juego()
{
	this.nombre="Niveles";
	this.niveles =[];
	this.usuarios = [];
	this.agregarNivel = function (nivel){
		this.niveles.push(nivel);
	}
	this.agregarUsuario = function (usuario){
		this.usuarios.push(usuario);
	}
}

function nivel(num)
{
	this.nivel = num;
}

function usuario(nombre)
{
	this.nombre = nombre;
	this.nivel = 0;
		this.agregarNivel = function (nivel){
		this.nivel= nivel;
	}
}

module.exports.juego=juego;
module.exports.usuario=usuario;
module.exports.nivel= nivel;
/*function Partidas()
{
	this.juegos = [];
		this.agregarJuego = function (juego){
		this.juegos.push(juego);
	}
}*/