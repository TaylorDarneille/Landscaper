// the tools object holds all the details about the available tools. To start, user only has teeth
const TOOLS = {
  teeth: {
    name: "Teeth",
    cost: 0,
    revenue: 1,
    has: true
  },
  scissors: {
    name: "Scissors",
    cost: 5,
    revenue: 5,
    has: false
  },
  pushmower: {
    name: "Pushmower",
    cost: 25,
    revenue: 50,
    has: false
  },
  lawnmower: {
    name: "Lawnmower",
    cost: 250,
    revenue: 100,
    has: false
  },
  team: {
    name: "Team",
    cost: 500,
    revenue: 250,
    has: false
  }
}

// INITIALIZATION OF STATE
//set active tool to be teeth
let tool = TOOLS.teeth;
//initialize day number and money to be zero
let money = 0;
let day = 0;

// DOM selectors
const status = document.querySelector('#status');
const cutgrassButton = document.querySelector('#grass');
const resetButton = document.querySelector('#reset');
const buyButton = document.querySelector('#buy');
const daynumber = document.querySelector('#daynumber');
const walletSpan = document.querySelector('#wallet');
const toolSpan = document.querySelector('#currentTool');
const progressBar = document.querySelector('#currentProgress')


// Reset function
const reset = () =>{
  alert(`You are resetting the game, you lost your $${money} and tools to garden gnomes and need to start anew`);
  // set all TOOLS[tool].has to false, except teeth
  resetTools();
  // reinitialize game state
  tool = TOOLS.teeth;
  day = 0
  money = 0;
  updateDom("");
}

// Called when user hits the "Buy Tool" button
const buyTool = () => {
  const toolToBuy = prompt(printToolList(), `scissors / pushmower / lawnmower / team`).toLowerCase();
  // user enters incorrect entry
  if (!TOOLS[toolToBuy]) {
    alert(`Not a valid entry.\nYou typed ${toolToBuy} and valid entries are: "scissors, pushmower, lawnmower, team"`);
  }
  // user already has this tool
  else if (TOOLS[toolToBuy].has) {
    alert(`You already have ${toolToBuy}`);
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
    let str = `You have bought ${TOOLS[toolToBuy].name} and now have $${money}`;
    updateDom(str);
  }
}


//cut grass adds a day and adds revenue depending on which tool you have
const cutGrass = () => {
  money += tool.revenue;
  day++;
  let str = `Day ${day}: Using ${tool.name}, you have earned $${tool.revenue} for a total of $${money}`;
  updateDom(str);
  checkWin();
}

// Check win condition.
const checkWin = ()=> {
  if (money>1000){
    let str =`Looks like you win after ${day} days`;
    status.innerText = str;
  }
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

// This helper function updates the DOM, it takes a string which is passed to status
const updateDom = (str) =>{
  walletSpan.innerText = money;
  daynumber.innerText = day;
  currentTool.innerText = tool.name;
  // fun progress bar to see how user is doing.
  progressBar.style.width = `${money/10}%`;
  status.innerText = str;
}


//Event Listeners
resetButton.addEventListener('click',reset);
cutgrassButton.addEventListener('click',cutGrass)
buyButton.addEventListener('click',buyTool)
