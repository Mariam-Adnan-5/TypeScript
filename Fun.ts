//npx ts-node Fun.ts
function greeting(name:string){
    console.log(`hello ${name} `)
}
greeting('mariam')
greeting('omar')
greeting('Ahmad')

const students:string[]=['mariam','lina','israa']
for(let i of students){
    greeting(i)
}

function print(studName?:string){
if(studName){
    console.log(`hello ${studName} , welcome QA world`)}
else{
       console.log(`hello  , welcome QA world`)
}
}

print('ALi')
print()
// add fun
function sums(firstnumber:number,secoundnumber:number):number{
    return firstnumber+ secoundnumber
}
console.log(`the sum 2 num : ${sums(2,3)}`)

// get the total of two number then multuibly them by 10 or any number provideded the user
function mutiply(num1:number, num2:number, num3=10){
return(num1+num2)*num3
}

console.log(`1-the mutiply fun is  : ${mutiply(2,3)}`)
console.log(`2-the mutiply fun is  : ${mutiply(2,3,0)}`)
