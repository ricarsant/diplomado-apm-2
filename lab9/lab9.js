/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

// Creación del Callback


// Callback con un parametro
function operaciones(op1,op2){
	op1(2,3);//llama o ejecuta la funcion op1 con los parametros
	op2(10,3);
	
}


//llamo la funcion "operaciones" con los parametros esperados-'funciones'
operaciones(
	function(p1,p2){
		//escriba lo que hace la funcion
	alert(p1+p2);

	//fin de lo que hace la funcion
	},

	function(p1,p2){
		alert(p1-p2);
	}

);

operaciones(
	function(p1,p2){
	alert(p1*p2);
	},

	function(p1,p2){
		alert(p1/p2);
	}

);
