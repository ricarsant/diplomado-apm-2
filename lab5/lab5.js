/* Variables t elementos Booleanos */

var verdadero = true;
var falso = false;

/* Elementos de Comparación */

/* igualdad (==) */

console.log('1. Cuando es 1 == 1 es: ' + (1 == 1));

console.log('2. Cuando es "1" == 1 es: ' + ("1" == 1));

console.log('3. Cuando es 0 == false es: ' + (0 == false));

console.log('4. cuando es 1 == true es: ' + (1 == true));

console.log('5. Cuando es "" == 0' + ("" == 0)); // Convierte "" a 0

console.log('6. Cuando es 0 == ""' + (0 == "")); // Convierte "" a 0

console.log('7. CUando es "     " == 0' + (0 == "     "));

var x = {};

var y = x;

console.log("8. La Comparación entre los objetos X y Y es: " + (x == y));

/* igualdad estricta (===) */

console.log('9, Cuando es "1" === 1 es: ' + ("1" === 1));

console.log('10 Cuando es "0" === 0 es: ' + ("0" === 0));


/* Comparación no estricta de no igual (!=) */

console.log('11 Cuando es "" != 0' + ("" != 0));

/* Comparación estricta de no igual (!==)*/


console.log('12 Cuando es "" !== 0' + ("" !== 0));

/* Flujos logicos */

console.log("----- flujos logicos -----");

// Operador del tipo and `&&`
console.log( true && true);
console.log(true && false);
console.log(false && false);
console.log(false && false);

// Operador del tipo or `or`
console.log( true || true);
console.log(true || false);
console.log(false || false);
console.log(true || false);
