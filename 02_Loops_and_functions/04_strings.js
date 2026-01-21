let a = "abc";
let b = "abc";

console.log(a == b);
console.log(a == "abc");

let x = "abc"; // String literal
let y = String("abc"); // String literal
let z = new String("abc"); // String object

console.log(x);
console.log(y);
console.log(z);

console.log(x == y); // True
console.log(x == z); // True because of type conversion
console.log(z == y); // True because of type conversion

console.log(x === y); // True
console.log(x === z); // False, because we don't have type conversion in ===
console.log(z === y); // False, because we don't have type conversion in ===

// Strings in JS are immutable
let s = "Sanket";
s[0] = "A"; // This does not work

console.log(s);
