let favNumber = "13";
let guess;

while (true) {
  guess = "13";
  if (guess === favNumber) {
    console.log("You guessed it!");
    break;
  } else if (guess < favNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
}
