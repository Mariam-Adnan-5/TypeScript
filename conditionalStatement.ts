/*The if statement in TypeScript is used to execute code based on a condition
If the condition evaluates to true, the block of code inside the if statement is executed.
(if statements , else if statements, else statements , inested if)*/

//if the number is positive, print "The number is positive."
//if the number is negative, print "The number is negative."

let num = 0;

if (num > 0) {console.log(`${num} is positive.`);} 

else if (num < 0) {console.log(`${num} is negative.`);}

else if (num === 0) {console.log(`${num} is zero.`);}

else {console.log(`${num} the input is not a number.`);}
