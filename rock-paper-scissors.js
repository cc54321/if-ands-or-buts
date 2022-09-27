
const promt = require('promt-sync')({sigint: true});

let player1 = prompt("choose rock, paper, or scissors:")
let player2 = prompt("choose rock, paper, or scissors:")

if ((player1 === "rock" ||player1 === "paper" || player1 === "scissors")) && ((player2 === "rock" ||player2 === "paper" || player2 === "scissors")) {
    if (player1 === player2) {
console.log('draw');
    } else if (player1 === "rock" && player2 === "scissors"){
    console.log("player 1  wins");
} else if (player1 === "paper" && player2 === "rock"){
    console.log("player 1  wins");
} else if (player1 === "scissors" && player2 === "paper"){
    console.log("player 1  wins");
} else if (player2 === "paper" && player1 === "rock"){
    console.log("player 2  wins");
} else if (player2 === "scissors" && player1 === "paper"){
    console.log("player 2  wins");
} else if (player1 === "paper" && player1 === "rock"){
    console.log("player 2  wins");
}
} else {
    console.log("errors invalid entry")

}
