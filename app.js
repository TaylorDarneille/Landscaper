// the tools object holds all the details about the available tools. To start, user only has teeth
const TOOLS = {
  teeth: {name: "teeth", cost: 0, revenue:1, has: true },
  scissors: {name: "scissors", cost: 5, revenue: 5, has: false},
  pushmower: {name: "pushmower", cost: 25, revenue: 50, has: false}
  }

//set active tool to be teeth
let tool = TOOLS.teeth;
//initialize day number and money
let money = 50;
let day = 0 ;




const showStatus = () => {
  alert(`It is day ${day}. You have ${tool.name} to mow, and $${money}.`)
}

const askForAction = () => {
  showStatus();
  const choice = prompt(`What do you want to do?`,`cut grass / buy tool`);
  if (choice){
    if (choice.toLowerCase() === "cut grass"){
      cutGrass();
    } else if (choice.toLowerCase() === "buy tool"){
      buyTool();
    } else{
      alert(`Not a valid entry`)
    }
    //the else is if the user hits cancel, so no choice given
  } else {
    alert(`I guess you don't find this game very fun...I promise it is, keep going!`)
  }
}

const buyTool = () =>{
  const toolToBuy = prompt(`Which tool would you like to buy?`,`scissors / pushmower`);
  if(!TOOLS[toolToBuy]){
    alert(`Not a valid entry`);
    }
    else if (TOOLS[toolToBuy].has){
    alert(`You already have ${toolToBuy}`);

  } else if (TOOLS[toolToBuy].cost>money){
    alert(`You don't have enough. ${toolToBuy} costs ${TOOLS[toolToBuy].cost} and you have ${money}`)

  } else {
    alert(`You have bought ${toolToBuy}`);
    TOOLS[toolToBuy].has = true;
    tool = TOOLS[toolToBuy];
    money -= tool.cost;

  }
}

//cut grass adds a day and adds revenue depending on which tool you have
const cutGrass = () => {
  money += tool.revenue;
  day++;
  alert(`You have earned ${tool.revenue}`)

}


// main game engine
while (money<1000){
  askForAction();
}
