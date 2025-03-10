//declaimer variables
var location = 3;
var location = 4;
var location = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// game logic
while (isSunk == false) {
    guess = prompt("ready . Aim . Fire");

        if(guess < 0 || guess > 6){
            alert("please enter a valid cell number")
        } else{
            guesses = guesses + 1;
    
            if (guess == location1 || guess == location2 || guess == location3){
                hits = hits + 1;
                alert("Hit🤣")

                if (hits == 3) {
                    isSunk = true;
                    alert("you sunk my battleship❤️‍🔥")

                }
            }else {
            alert("Miss🥴")
        }
     }
}
var stats = "you sunk my battleship at: " + guesses + "guesses" + "and you accuracy is: " +(3/guesses);

alert(stats);