var user;
var computer;
var winner;
var choices = document.getElementsByClassName('choice')
var rps = ['Rock', 'Paper', 'Scissors']

function startGame(e) {
  user = e.target.id
  showUser()
  computer = rps[Math.floor(Math.random() * rps.length)];
  console.log(user)
  showComp()
  checkWin()
  winner = checkWin()
  console.log(winner)
  var showOutcome = document.getElementById('outcome')
  showOutcome.innerHTML = 'Results: ' + winner
  console.log("you chose " + user + "\nThe computer chose " + computer + "\nThe winner is " + winner)
}


for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch (err) {
    // To fix first error 
  }
}

function showUser() {
  var userChoice = document.getElementById('user_choice')
  userChoice.innerHTML = 'You Chose ' + user
}

function showComp() {
  var compChoice = document.getElementById('comp_choice')
  compChoice.innerHTML = 'The computer chose ' + computer
}

function checkWin() {
  if (user === computer) {
    return "Tie"
  } else if (user === "Paper" && computer === "Rock" || user === "Scissors" && computer === "Paper" || user === "Rock" && computer === "Scissors") {
    return "You won!"
  } else {
    return "You lose"
  }
}

var start = document.gitElementById('start')

