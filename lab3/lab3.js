/* objetos y funciones */

var my_object = new Object();

var other_object = {};


 my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};


console.log(my_object.firstName);

console.log(my_object['lastName']);

var ky;

for(ky in my_object){
	console.log(my_object[ky]);
}
