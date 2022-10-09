
/*rock-paper-scissors.js
Let's play a classic game of rock, paper, scissors!

Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

2 inputs

The players can only input "rock", "paper", and "scissors". Anything else should result in a failure message getting logged to the screen. After both players input their options, use console.log() to print the player who emerged victorious.

For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock. If both players input the same answer, it should result in a draw.

An example game

Player 1, enter "rock", "paper", or "scissors":
> rock
Player 2, enter "rock", "paper", or "scissors":
> paper
Player 2 wins!

*/

const prompt = require('prompt-sync')({sigint: true});

let player1 = prompt("Player 1: choose rock, paper, or scissors: ")
let player2 = prompt("Player 2: choose rock, paper, or scissors: ")


if ((player1 === "rock" || player1 === "paper" || player1 === "scissors") && ((player2 === "rock" || player2 === "paper" || player2 === "scissors")){

 if (player1 === player2)
    console.log(" draw! ");

 }else if (player1 === "rock" && player2 === "scissors") {
    console.log("player 1 wins");
 }else if (player1 === "paper" && player2 === "rock") {
    console.log("player 1 wins");
 }else if (player1 === "scissors" && player2 === "paper") {
    console.log("player 1 wins");
 }else if (player2 === "paper" && player1 === "rock") {
    console.log("player 2 wins");
 }else if (player2 === "scissors" && player1 === "paper") {
    console.log("player 2 wins");
 }else if (player1 === "paper" && player1 === "rock") {
    console.log("player 2 wins");
 }else{
console.log("error: invalid entry")
 }


