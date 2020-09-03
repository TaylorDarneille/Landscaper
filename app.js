
let tool;
let money;
let day;
const tools = {
  teeth: {name: "teeth", cost: 0, revenue:1, has: true },
  scissors: {name: "scissors", cost: 5, revenue: 5, has: false}
  }

const start = () => {
  tool = tools.teeth;
  money = 0;
  day = 0;
  askForAction() //invoking function
}

const showStatus = () => {
  alert(`It is day ${day}. You have ${tool.name} to mow, and $${money}.`)
}

const askForAction = () => {
  showStatus();
  const choice = prompt("What do you want to do?","cut grass / buy tool");
  if (choice){
    if (choice.toLowerCase() === "cut grass"){
      cutGrass();
    } else if (choice.toLowerCase() === "buy tool"){
      buyTool();
    } else{
      alert("Not a valid entry")
    }
  } else {
    alert("I guess you don't find this game very fun...")
  }
}
const buyTool = () =>{
  const toolToBuy = prompt("Which tool would you like to buy?","scissors");
  if(!tools[toolToBuy]){
    alert("Not a valid entry");
    askForAction();
  }
    else if (tools[toolToBuy].has){
    alert(`You already have ${toolToBuy}`);
    askForAction();
  } else if (tools[toolToBuy].cost>money){
    alert(`You don't have enough. ${toolToBuy} costs ${tools[toolToBuy].cost} and you have ${money}`)
    askForAction();
  } else {
    alert(`You have bought ${toolToBuy}`);
    tools[toolToBuy].has = true;
    tool = tools[toolToBuy];
    money -= tool.cost;
    askForAction();
  }
}
const cutGrass = () => {
  money += tool.revenue;
  day++;
  askForAction();
}



start()
