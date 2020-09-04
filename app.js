//cut lawns and make $1 forever
let lawnsCut;
let money;

const start = () => {
    lawnsCut = 0;
    money= 0;
    askForAction(); //invoke function
};

const showStatus = () => {
    alert("You have cut " + lawnsCut + " lawns and have $" + money );
};

const askForAction= () => {
    showStatus();
    const choice = prompt(
        "Will you cut the lawn?",
        "Yes/No/Restart"
    );
    if (choice === "Yes"){
        cutLawns()
    }else if (choice === "No" || "Restart"){
        start();
    }
};


const cutLawns = () => {
    lawnsCut++;
    money += 1;
    askForAction();
}
start();
// askForScissors()