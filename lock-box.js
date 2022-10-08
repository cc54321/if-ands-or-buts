/*lock-box.js
You've been contracted to write the software for a lock box.

Write a program called lock-box.js that stores the pin code to the 

1. lock box in a variable at the top of your program (i.e.: let pinCode = '1234';).

2. After that, use prompt-sync to prompt the user for the passcode. 

3.If the user gets the passcode exactly correct, log a success message containing the word, "success". 

4.If not, log a failure message containing the word, "failure".
start here !!!!
Note: In this assignment, the node_modules folder containing the prompt-sync dependency does not already exist. To add it to this project, navigate to this repository using the command line then install it using the Node Package Manager with npm install prompt-sync.
*/

const prompt = require("prompt-sync")({sigint: true});
let pinCode = 1234;
console.log("The lock-box has four digits pin code");

let userInput = Number(prompt("please enter your pin Code: "));

if(userInput === pinCode){
  console.log("Success!") 
}

else{
  console.log("Failure")
}         
                  
