
const promt = require('promt-sync')({sigint: true});

let Player1 = prompt("choose rock, paper, or scissors:")
let Player2 = prompt("choose rock, paper, or scissors:")

if ((Player1 === "rock" ||Player1 === "paper" || Player1 === "scissors")) && ((Player2 === "rock" ||Player2 === "paper" || Player2 === "scissors")) {
    if (player1 === player2) {
console.log('draw');
    } else if (Player1 === "rock" && Player2 === "scissors"){
    console.log("player 1  wins");
} else if (Player1 === "paper" && Player2 === "rock"){
    console.log("player 1  wins");
} else if (Player1 === "scissors" && Player2 === "paper"){
    console.log("player 1  wins");
} else if (Player2 === "paper" && Player1 === "rock"){
    console.log("player 2  wins");
} else if (Player2 === "scissors" && Player1 === "paper"){
    console.log("player 2  wins");
} else if (Player1 === "paper" && Player1 === "rock"){
    console.log("Player 2  wins");
}
} else {
    console.log("errors invalid entry")

}
