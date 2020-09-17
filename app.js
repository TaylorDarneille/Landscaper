
const greet = () => {
  alert("Welcome to Lanscaper! You are working through summer using your teeth!");
};

greet ()

//Global variables
let lawnsCut;
let money;
let tool;
let toolBox = []; //array to store tools

//start function
const start = () => {
  lawnsCut = 0;
  money = 0;
  tool = 0;
  tool = "teeth";
  askForAction();
};

//gives status of lawns cut and money earned
const showStatus = () => {
  alert(`You have cut ${lawnsCut} lawns and have $${money}`);
};


//actions to handle each event

const askForAction = () => {
  if (money === 1000) {//ends the game 
    alert("You are the winner!!!");
  } else {
    showStatus();
    //nested if - chech money to purchase tool
    if(money === 5 || money >= 25 || money >= 500){
      toolStore();
    }

    const choice = prompt("Will you cut the lawn?", "Yes/No/Restart")

    if (choice === "Yes" || choice === "yes"){
      cutlawns();
  } else if (choice === "No" || choice === "no") {
    dayOff();
    } else if (choice === "Restart" || choice === "restart") {
      alert("Bummer! Better luck next time");
      start();
    }
  }
};


const toolStore = () => {
  //check if money is $5 and toolbox doesnt have rusty scissors
  if (money === 5 && toolBox.includes("rustyScissors") === false) {
    askForScissors();
  } else if (money === 25 && toolBox.includes('oldmower') === false) {
    askForOldMower();
  } else if (money >= 250 && !toolBox.includes('newMower')) {
    askForNewMower();
  } else if (money >=500 && !toolBox.includes('starvingStudents')) {
   askForStudent();
  }
};


//checks tools 
const cutlawns = () => {
  if(tool === "teeth") {
    eatLawns();
  } else if (tool==="rustyScissors"){
    cutWithScissors();
  } else if( tool === "oldMower"){
    cutWithOldMower();
  }else if( tool === "newMower"){
    cutWithNewMower();
  }else if( tool === "starvingStudents"){
    cutWithStudents();
  }
};


//makes $1 per lawn
const eatLawns = () => {
  lawnsCut++;
  money += 1;
  askForAction();
};

const cutWithScissors = () => {
  lawnsCut++;
  money += 5;
  askForAction();
};


const cutWithOldMower = () => {
  lawnsCut++;
  money += 50;
  askForAction();
};


const cutWithNewMower = () => {
  lawnsCut++;
  money += 100;
  askForAction();
};


const cutWithStudents = () => {
  lawnsCut++;
  money += 500;
  askForAction();
};



//ask for scissors
const askForScissors = () => {
  const wantScissors = prompt("Want to buy some rusty scissors for $5?", "Yes/No");
  if (wantScissors === "Yes" || wantScissors === "yes") {
    money -= 5; //if yes subtract $5
    tool = "rustyScissors";
    toolBox.push("rustyScissors");//puts in tool box makes new tool
    showStatus();
  } else if (wantScissors === "No" || wantScissors === "no") {
  askForAction();
  }
};

//ask for old mower
const askForOldMower = () => {
  const wantOldMower = prompt("Want to buy an old lawnmower for for $25?", "Yes/No");
  if (wantOldMower === "Yes" || wantOldMower === "yes") {
    money -= 25; //if yes subtract $5
    tool = "oldMower";
    toolBox.push("oldMower");//puts in tool box makes new tool
  } else if (wantOldMower === "No" || wantOldMower === "no") {
    showStatus();
  } else if (wantOldMower === "No" || wantOldMower === "no") {
    askForAction();
  }
};


//ask for newmower
const askForNewMower = () => {
  const wantNewMower = prompt("Want to buy a New lawnmower that runs on battery for $250?", "Yes/No");
  if (wantNewMower === "Yes" || wantNewMower === "yes") {
    money -= 250; //if yes subtract $250
    tool = "newMower";
    toolBox.push("newMower");//puts in tool box makes new tool
    showStatus();
  } else if (wantNewMower === "No" || wantNewMower === "no") {
    askForAction();
  }
};

//ask for student
// ask if you want student
const askForStudent = () => {
  const wantStudent = prompt("do you want to buy a student", "Yes/No");
  if (wantStudent === "Yes" || wantStudent === "yes") {
    money -= 500;
    tool = "starvingStudents";
    toolBox.push("starvingStudents");
    showStatus();
  } else if (wantStudent === "No" || wantStudent === "no") {
    askForAction();
  }
};


const dayOff = () =>{
  askForAction();
};

start();