// Rock Paper Scissors - main.js

/* This file is licensed under the MIT License.

You can view the license at
https://github.com/anikethchavare/Rock-Paper-Scissors/blob/main/LICENSE.txt.

Written by Aniketh Chavare <anikethchavare@outlook.com>, 2023 */

// Confetti
const jsConfetti = new JSConfetti();

// Preventing the Form from Refreshing the Page
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
})

// OnClick - Play
document.getElementById("submit").addEventListener("click", function() {
    play();
});

// Function 1 - Play
function play() {
    // Variables
    const choiceText = document.getElementById("choice").value.toLowerCase();
    const computer = Math.floor(Math.random() * (4 - 1)) + 1;
    var computerChoice;
    var result;

    // Checking if the Choice is Valid
    if (!["rock", "paper", "scissors"].includes(choiceText)) {
        alert("Please enter a valid input (rock, paper, scissors).")
    } else {
        // Checking for Result
        if (computer == 1) { // Computer's Choice - Rock
            computerChoice = "Rock";

            if (choiceText == "rock") {
                result = "Draw";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("draw-lottie").style.display = "block";
            } else if (choiceText == "paper") {
                result = "You Win";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("win-lottie").style.display = "block";
            } else if (choiceText == "scissors") {
                result = "You Lose";
                document.getElementById("lose-lottie").style.display = "block";
            }
        } else if (computer == 2) { // Computer's Choice - Paper
            computerChoice = "Paper";

            if (choiceText == "rock") {
                result = "You Lose";
                document.getElementById("lose-lottie").style.display = "block";
            } else if (choiceText == "paper") {
                result = "Draw";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("draw-lottie").style.display = "block";
            } else if (choiceText == "scissors") {
                result = "You Win";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("win-lottie").style.display = "block";
            }
        } else if (computer == 3) { // Computer's Choice - Scissors
            computerChoice = "Scissors";

            if (choiceText == "rock") {
                result = "You Win";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("win-lottie").style.display = "block";
            } else if (choiceText == "paper") {
                result = "You Lose";
                document.getElementById("lose-lottie").style.display = "block";
            } else if (choiceText == "scissors") {
                result = "Draw";
                jsConfetti.addConfetti({confettiNumber: 500});
                setInterval(() => { jsConfetti.addConfetti({confettiNumber: 500});}, 3000);
                document.getElementById("draw-lottie").style.display = "block";
            }
        }

        // DOM
        document.getElementById("form").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("playAgain").style.display = "block";

        document.getElementById("heading").innerHTML = result + "!";
        document.getElementById("heading-2").innerHTML = "<b>Computer:</b> " + computerChoice + "<br> <b>You:</b> " + choiceText.charAt(0).toUpperCase() + choiceText.slice(1);
    }
}