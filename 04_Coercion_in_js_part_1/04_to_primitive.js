/**
 * toPrimitive
 *
 * toPrimitive(input, [preferredType])
 * It converts the input to non object type, if input can be converted to multiple
 * types and if we have preferredType then it will be preferred
 *
 * Best way is to go read the ecmascript docs but I will write in short here
 *
 * if input is not a object we return it directly
 * else we assign hint to default
 * if preferredType is hint String then hint is set to string
 * if preferredType is hint Number then hint is set to number
 *
 * if @@toPrimitive is defined for the object then that is called
 *
 * else
 * if hint is still default then we make it number
 * then we call the OrdinaryToPrimitive(O, hint)
 *
 * if hint is string then we prepare values ["toString", "valueOf"]
 * if hint is number then we prepare values ["valueOf", "toString"]
 *
 * then we iterate over the method list and if the result of those methods are non object
 * then we return immediately else at last we throw TypeError exception
 *
 */

/**
 * So under the hood toString and valueOf methods are being utilized if input is object
 *
 */

let obj = {
  toString() {
    // By default it gives [Object object] which is of type string,
    // we need to override it to stringify object
    return "This is override implementation of toString in object";
  },

  valueOf() {
    // By default it returns the exactly same object
  },
};

console.log(obj.toString());
console.log(obj.valueOf());

let obj2 = {};

console.log(100 - obj2);
/**
 * Since we are using subtraction then
 * both operands will be changed to toNumber()
 * toNumber(obj2) -> toPrimitive(obj2, number) -> [valueOf, toString]
 * valueOf(obj2) will give object and hence goes to toString(obj2) and it will give
 * [Object object] which is a string and that will be returned
 *
 * then toNumber(string [Object object]) => NaN
 *
 * 100 - NaN => NaN
 */

let obj3 = {
  x: 10,
  valueOf() {
    return 80;
  },
};

console.log(100 - obj3); // 20

let obj4 = {
  x: 10,
  toString() {
    return "90";
  },
};

console.log(100 - obj4); // 10

let obj5 = {
  x: 10,
  toString() {
    return {};
  },
};

// console.log(100 - obj5);
// It will throw TypeError: Cannot convert object to primitive value

let obj6 = {};

console.log("18" + obj6); // 18[Object object]

console.log(18 + obj6); // 18[Object object]
