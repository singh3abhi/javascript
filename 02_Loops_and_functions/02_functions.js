// Functions help us follow DRY principle (Don't repeat yourself)

function isEvenOrOdd(n) {
  if (n % 2 == 0) {
    return "Even";
  }

  return "Odd";
}

// for (let i = 0; i < 20; i++) {
//   console.log(`${i} is ${isEvenOrOdd(i)}`);
// }

function add(x, y) {
  return x + y;
}

console.log(add(2, 9));

// Function if number is prime or not

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i == 0) return false;
  }

  return true;
}
