//All the tools/currencies that will be used in the game
let lawn;
let dollar;
let rustyscissors;
let pushmower;
let powermower;
let team;

//Starting values for all the currencies used in the game
const start = () => {
   dollar = 0;
   lawn = 0;
   rustyscissors = 0;
   pushmower = 0;
   powermower = 0;
   team = 0;
   alert("Object of the game: Need to have a team and $1000 to win!");
   askForService();
}

//Prompt the amount for how many lawns and how much money that you have, then ask to start service after
const myAccount = () => {
    alert("You cut " + lawn + " lawns and have $" + dollar + " dollars!");
    askForService();
    } //Win scenario 
    if (dollar >= 1000 && team >= 1) {
        alert("You win! You still can't pay rent with $1000 that you still have to split with your team!")
    } else if (dollar < 1000 && team <1) {
        alert("Right now you have $" + dollar + "! You better work!");
        askForService();
    }


//Asking for whether you would like to have your lawn cut ot not, and end game if you say no, otherwise ask
//which service you want
const askForService = () => {
    let choice = prompt("These teeth are sharp AF, you want your grass cut?", "Yes/No");
    if  (choice === "Yes" || choice === "yes") {
        buyService();
    } else if (choice === "No" || choice === "no") {
        alert ("Fine! We'll take these teeth elsewhere!")
    }
 } 

//Scissors cost $5, Pushmower cost $25 there's other choices but the point is to have prompts if you do or don't have enough money
const goToStore = () => {
    let choice = prompt("What tools would you like to buy?", "$5 Scissors, $25 Pushmower, $250 Powermower, a $500 team, or nothing?");
    if ((choice === "scissors" || choice === "Scissors") && dollar >= 5) {
        alert("These nasty ass scissors cost $5");
        rustyscissors++;
        dollar -= 5;
        myAccount();
    } else if ((choice === "scissors" || choice === "Scissors" )&& dollar < 5) {
        alert("You do not have enough for scissors, try something else!");
        goToStore();
        //Buy pushmower 
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar >= 25) {
        alert("That would be $25");
        pushmower++;
        dollar -= 25;
        myAccount();
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar < 25) {
        alert("You don't have enough for this pushmower you lazy bum!");
        goToStore();
        //Buy powermower
    } else if ((choice === "powermower" || choice === "Powermower") && dollar >= 250) {
        alert("That would be $250");
        powermower++;
        dollar -= 250;
        myAccount();
    } else if ((choice === "powermower" || choice === "Powermower") && dollar < 250) {
        alert("This too fancy for you, try Sears.");
        goToStore();
        //Buy team
    } else if ((choice === "team" || choice === "Team") && dollar >= 500) {
        alert("That would be $500");
        team++;
        dollar -= 500;
        myAccount();
    } else if ((choice === "team" || choice === "Team") && dollar < 500) {
        alert("You're too much of a loser to have a team, try again later!");
        goToStore();
        //Nothing scenario
    } else if (choice === "nothing" || choice === "Nothing") {
        alert("Well what are you doing here then?!");
        myAccount();
    }   
   myAccount();
}

//The point is to see if you have enough money for things other than teeth. Scissors and push mower, power mower, and team now available
const buyService = () => {
    let choice = prompt("What service would you like?", "$1 teeth, $5 scissors, $25 pushmower, $100 powermower, or nothing!");
    if (choice === "Teeth" || choice === "teeth") {
        alert("Them teeths cost $1");
        dollar +=1;
        lawn +=1;
        //Something was going wrong here at first, couldn't figure it out but later I did.
        //Found the culprit!!! I was putting in scissors and not rustyscissors, my bad
    } else if ((choice === "scissors" || choice === "Scissors") && rustyscissors >= 1) {
        alert("That would be $5");
        dollar +=5;
        lawn +=1;
        myAccount();
    } else if ((choice === "scissors" || choice === "Scissors") && rustyscissors < 1) {
        alert("I guess I need to go to the store for some scissors!")
        goToStore();
    } else if ((choice === "Pushmower" || choice === "pushmower") && pushmower >= 1) {
        alert("That would be $25");
        dollar +=25;
        lawn +=1;
    } else if ((choice === "Pushmower" || choice === "pushmower") && pushmower < 1) {
        alert("I guess I need to go to the store for a push lawnmower!")
        goToStore();
    } else if ((choice === "Powermower" || choice === "powermower") && powermower >= 1) {
        alert("That would be $25");
        dollar +=100;
        lawn +=1;
    } else if ((choice === "Pushmower" || choice === "powermower") && powermower < 1) {
        alert("I guess I need to go to the store for a power lawnmower!")
        goToStore();
    } else if ((choice === "team" || choice === "Team") && team >= 1) {
        alert("Ok! That would be $250!")
        dollar += 250;
        lawn +=1;
    } else if ((choice === "team" || choice === "Team") && team < 1) {
        alert("Uhhh, hold on a sec.")
        goToStore();
    } else if (choice === "nothing" || choice === "Nothing") {
        alert("Don't be wastin my time!")
        myAccount();
    }
    myAccount();
}

//I'd attempt the extras, but I had a hard enough time implementing the regular game.. I'll try that another day!