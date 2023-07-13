//player Name
let player1 = "Player1";
let player2 = "Player2";

function editNames() {
    let player1 = prompt("Hey Player 1 insert your name");
    let player2 = prompt("Hey Player 2 insert your name");

    // limit the name length due to limiting over complication

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter a valid name');
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}

function diceGame() {
	let diceNum1 = document.querySelector(".img1");
	let diceNum2 = document.querySelector(".img2");

	diceNum1.setAttribute("src", "diceroll.gif");
	diceNum2.setAttribute("src", "diceroll.gif");

	 // assign output to the heading while using a Math random and floor

	 let result = document.querySelector("h1")
	 result.innerHTML = ""
	 setTimeout(() => {
	   let randomDice = Math.floor(Math.random() * 6) + 1;
	   let randomDice2 = Math.floor(Math.random() * 6) + 1;

	   diceNum1.setAttribute("src", "dice" + randomDice + ".png");
	   diceNum2.setAttribute("src", "dice" + randomDice2 + ".png");  
   
//determine the winner
if (randomDice === randomDice2) {
	result.innerHTML = "&#128681; Draw! &#128681;";
}
else if (randomDice < randomDice2) {
	result.innerHTML = (player2 + " WINS! &#128681; ");
}
else {
	result.innerHTML = (player1 + " WINS!&#128681;");
}


}, 2500);

}

let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("laughing-minions.mp3");
  audio.play();
}

play.addEventListener("click", playMusic);