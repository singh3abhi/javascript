/*
Equality Operators

== -> Abstract equality operator
=== -> Strict equality operator


Most of where it is written that == just checks the value and === checks the value and type but that is wrong

==
It checks the types of both operands
If type is same then === is called
If type is not same then type conversion occurs (coercion) && then value comparison is done

===
It checks the types of both operands
If types are different then it returns false
If types are same then value comparison is done
*/

console.log("1 == '1'", 1 == "1"); // True, Here "1" will be converted to 1
console.log("1 === '1'", 1 === "1"); // False

console.log("1 == '2'", 1 == "2"); // False, Here "2" will be converted to 2 and hence 1 == 2 false
console.log("1 === '2'", 1 === "2"); // False

console.log("1 === 'Sanket'", 1 === "Sanket"); // False, "Sanket" will get converted to NaN and hence 1 == NaN will result in false
