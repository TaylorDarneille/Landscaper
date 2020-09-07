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
    has: true
  },
  team: {
    name: "team",
    cost: 500,
    revenue: 250,
    has: false
  }
}

//set active tool to be teeth
let tool = TOOLS.lawnmower;
//initialize day number and money to be zero
let money = 350;
let day = 0;




const showStatus = () => {
  console.log(tool)
  alert(`It is day ${day}. You have ${tool.name} to mow, and $${money}.`)
}

const askForAction = () => {
  showStatus();
  console.log(tool)
  const choice = prompt(`What do you want to do?`, `cut grass / buy tool`);
  if (choice) {
    if (choice.toLowerCase() === "cut grass") {
      cutGrass();
    } else if (choice.toLowerCase() === "buy tool") {
      buyTool();
    } else {
      alert(`Not a valid entry`)
    }
    //the else is if the user hits cancel, so no choice given
  } else {
    alert(`I guess you don't find this game very fun...I promise it is, keep going!`)
  }
}

const buyTool = () => {
  const toolToBuy = prompt(printToolList(), `scissors / pushmower / lawnmower / team`);
  if (!TOOLS[toolToBuy]) {
    alert(`Not a valid entry`);
  }
  else if (TOOLS[toolToBuy].has) {
    alert(`You already have ${toolToBuy}`);
    console.log(TOOLS)
  }
  // else if (TOOLS[toolToBuy].cost > money) {
  //   alert(`You don't have enough money. ${toolToBuy} costs $${TOOLS[toolToBuy].cost} and you have ${money}`)
  // }
  // else {
  //   alert(`You have bought ${toolToBuy}`);
  //   // set a flag saying user has bought the tool
  //   TOOLS[toolToBuy].has = true;
  //   // set active tool to be latest tool.
  //   tool = TOOLS[toolToBuy];
  //   //reduce wallet
  //   money -= tool.cost;
  // }
}

//cut grass adds a day and adds revenue depending on which tool you have
const cutGrass = () => {
  money += tool.revenue;
  day++;
  alert(`You have earned $${tool.revenue}`)

}

//this helper function builds up a string with the tools available and if you have them for not, to be used in the store.
const printToolList = () =>{
  let mystr = `Welcome to the store, you have $${money} to spend:\n`
  //fun fact, if you forget the 'let' it will pollute your global variable and take an hour of your life to track down
  for (let tool in TOOLS){
    mystr+= (`You do ${TOOLS[tool].has ? "" : "not "}have ${TOOLS[tool].name} it costs $${TOOLS[tool].cost}\n`)
  }
  mystr += `What do you want to buy?`
  return mystr;
}

// main game engine
while (day < 2) {
  askForAction();
}
