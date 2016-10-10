
var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 
var modelo = require('./Servidor/modelo.js');
var juego = modelo.juego();

//app.use(app.router);
app.use(exp.static(__dirname +"/cliente"));

app.get("/",function(request,response){
	var contenido=fs.readFileSync(".Cliente/index.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});

app.get('/crearUsuario/:nombre',function(request,response)
					{

						//crear usuario con el nombre	
						var usuario = new modelo.usuario(request.params.nombre);
						console.log(usuario);
						response.send({'nombre':usuario.nombre,'nivel':usuario.nivel});
					});
console.log("Servidor escuchando en el puerto "+port);
app.listen(port,host);

