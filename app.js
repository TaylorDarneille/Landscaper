
const greet =() => {
    alert("You are starting a landscaping business, but all you have are your teeth.")
};
greet();
//cut lawns and make $1 forever
let lawnsCut;
let money;
let tool;
// alert("You can cut the lawn with your teeth");
const start = () => {
    lawnsCut = 0;
    money= 0;
    tool= "teeth";
    askForAction(); //invoke function
};
//shows how many lawns have been cut and how much money is earned
const showStatus = () => {
    alert("You have cut " + lawnsCut + " lawns and have $" + money );
};
//what will the actions do?
const askForAction= () => {
    checkWinner();
    showStatus();
    if (money === 5 || money >= 25 || money >= 250 || money >= 500){
        storeTools();
    }
    // if (money === 5 && tool !== "rustyScissors"){
    //     askForScissors();
    // if(money === 25 && tool !== "oldMower"){
    //     askForOldMower();
    // }
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
const storeTools = () => {
    if (money === 5 && tool !== "rustyScissors"){
        askForScissors();
    } else if(money === 25 && tool !== "oldMower"){
        askForOldMower();
    } else if (money >= 250  && tool !== "newMower"){
        askForNewMower();
    } else if (money >= 500 && tool !== "starvingStudent"){
        askForStudent();
    }
}

//this functions has the tools
const cutLawns = () => {
    if (tool === "teeth"){
        eatLawns();
    } else if (tool === "rustyScissors"){
        cutWithScissors();
    }else if (tool === "oldMower"){
        cutWithOldMower();
    }else if (tool === "newMower"){
        cutWithNewMower();
    }
};
//adds lawn cut an $1
const eatLawns = () => {
    lawnsCut++;
    money += 1;
    askForAction();
};

//when No just show status
const beLazy = () => {
    askForAction();
};
//make the scissors add $5 for each lawn cut
const cutWithScissors = () => {
    lawnsCut++;
    money += 5;
    askForAction();
};
//make the mower add $50 per lawn cut
const cutWithOldMower = () => {
    lawnsCut++;
    money+= 50;
    askForAction();
};

//make the mower add $100 per lawn cut
const cutWithNewMower = () => {
    lawnsCut++;
    money+= 100;
    askForAction();
}

//ask if you want scissors
const askForScissors = () => {
    const wantScissors = prompt("Do you want to buy some rusty scissors for $5?", "Yes/No");
    if (wantScissors === "Yes"){
        money -= 5;
        tool = "rustyScissors";
        showStatus();
    } else if (wantScissors === "No") {
        askForAction();
    };
}
// ask if you want a mower
const askForOldMower = () => {
    const wantOldMower = prompt ("Do you want to buy an old-timey push lawnmower for $25?", "Yes/No");
    if (wantOldMower === "Yes"){
        money -= 25;
        tool = "oldMower";
        showStatus();
    }else if (wantOldMower === "No") {
        askForAction();
    };
}

const askForNewMower = () => {
    const wantNewMower = prompt ("Do you want to buy a fancy battery-powered lawnmower for $250?", "Yes/No");
    if (wantNewMower === "Yes") {
        money -= 250;
        tool = "newMower";
        showStatus();
    } else if (wantOldMower === "No") {
        askForAction();
    }
}

const askForStudent = () => {
    const wantStarvingStudent = prompt ("Do you want to hire some starving students for $500?", "Yes/No");
    if (wantStarvingStudent === "Yes") {
        money -= 500;
        tool = "starvingStudent";
        showStatus();
    }else if (wantStarvingStudent === "No") {
        askForAction();
    }
}
const checkWinner = () => {
    if (money === 1000){
        alert("You are a winner! Great job!");
    }
}
start();
