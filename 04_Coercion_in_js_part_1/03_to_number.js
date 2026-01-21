/**
 * toNumber
 *
 * 1. null -> 0
 * 2. undefined -> NaN
 * 3. boolean -> true  -> 1
 *               false -> 0
 * 4. strings has it's own set of rules and grammer
 *    "345" -> 345
 *    "345ancj2o32" -> NaN
 *    "0xa" -> 10
 */

console.log(2 - 9); // -7
console.log(2 - null); // null -> 0 and then 2 - 0 = 2
console.log(2 - undefined); // undefined -> NaN and then 2 - NaN => NaN

console.log(100 - "1"); // '1' -> 1 then 100 - 1 = 99
console.log(100 - "12ab23"); // "12ab23" -> NaN then 100 - NaN => NaN

console.log(100 - "0xa"); // "0xa" -> 10 becaue it is hexadecimal representation of 10 and then 100 - 10 = 90

/**
 * Addition
 * Both of the operands are converted via toPrimitive
 * If any one of it is String then other is converted to String and concatenated
 * else toNumber is called on both of them and then addition is performed
 *
 * */
