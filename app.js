 let lawn;
 let dollar;
 
 //cut grass with teeth
const start = () => {
    dollar = 0;
    lawn = 0;
    askForService();
}
//prompt the amount for lawn and money that you have
const lawnDollarAmount = () => {
    alert("You cut " + lawn + " lawns and have $" + dollar + " dollars! Go cut some yards!");
    //Tired of cutting with teeth.  Much rather cut with scissors
    //scissorCutting();
    askForService();
}

//You would have to pay $5 for rusty scissors
const scissorCutting = () => {
    const choice = prompt("MMMMM I am tired of using my teeth. Do I have enough money to get some rusty scissors? It is only $5.", "yes/no");
    if (choice === "yes" || choice === "Yes" && money > 5) {
        alert("Thank Goodness I can cut this yard with scissors!");
        money -= 5;
        lawn++;
        lawnDollarAmount();
        
    } if (choice === "no" || choice === "No") {
        alert("I need to cut some more yards then");
        askForService();
    } if (choice === "yes" || choice === "Yes" && money < 5) {
        alert("Aw man! I dont have enough yet");
        lawnDollarAmount();
    }
}

//Ask for service if you want you lawn cut
const  askForService = () => {
    const choice = prompt("We cut grass with our teeth! Would you like to use our service?", "yes/no");
    if  (choice === "Yes" || choice === "yes") {
        buyService();
    } else if (choice === "No" || choice === "no") {
        alert ("Come back and see us next time.")
    }
    lawnDollarAmount();
} 

//cut grass for $1
const buyService = () => {
    alert("That would be $1 dollar please");
    //Want it to prompt that how many lawns has been cut 
    //Add another dollar for each lawn that has been cut
    dollar++;
    lawn++;
    lawnDollarAmount();
}

