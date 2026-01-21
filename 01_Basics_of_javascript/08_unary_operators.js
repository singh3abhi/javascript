// When only a single operator is used
// Postfix -> First it will be used and then operation will perform
// Prefix -> First operation will be performed and then value will be used

let a = 10;

// ++, --
console.log(a++); // postfix increment operator
console.log(++a); // prefix increment operator
console.log(a--); // postfix decrement operator
console.log(--a); // prefix decrement operator

// + -> It is used for converting data type to number
let b = "Sanket";
console.log(+b); // NaN

console.log(+"22"); // 22

// - -> It is used for converting data type to number but it will append - to it
console.log(-"22"); // -22
console.log(-"Sanket"); // NaN

// ! -> To get the negate of the value
console.log(!0);

// typeof -> It always give string with the value as variable's type
console.log(typeof "Value");
