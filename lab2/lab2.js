/* Array en JavaScript */

//'use strict';

var my_array = new Array();

var other_array = [];

my_array = [1,3,3,3,4,4,555,55,666,6,6,666666];

console.log(my_array);

console.log(my_array[3]);

other_array = ['a', 'n', 'ggjggjjggjgj', 'fjfjfjf'];

console.log(
typeof(my_array));

console.log(other_array);

my_array.push(3900000);

other_array.push('hola mundo');

console.log(my_array);
my_array.sort();
console.log(my_array);

tasks = ['comer', 'dormir', 'jugar'];

console.log(tasks);

tasks.splice(2,3, "Estudiar", "saltar", "correr");

console.log(tasks);
