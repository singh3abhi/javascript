// Objects

let user = {
  name: "Abhinav",
  age: 25,
  id: 0,
};

// Access object value
console.log(user.name);
console.log(user["name"]);

// Objects are mutable
user.name = "Tanmay";
console.log(user.name);

// Add a new key value pair or update existing key
user.marks = 60;
user["testId"] = 1;

console.log(user);

// Delete a key value pair
delete user.testId;
console.log(user);

let x = {
  name: "Abhinav Singh",
  age: 25,
  company: "Google",
  role: "SWE 2",
  level: "L3",
};

let keysOfObject = Object.keys(x);
console.log(keysOfObject);

let valuesOfObject = Object.values(x);
console.log(valuesOfObject);

let enteriesOfObject = Object.entries(x);
console.log(enteriesOfObject);

for (const [key, value] of enteriesOfObject) {
  console.log(key, "->", value);
}

for (const key in x) {
  console.log(key, ":", x[key]);
}
