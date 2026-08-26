/* arrays :
stores elements of the same type.
Elements are in contiguous memory locations.
Supports index-based access.
The array name represents the starting address.*/

/* declaring arrays in TS 
1- Using square brackets [] after the type
2- Using the Array generic type with angle brackets <>
*/

let names :string[] = ["Mariam", "Ali", "Ahmed"];
let names2 :Array<string | number>= ["Mariam", 2, "Ahmed"];

console.log(names[2]);
console.log(names2[1]);
console.log(names);

names[1] = "lina"; // Update the second element
console.log(names);

names.unshift("Sara"); // Add an element at the beginning
console.log(names);

names.shift(); // Remove the first element
console.log(names);

names.push("Omar"); // Add an element at the end
console.log(names);

names.pop(); // Remove the last element
console.log(names);

let tomatoes: string ='14$';
let potatoes: string ='10$';
let tomatoesprice: number = Number(tomatoes.slice(0,2)); // Extract the first two characters
let potatoesprice: number = Number(potatoes.slice(0,2)); // Extract the first two characters
console.log(tomatoesprice + potatoesprice); // Output: 24

let numbers: number[] = [1, 3, 4, 5, 6, 7, 8, 9];
let filteredNumbers: number[] = numbers.filter((num) => num > 4);
console.log(filteredNumbers); 

