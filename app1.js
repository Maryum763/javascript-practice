//number guess

var numberToGuess = Math.floor(Math.random() * 10) + 1;
var guesses = 0;
while (true) {
  var userGuess = prompt("Guess a number between 1 and 10:");
  if (userGuess == numberToGuess) {
    alert(`Congratulations! You guessed the number in ${guesses + 1} attempts.`);
    break;
  } else if (userGuess < numberToGuess) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
  guesses++;
} 


//14. Collect User Input

var userInput;
do {
  userInput = prompt("Enter something (type 'stop' to quit):");
  console.log(userInput);
} while (userInput.toLowerCase() !== "stop"); // Using do-while loop to collect user input until user types 'stop'
