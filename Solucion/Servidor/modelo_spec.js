 var modelo = require('./modelo.js');
describe("El juego niveles inicialmente...", function() 
{
		var juego;
		var nivel;
		var user;
   
	
  beforeEach(function ()
	{
		// juego = new Juego();
		nivel = new modelo.nivel(00);
		user = new modelo.usuario("Borja");

    juego= new modelo.juego();

	});

  	it("una coleccion vacia de niveles y de usuarios", function() 
  	{
    	expect(juego.niveles.length).toEqual(0);
     	expect(juego.usuarios.length).toEqual(0);
  	});

  	it("comprobar que nivel inicial del usuario es indefinido", function() 
  	{
    	expect(user.nivel).toEqual(undefined);
     	
  	});

  	it("agregar nivel a un usuario", function() 
  	{
  		user.agregarNivel(1);
    	expect(user.nivel).toEqual(1);
     	
  	});

  	it("comprobar que user se llama Borja", function() 
  	{
  		
    	expect(user.nombre).toEqual("Borja");
     	
  	});


});