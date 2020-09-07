let lawn;
let dollar;
let scissors;
let pushmower;
let powermower;
let team;

//cut grass with teeth
const start = () => {
    dollar = 0;
    lawn = 0;
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
    const choice = prompt("Welcome to Lowes! What would you like?", "scissors, push mower, power mower, or nothing");
    if ((choice === "scissors" || choice === "Scissors") && dollar > 5) {
        alert("That would be $5");
        scissors++;
        dollar -= 5;
        myAccount();
        
    } else if ((choice === "scissors" || choice === "Scissors" )&& dollar < 5) {
        alert("You do not have enough for scissors");
        goToStore();
    } if (choice === "yes" || choice === "Yes" && dollar < 5) {
        alert("Aw man! You do not have enough yet");
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

//cut grass for $1
const buyService = () => {
   const choice = prompt("What service would you like?", "$1 teeth, $5 scissors, $25 push mower, or $100 power mower");
    if (choice === "teeth" || choice === "teeth") {
        alert("That would be $1 dollar please");
    } else if ((choice === "scissors" || choice === "Scissors") && scissors >= 1) {
        alert("Ok! That would be $5");
    } else if ((choice === "scissors" || choice === "Scissors") && scissors < 1) {
        alert("It looks like i need to go to the store")
        goToStore();
    }
    //Want it to prompt that how many lawns has been cut 
    //Add another dollar for each lawn that has been cut
    dollar++;
    lawn++;
    
    myAccount();
}

