
const greet =() => {
    alert("You are starting a landscaping business, but all you have are your teeth.")
};
greet();
//cut lawns and make $1 forever
let lawnsCut;
let money;

// alert("You can cut the lawn with your teeth");
const start = () => {
    lawnsCut = 0;
    money= 0;
    askForAction(); //invoke function
};
//shows how many lawns have been cut and how much money is earned
const showStatus = () => {
    alert("You have cut " + lawnsCut + " lawns and have $" + money );
};
//what will the actions do?
const askForAction= () => {
    showStatus();
    if (money === 5){
        askForScissors();
    }
    const choice = prompt(
        "Will you cut the lawn?",
        "Yes/No/Restart"
    );
    if (choice === "Yes"){
        cutLawns()
    }else if (choice === "No"){
        beLazy()
    } else if (choice === "Restart") {
        alert("Better luck next time!")
        start();
    }
};


//adds lawn cut an $1
const cutLawns = () => {
    lawnsCut++;
    money += 1;
    askForAction();
};

//when No just show status
const beLazy = () => {
    askForAction();
};
//use the scissors


//ask if you want scissors
const askForScissors = () =>{
    const wantScissors = prompt("Do you want to buy some rusty scissors for $5?", "Yes/No");
    if (wantScissors === "Yes"){
        money -= 5
        showStatus();
    } else if (wantScissors === "No") {
        askForAction();
    };
}
start();
