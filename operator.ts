//TypeScript operators are symbols or keywords that perform operations on one or more operands.

/* 1. Arithmetic Operators
(+ , - , * , / , % , ++ , --)*/

let num1: number = 10;
let num2: number = 5;
let sum: number = num1 + num2;
let difference: number = num1 - num2;
let product: number = num1 * num2;
let quotient: number = num1 / num2;
let remainder: number = num1 % num2;
let increment: number = ++num1; // Increment num1 by 1
let decrement: number = --num2; // Decrement num2 by 1
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);
console.log(increment);
console.log(decrement);

/*2.relational Operators
(< , > , <= , >= , == , != , === , !==)*/
let isLessThan: boolean = num1 < num2;
let isGreaterThan: boolean = num1 > num2;
let isLessThanOrEqual: boolean = num1 <= num2;
let isGreaterThanOrEqual: boolean = num1 >= num2;
let isEqual: boolean = num1 == num2;
let isNotEqual: boolean = num1 != num2;
let isStrictEqual: boolean = num1 === num2;// Strict equality: returns true only if both values and their types are the same.
let isStrictNotEqual: boolean = num1 !== num2;// Strict inequality: returns true if the values or types are different.

console.log(isLessThan);
console.log(isGreaterThan);
console.log(isLessThanOrEqual)
console.log(isGreaterThanOrEqual);
console.log(isEqual);
console.log(isNotEqual);
console.log(isStrictEqual);
console.log(isStrictNotEqual);

/*3. Logical Operators
(&& , || , !)*/

let x: boolean = true;
let y: boolean = false;

let and: boolean = x && y;
let or: boolean = x || y;
let not: boolean = !x;

console.log(and);
console.log(or);
console.log(not);

/*4. Assignment Operators
(= , += , -= , *= , /= , %=)*/
let a: number = 11
let b: number = 3;

a += b; // Equivalent to a = a + b
console.log(a);

a -= b; // Equivalent to a = a - b
console.log(a);

a *= b; // Equivalent to a = a * b
console.log(a);

a /= b; // Equivalent to a = a / b
console.log(a);

a %= b; // Equivalent to a = a % b
console.log(a);
