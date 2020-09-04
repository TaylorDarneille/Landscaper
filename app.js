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
}

//Ask for service if you want you lawn cut
const  askForService = () => {
    lawnDollarAmount();
    const wantService = prompt("We cut grass with our teeth! Would you like to use our service?", "yes/no");
    if  (wantService === "Yes" || wantService === "yes") {
        buyService();
    } else if (wantService === "No" || wantService === "no") {
        alert ("Come back and see us next time.")
    }
} 

//cut grass for $1
const buyService = () => {
    alert("That would be $1 dollar please");
}
//Want it to prompt that how many lawns has been cut 
//Add another dollar for each lawn that has been cut