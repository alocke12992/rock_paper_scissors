var user;
var computer;
var winner;
var user_wins = 0; 
var computer_wins; 

function startGame(e) {
  user = e.target.id
  var userChoice = document.getElementById('user_choice')
  userChoice.innerHTML = 'You Chose: ' + user 
  computerChoice();

  var compChoice = document.getElementById('comp_choice')
  compChoice.innerHTML = 'The computer chose ' + computer

  winner = checkWin();
  displayResults();
  var outcome = document.getElementById('outcome')
  outcome.innerHTML = 'Results: ' + winner
}

// function playLog() {
//   user_wins = 
// }


function checkWin() {
  if (user === "rock"){
    if (computer === "scissors") {
      return "you win";
    } else if (computer === "paper") {
      return "you lose"
    } else {
      return "it was a draw"
    }
  }

  else if (user === "scissors") {
    if (computer === "rock") {
      return "you lose";
    } else if (computer === "paper") {
        return "you win";
    } else {
      return "it was a draw"
    }
  }

  else if (user === "paper") {
    if (computer === "rock") {
      return "you win"
    } else if (computer === "scissors") {
      return "you lose"
    } else {
      return "It was a draw" 
    }
  }
} 

function win() {
  return "You win!"
  user_wins ++
}

function lose() {
  return "You lose"
  computer_wins ++ 
}

function draw() {
  return "It was a draw"
}

function displayResults() {
  console.log("you chose" + user + "\nThe computer chose" + computer + winner)
}

var choices = document.getElementsByClassName('choice')

function computerChoice() {
  var options = ['rock', 'paper', 'scissors']
  computer = options[Math.floor(Math.random() * options.length)];
  console.log(computer)
}

for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch (err) {
    //First load
  }
}

var start = document.getElementById('start')
start.addEventListener('click', function () {
  start.className = "hide"
  var game = document.getElementById('game')
  game.className = 'main_container'
});