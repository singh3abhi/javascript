let x = [];

// Arrays in js support hetrogenous values
let y = [1, 2, true, "String", null];

let z = ["ab", "bc", "cd"];

// console.log(x);
// console.log(y);
// console.log(z);

// // Arrays in js are mutable

// y[0] = 100;
// console.log(y);

// This will print values
for (const v of y) {
  console.log(v);
}

// This will print indexes
for (const v in y) {
  console.log(v);
}
