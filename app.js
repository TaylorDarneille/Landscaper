const greet = () => {
    alert(
        "You are starting a landscaping business, but all you have are your teeth"
        );
};

greet();

let tool;
let lawnsCut;
let money;
let toolBox = [];

const start = () => {
    lawnsCut = 0
    money = 0
    tools = "teeth";
    askForAction();
};

const showStatus = () => {
    alert("You have cut " + lawnsCut + " lawns and have $" + money );
};

const askForAction = () => {
    if(money === 1000){
        alert("You are a winner!");
    } else {
        showStatus();
        if (money === 5 || money >= 25 || money >=250 || money >= 500){
            toolStore();
        }
        const choice = prompt("Will you cut the lawn?", "Yes/No/Restart");
        if(choice === "Yes" || choice === "yes"){
            cutLawns()
        } else if (choice === "No" || choice === "no"){
            layDown()
        } else if (choice === "Restart" || choice === "restart"){
            alert("Better luck next time!")
            start();
        }
    }
};    

const toolStore = () => {
    if(money === 5 && toolBox.includes("rustyScissors") === false){
        askForScissors();
    } else if (money === 25 && toolBox.includes("oldMower") === false){
        askForOldMower();
    } else if (money >= 250 && toolBox.includes("newMower")=== false){
        askForNewMower();
    } else if (money >= 500 && toolBox.includes("starvingStudents")=== false){
        askForStudents();
    }
};

const cutLawns = () => {
    if (tool === "teeth"){
        eatLawns();
    } else if (tool === "rustyScissors"){
        cutWithScissors();
    } else if (tool === "oldMower"){
        cutWithOldMower();
    } else if (tool === "newMower"){
        cutWithNewMower(); 
    } else if (tool === "starvingStudents"){
        cutWithStudents();
    }
};

const eatLawns = () => {
    lawnsCut++;
    money += 1;
    askForAction();
};

const layDown = () => {
    askForAction();
};

const cutWithScissors = () => {
    lawnsCut++;
    money += 5;
    askForAction();
};

const cutWithOldMower = () => {
    lawnsCut++;
    money += 100;
    askForAction();
};

const cutWithNewMower = () => {
    lawnsCut++;
    money += 100;
    askForAction();
};

const cutWithStudents = () => {
    lawnsCut++;
    money += 250;
    askForAction();
};

const askForScissors = () => {
    const wantScissors = prompt(
        "Do you want to buy some rusty scissors for $5?", "Yes/No"
    );
    if (wantScissors === "Yes" || wantScissors === "yes"){
        money -=5;
        tool = "rustyScissors";
        toolBox.push("rustyScissors");
    } else if (wantScissors === "No" || wantScissors === "no"){
        askForAction();
    }
};

const askForOldMower = () => {
    const wantOldMower = prompt("Do you want to buy and old push lawnmower for $25?", "Yes/No")
    if (wantOldMower === "Yes"|| wantOldMower === "yes"){
        money -=25;
        tool = "oldMower";
        toolBox.push("oldMower")
        showStatus();
    } else if(wantOldMower === "No" || wantOldMower === "no"){
        askForAction();
    }
};

const askForNewMower = () => {
    const wantNewMower = prompt("Do you want to buy a new mower for $250?", "Yes/No");
    if (wantNewMower === "Yes" || wantNewMower === "yes"){
        money -= 250;
        tool = "newMower";
        toolBox.push("newMower")
        showStatus();
    } else if(wantNewMower === "No" || wantNewMower === "no"){
        askForAction();
    }
};

const askForStudents = () => {
    const wantStarvingStudents = prompt("Do you want to hire some starving students for $500?", "Yes/No");
    if (wantStarvingStudents === "Yes" || wantStarvingStudents === "yes"){
        money -= 500;
        tool = "starvingStudents";
        toolBox.push("starvingStudents")
        showStatus();
    }else if( wantStarvingStudents === "No" || wantStarvingStudents === "no"){
        askForAction();
    }
};

start();