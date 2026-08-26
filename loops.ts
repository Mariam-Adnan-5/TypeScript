//In TypeScript, loops are used to execute a block of code repeatedly until a certain condition is met.
//There are several types of loops in TypeScript: for, while,  do-while loops , for in loops , for of loops.

//1. For Loop
for (let i = 5; i > 1; i--) {
    console.log(`Iteration ${i}`);
}

for (let i = 5; i > 1; i--) {
if(i == 4){console.log("Mariam")
    break;
}}

//2.enhanced for loop (for of loop)
const fruits : string[] = ["apple", "banana", "orange"];
for(let i of fruits){
    console.log(i);
}

//3. while loop
let i : number = 0;
while (i < 5) {
    console.log(`Iteration ${i}`);
    i++;
}

//4. do-while loop
let j : number = 0;
do {
    console.log(`Iteration ${j}`);
    j++;
} while (j < 5);