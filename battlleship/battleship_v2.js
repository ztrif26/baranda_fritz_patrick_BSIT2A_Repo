//declaimer variables
var randomLoc = Math.floor(math.random() *  5);

var location = ;
var location = + 1;
var location = + 2;

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
var accuracy = (guesses > 0 ? (hits / guesses) *100 : 0).toFixed(2);

var stats = "you took " + guesses + " guesses to sink the battleship! " + " \n" +  "Accuracy: " + accuracy + "%";

alert(stats);