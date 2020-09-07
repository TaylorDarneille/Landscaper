let dollar;
let scissors;
let pushmower;
let powermower;
let team;

//cut grass with teeth
const start = () => {
    dollar = 0;
    scissors = 0;
    pushmower = 0;
    powermower = 0;
    team = 0;
    alert("Landscaper game! Obj to win you must have a team and $1000 to win! ")
    askForService();
}
//prompt the amount for lawn and money that you have
const myAccount = () => {
    alert("Right now you have $" +dollar+"! You better get to cutting!");
    //Tired of cutting with teeth.  Much rather cut with scissors
    //scissorCutting();
    askForService();
}

//You would have to pay $5 for rusty scissors
const goToStore = () => {
    const choice = prompt("Welcome to Lowes! What would you like?", "scissors, push mower, powermower, a team or nothing");
    if ((choice === "scissors" || choice === "Scissors") && dollar >= 5) {
        alert("That would be $5");
        scissors++;
        dollar -= 5;
        myAccount();
    } else if ((choice === "scissors" || choice === "Scissors") && dollar < 5) {
        alert("You do not have enough for scissors");
        goToStore();
        //buy pushmower
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar >= 25) {
        alert("That would be $25");
        scissors++;
        dollar -= 25;
        myAccount();
    } else if ((choice === "pushmower" || choice === "Pushmower") && dollar < 25) {
        alert("You do not have enough for pushmower");
        goToStore();
        //buy powermower
    } else if ((choice === "powermower" || choice === "Powermower") && dollar > 5) {
        alert("That would be $250");
        scissors++;
        dollar -= 250;
        myAccount();
    } else if ((choice === "powermower" || choice === "Powermower") && dollar < 5) {
        alert("You do not have enough for powermower");
        goToStore();
    } else if ((choice === "team" || choice === "Team") && dollar > 5) {
        alert("That would be $5");
        scissors++;
        dollar -= 5;
        myAccount();
    } else if ((choice === "team" || choice === "Team") && dollar < 5) {
        alert("You do not have enough for team");
        goToStore();
    } else if (choice === "nothing" || choice === "Nothing") {
        alert("Well have a nice day!");
        myAccount();
    }
        
}




//Ask for service if you want you lawn cut
const  askForService = () => {
    //myAccount();
    const choice = prompt("We cut grass! Would you like to use our service?", "yes/no");
    if  (choice === "Yes" || choice === "yes") {
        buyService();
    } else if (choice === "No" || choice === "no") {
        alert ("Come back and see us next time.")
    }
} 

const buyService = () => {
    const choice = prompt("What service would you like?", "$1 teeth, $5 scissors, $25 push mower, or $100 power mower, or nothing");
    if (choice === "teeth" || choice === "teeth") {
        alert("That would be $1 dollar please");
        //cut grass for $1
        dollar++;
        //ask for scissors $5
    } else if ((choice === "scissors" || choice === "Scissors") && scissors >= 1) {
        alert("Ok! That would be $5");
        dollar += 5;
    } else if ((choice === "scissors" || choice === "Scissors") && scissors < 1) {// if user even has item
        alert("It looks like i need to go to the store")
        goToStore();
        //ask for pushmower $25
    } else if ((choice === "pushmower" || choice === "Pushmower") && pushmower >= 1) {
        alert("Great! That would be $25");
        dollar += $25;
    } else if ((choice === "pushmower" || choice === "Pushmower") && pushmower < 1) {
        alert("It looks like i need to go to the store")
        goToStore();
        //ask for powermower $100
    } else if ((choice === "powermower" || choice === "Powermower") && powermower >= 1) {
        alert("Great! That would be $100")
        dollar += 100;
    } else if ((choice === "powermower" || choice === "Powermower") && powermower < 1) {
        alert("Lemme head to Lowes real quick!")
        goToStore();
        //ask for team $250
    } else if ((choice === "team" || choice === "Team") && team >= 1) {
        alert("Great! That would be $250")
        dollar += 250;
    } else if ((choice === "team" || choice === "Team") && team > 1) {
        alert("I dont have a team... Lemme go find one that can help me")
        goToStore();
    } else if (choice === "nothing" || choice === "Nothing") {
        alert("Well have a nice day!")
        myAccount();
    }
    
    
    
    
    myAccount();
}

