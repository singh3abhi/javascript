/*
Primitive
Types which are atomic in nature

*/

// Numbers
const x = 1;
const y = -1;

// String
const string1 = "Hello";
const string2 = "World";
const string3 = `Hello ${string2}`;

// Boolean
const isValid = false;

// Undefiend
let key = undefined;

/*
Non-Primitive
Types which are composition of other types

*/

// Objects (Key - Value Pairs)
let user = {
  name: "Abhinav",
  age: 25,
  company: "Antino",
  posts: {
    createdAt: "Jan 19 2025",
  },
};

// Null -> It actually represents empty value

let a; // a is undefiend as a value was never assigned to it
let b = 2;
b = null; // b had a value before but we wanted to make it empty so we assigned null to it

console.log(a, b);
