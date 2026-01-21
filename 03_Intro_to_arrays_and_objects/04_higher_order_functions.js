/*
Higher Order Functions
There are functions which depend & operate on other functions. Higher order functions
take another functions as argument or return a function an
*/

/**
 * map
 * map is a higher order function available with arrays
 * It takes a function as an argument -> f
 * It returns an array in which every value is actually populated by calling
 * function f with original array element as argument
 *
 * Map internally loops/iterates over all the elements of the given array original
 * array pass that value in the argument function and then store the returned value
 * inside an array
 */

function square(el) {
  return el * el;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

let result = arr.map(square);
console.log(result);

let newResult = result.map((element) => {
  return Math.sqrt(element);
});

console.log(newResult);

/**
 * If the function that we are passing in map takes two arguments
 * then first argument will be accessing the actual value and
 * second value will be accessing index of that value
 */

function check(element, idx) {
  return `Found ${element} at index ${idx}`;
}

let res = arr.map(check);
console.log(res);

/**
 * Filter function
 * Filter is also a higher order function
 * It also loops over the array elements
 * The argument function that we pass inside filter should always return boolean
 * if it doesn't then the result will be first converted to boolean and then returned
 *
 * If the result of function is true then that element is selected
 * else that element is skipped
 */

function isEven(element) {
  return element % 2 == 0;
}

function isOdd(element) {
  return element % 2 != 0;
}

let evenArr = arr.filter(isEven);
console.log(evenArr);

let oddArr = arr.filter(isOdd);
console.log(oddArr);

/**
 * Reduce Function
 * It is also a higher order function which iterates over all the elements of array
 */

function sum(previousResult, currentValue) {
  return previousResult + currentValue;
}

let sumRes = arr.reduce(sum);
console.log(sumRes);
