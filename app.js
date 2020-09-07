// the tools object holds all the details about the available tools. To start, user only has teeth
const TOOLS = {
  teeth: {
    name: "teeth",
    cost: 0,
    revenue: 1,
    has: true
  },
  scissors: {
    name: "scissors",
    cost: 5,
    revenue: 5,
    has: false
  },
  pushmower: {
    name: "pushmower",
    cost: 25,
    revenue: 50,
    has: false
  },
  lawnmower: {
    name: "lawnmower",
    cost: 250,
    revenue: 100,
    has: false
  },
  team: {
    name: "team",
    cost: 500,
    revenue: 250,
    has: false
  }
}

//set active tool to be teeth
let tool = TOOLS.teeth;
//initialize day number and money to be zero
let money = 0;
let day = 0;


// Function which prints current status of the game
const showStatus = () => {
  console.log(tool)
  alert(`It is day ${day}. You have ${tool.name} to mow, and $${money}.`)
}


// Function which handles user input to move the game along
const askForAction = () => {
  showStatus();
  // Get choice from the user
  const choice = prompt(`What do you want to do?`, `cut grass / buy tool / reset`);
  if (choice) {
    if (choice.toLowerCase() === `cut grass`) {
      cutGrass();
    } else if (choice.toLowerCase() === `buy tool`) {
      buyTool();
    } else if (choice.toLowerCase() === `reset`){
      reset();
    } else {
      alert(`Not a valid entry`)
    }
    //the user hits cancel, so no choice given
  } else {
   alert(`I guess you don't find this game very fun...I promise it is, keep going!`)
  }
}

const reset = () =>{
  alert(`You are resetting the game, you lost your $${money} to garden gnomes and need to start anew`);
  // set all TOOLS[tool].has to false, except teeth
  resetTools();
  // reinitialize game state
  tool = TOOLS.teeth;
  day = 0
  money = 0;
}


const buyTool = () => {
  const toolToBuy = prompt(printToolList(), `scissors / pushmower / lawnmower / team`);
  // user enters incorrect entry
  if (!TOOLS[toolToBuy]) {
    alert(`Not a valid entry.\nYou typed ${toolToBuy} and valid entries are: "scissors, pushmower, lawnmower, team"`);
  }
  // user already has this tool
  else if (TOOLS[toolToBuy].has) {
    alert(`You already have ${toolToBuy}`);
    console.log(TOOLS)
  }
  // user has insufficient funds
  else if (TOOLS[toolToBuy].cost > money) {
    alert(`You don't have enough money.\n${toolToBuy} costs $${TOOLS[toolToBuy].cost} and you have $${money}`)
  }
  else {
    // set a flag that user has bought the tool
    TOOLS[toolToBuy].has = true;
    // set active tool to be latest tool.
    tool = TOOLS[toolToBuy];
    //reduce wallet
    money -= tool.cost;
    alert(`You have bought ${toolToBuy} and now have ${money}`);
  }
}


//cut grass adds a day and adds revenue depending on which tool you have
const cutGrass = () => {
  money += tool.revenue;
  day++;
  alert(`You have earned $${tool.revenue} for a total of $${money}`)

}


//this helper function builds up a string with the tools available and if you have them for not, to be used in the store.
const printToolList = () =>{
  let mystr = `Welcome to the store, you have $${money} to spend:\n\n`
  //fun fact, if you forget the 'let' it will pollute your global variable and take an hour of your life to track down
  for (let tool in TOOLS){
    mystr+= (`You do ${TOOLS[tool].has ? "" : "not "}have ${TOOLS[tool].name}, it costs $${TOOLS[tool].cost}\n`)
  }
  mystr += `\nWhat do you want to buy?`
  return mystr;
}


//this helper function resets the status of all tools to false (i.e. user only has teeth)
const resetTools = () =>{
  for (let tool in TOOLS){
    if(TOOLS[tool].name !== "teeth"){
      TOOLS[tool].has = false;
    }
  }
}


// main game engine
while (money < 1000) {
  askForAction();
}
//Win scenario
alert(`Congratulations, you have built a successful landscaping empire after ${day} days.\nNow go outside and cut my lawn!`)
