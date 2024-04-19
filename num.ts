#! /usr/bin/env node

import inquirer from "inquirer"

let randomnum = Math.floor(Math.random()*10+1)


const answer = await inquirer.prompt([
{ message: " Please enter the number", name: "usergussnumber",type:"number"}
]
);
console.log(`user guess number is ${answer.usergussnumber}`);
if(answer.usergussnumber === randomnum){
    console.log("good, your num is correct")
}else{
    console.log("sorry, your number is incorrect, try again")
}
console.log(`computer generated number is ${randomnum}`);