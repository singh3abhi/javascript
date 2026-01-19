/* Arithmetic Operators
+, -, /, *, %, **
*/

let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division -> quotient
console.log(x % y); // Division -> remainder
console.log(x ** y); // Exponent

/* Assignment Operators 
=, +=, -=, *=, /=, **=, %=
*/

x = 20;
console.log(x);
x += 2; // x = x + 2
console.log(x);
x -= 2; // x = x - 2
console.log(x);
x *= 2; // x = x * 2
console.log(x);
x /= 2; // x = x / 2
console.log(x);
x **= 2; // x = x^2
console.log(x);
x %= 2; // x = x%2
console.log(x);

/* Relational Operators
< , > , <= , >=
*/

let a = 10;
let b = 20;
let c = 10;
let d = 100;

console.log(`${a} < ${b}`, a < b);
console.log(`${a} > ${b}`, a > b);
console.log(`${c} <= ${d}`, c <= d);
console.log(`${a} >= ${c}`, a >= c);

/* Logical Operators
AND Gate -> &&
OR Gate -> ||
NOT Gate -> !
*/

console.log(true && false);
console.log(true || false);
console.log(3 > 10 && 2 < 20);
console.log(!(2 > 10));

/* Bitwise Operators
Bitwise AND -> &
Bitwise OR  -> |
Bitwise XOR -> ^
Bitwise NOT -> ~
*/
