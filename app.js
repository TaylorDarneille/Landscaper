let lawn;
let dollar;
let scissors;
let pushmower;
let powermower;
let team;

//Cut grass with teeth
const start = () => {
   dollar = 0;
   lawn = 0;
   rustyscissors = 0;
   pushmower = 0;
   powermower = 0;
   team = 0;
   alert("Object of the game: Need to have a team and $1000 to win!")
   askForService();
}

//Prompt the amount for how many lawns and how much money that you have, then ask to start service after
const myAccount = () => {
    alert("You cut " + lawn + " lawns and have $" + dollar + " dollars!");
    askForService();
 }

//Asking for whether you would like to have your lawn cut ot not, and end game if you say no, otherwise ask
//which service you want
const askForService = () => {
    const choice = prompt("These teeth are sharp AF, you want your grass cut?", "Yes/No");
    if  (choice === "Yes" || choice === "yes") {
        buyService();
    } else if (choice === "No" || choice === "no") {
        alert ("Fine! We'll take these teeth elsewhere!")
    }
 } 

//Scissors cost $5, Pushmower cost $25 there's other choices but the point is to have prompts if you do or don't have enough money
const goToStore = () => {
    const choice = prompt("What do you want?", "Rusty Scissors, Push Mower, Power Mower, my team, or nothing");
    if ((choice === "scissors" || choice === "Scissors") && dollar >= 5) {
        alert("These cost $5");
        scissors++;
        dollar -= 5;
        myAccount();
    } else if ((choice === "scissors" || choice === "Scissors" )&& dollar < 5) {
        alert("You do not have enough for scissors, try something else!");
        goToStore();
        //Buy pushmower 
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar >= 25) {
        alert("That would be $25");
        scissors++;
        dollar -= 25;
        myAccount();
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar < 25) {
        alert("You don't have enough for this pushmower you lazy bum!");
        goToStore();
    }
}

//The point is to see if you have enough money for things other than teeth. Scissors and push mower now available
const buyService = () => {
    const choice = prompt("What service would you like?", "$1 teeth, $5 rusty scissors, $25 push mower, or $100 power mower");
    if (choice === "Teeth" || choice === "teeth") {
        alert("Them teeths cost $1");
        dollar +=1;
        lawn +=1;
    } else if ((choice === "scissors" || choice === "Scissors") && scissors >= 1) {
        alert("That would be $5");
        dollar +=5;
        lawn +=1;
    } else if ((choice === "scissors" || choice === "Scissors") && scissors < 1) {
        alert("I guess I need to go to the store!")
        goToStore();
    } 
    myAccount();
}
