//Task2 : build a ATM Simlattion
import { exit } from "process";
import promptSync from "prompt-sync";
const prompt = promptSync();

let userinput :string;
let pass1: number = 1234;
let cash: number = 140;
let i =1;


do{
userinput =prompt("Enter your password : ");
let machpass: number = Number((userinput));

if(pass1 == machpass){
    while(true){
        console.log(`1. view your cash\n2. make a deposit \n3. make a withdraw \n4. exit the program`);
        let userinput2 = prompt("Enter your choice : ");
        if(userinput2 == "1")
            { console.log(`Your cash is : ${cash}`);
        console.log("1- Go back to main menu\n2- Exit the program");
        let y = prompt("Enter your choice : ");
        if(y == "1"){continue;}
        else if(y == "2"){exit();}
    
    }

        else if(userinput2 == "2"){
            let x = prompt("Enter the amount to deposit : ");
            let deposit: number = Number(x) ;
            if(deposit >= 0){
            cash+= deposit;
            console.log(`Deposit successful. Your new cash balance is : ${cash}`);
            console.log("1- Go back to main menu\n2- Exit the program");
            let y = prompt("Enter your choice : ");
            if(y == "1"){continue;}
            else if(y == "2"){exit();}
        }
            else{console.log("Invalid deposit amount");
                console.log("1- Go back to main menu\n2- Exit the program");
                let y = prompt("Enter your choice : ");
                if(y == "1"){continue;}
                else if(y == "2"){exit();}
            }
            
        }
        else if(userinput2 == "3"){
            let x = prompt("Enter the amount to withdraw : ");
            let withdraw: number = Number(x);
            if(withdraw <= cash && withdraw >= 0){
                cash -= withdraw;
                console.log(`Withdrawal successful. Your new cash balance is : ${cash}`);
                console.log("1- Go back to main menu\n2- Exit the program");
               let y = prompt("Enter your choice : ");
               if(y == "1"){continue;}
               else if(y == "2"){exit();}
            } else {
                console.log("Insufficient funds or invalid amount.");
                console.log("1- Go back to main menu\n2- Exit the program");
                let y = prompt("Enter your choice : ");
                if(y == "1"){continue;}
                else if(y == "2"){exit();}    
            }
        }
        else if(userinput2 == "4")
            { exit();}
        else
            { console.log("Invalid choice");}
    }
    }
else{console.log("Invalid password ");}  
i++;
}while(i<=3);



