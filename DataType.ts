/*
TypeScript offers a wide range of data types, ensuring that variables hold the expected type of data
1. Primitive Types
( string, number, boolean, null, undefined)
2. Complex Types
(array , object,tuple,function)
3. Special Types
(any , unknown , never , void)
*/

let firstname: string = "Mariam123";// string
console.log(typeof firstname);
let lastname = "thabet"; // string
console.log(typeof lastname); // to know the type of variable we can use typeof operator
let age: number = 22;// number
console.log(typeof age);
let isStudent: boolean = true;// boolean
console.log(typeof isStudent);
let address: null = null;// null 
console.log(typeof address);
let hobbies: undefined = undefined;// undefined
console.log(typeof hobbies);

// Union Type allows a variable to have more than one possible type.
// Use the | symbol to combine multiple types.
let id : number | null| boolean; 

// The value can be either a boolean or a number or null.
id =null;
console.log(typeof id);
//id="mariam"; error
id =true;
console.log(typeof id);