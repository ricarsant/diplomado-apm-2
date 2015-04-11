/* Uso de funciones, variables y estructuras de control */
var a =20;
var b=20;
compara (a,b);

function compara(a,b){
if(a===b){
	alert("el valor a " + a + " es igual al valor b " + b);
}
else if(a>b){
	alert("el valor a " + a + " es mayor b =" + b);
}
else {alert("b = " + b + " es mayor a=" + a);}
}