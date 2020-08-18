var daScorePlayer = document.querySelector('.daScore-Player');
var daScoreComputer = document.querySelector('.daScore-Computer');


function scoreKeeper(playRoundResult,daScorePlayer,daScoreComputer) {
    if(playRoundResult == "You Win!") {
        daScorePlayer.innerHTML += "X";
    }
    else if(playRoundResult == "You Lose!") {
        daScoreComputer.innerHTML += "X";
    }
}

var gameEnding = function gameEnding(p,c) {
    if(p.innerHTML == "XXX") {
        alert("You Fucking Win!!")
    }
    else if(c.innerHTML == "XXX") {
        alert("You Fucking Lost!!")
    }
}

var resetScoreKeeper = function resetScoreKeeper(daScorePlayer,daScoreComputer) {
    if(daScorePlayer.innerHTML == "XXX") {
        daScorePlayer.innerHTML = ""
        daScoreComputer.innerHTML="";
    }
    else if(daScoreComputer == "XXX") {
        daScoreComputer.innerHTML = "";
        daScorePlayer.innerHTML = "";
    }
}


function daGame() {

            var playRoundResult = playRound(computerChoice(), playerSelection());

            alert(playRoundResult);
           
            scoreKeeper(playRoundResult,daScorePlayer, daScoreComputer);

            gameEnding(daScorePlayer,daScoreComputer);

            resetScoreKeeper(daScorePlayer,daScoreComputer);

        }

        var playerSelection = function playerChoice() {
            let playerChoice = prompt('Rock, Paper, or Scissors silly?').toLowerCase();
            
            if(playerChoice == "rock") {
              return (playerChoice =  "rock");
            } else if(playerChoice== "paper") {
              return playerChoice = "paper";
            } else if(playerChoice == "scissors" ) {
              return playerChoice = "scissors";
            } else {
              alert("That's not a valid choice!");
            }
           
        };
        
        
        var computerChoices = ["Rock", "Paper", "Scissors"];
       

        var computerChoice = function computerPlay(){
            return computerChoices[Math.floor(Math.random()*3)];
        };
        
        function playRound(computerSelection, playerSelection){ 
           

            if(computerSelection == "Rock" && playerSelection == "rock") {
                return "That's a draw amigo!";
            }
            else if(computerSelection == "Paper" && playerSelection =="rock") {
                return "You Lose!";
            }
            else if(computerSelection == "Rock" && playerSelection =="paper") {
                return "You Win!";
            }
            else if(computerSelection == "Scissors" && playerSelection == "rock") {
                return "You Win!";
            }
            else if(computerSelection =="Rock" && playerSelection =="scissors") {
                return "You Lose!";
            }
            else if(computerSelection =="Scissors" && playerSelection =="paper") {
                return "You Lose!";
            }
            else if(computerSelection =="Paper" && playerSelection == "scissors") {
                return "You Win!";
            }
            else if(computerSelection == "Scissors" && playerSelection == "scissors") {
            return "That's a draw amigo!";
            }
            else if(computerSelection == "Paper" && playerSelection == "paper") {
                return "That's a draw amigo!";
            }
        }
    
        


           

        
        



    