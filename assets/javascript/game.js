
//array of letters. 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0; //wins counter variable.
var losses = 0; //losses counter variable.
var guessesLeft = 9; //10 total guesses left counter variable.
var userGuesses = []; //guesses made by user. 
var compGuess = letters[Math.floor(Math.random() * letters.length)]; //letters array random generator.

//start function with a key input for letter buttons pushed to appear.
console.log(compGuess + " is the letter ")

document.onkeyup = function (event) { //triggering the function for every letter pushed. 
  var userGuess = event.key; //
  userGuesses.push(userGuess);

  console.log(userGuess + " is user guess");
  console.log("user guesses so far is " + userGuesses.length, "entries");

  //logic- if userGuess is the same as the compGuess its counted as a win.
  if (userGuess == compGuess) { //someone wins and we need to reset to a new game.
    guessesLeft = 9; //setting a intager data type.
    userGuesses = [];
    wins++; //addition function being triggered to add 1 win to win counter.
    compGuess = letters[Math.floor(Math.random() * letters.length)];
    window.alert(" You Win! ");
    console.log("second if statement userGuess == compGuess ")

  }
  else if (guessesLeft == 0) { //no more turns, you lose logic
    guessesLeft = 9;
    userGuesses = [];
    losses++; //addition function being triggered to add 1 lose to losses counter.
    compGuess = letters[Math.floor(Math.random() * letters.length)];
    window.alert(" You Lose! ");
    console.log("You Lose!")

  }
  // 2) BUT!!! If it's wrong, then subtract from guess left and add to losses
  else if (compGuess != userGuess) { //wrong guess , but has more turns
    guessesLeft--;
    console.log("2.1 if statement")
  }

  console.log("user guesses so far is " + userGuesses);

  //connect variables to display
  document.getElementById("wins").innerHTML = ' Wins: ' + wins;

  document.getElementById("losses").innerHTML = ' Losses: ' + losses;

  document.getElementById("guesses-left").innerHTML = ' Guesses Left: ' + guessesLeft;

  document.getElementById("your-guess").innerHTML = ' Your Guesses So Far: ' + userGuesses;



};