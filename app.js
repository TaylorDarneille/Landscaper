const landscaper = {
  name: '',
  money: 250,
  currentTool: 'teeth',
  hasUpgradedTeeth: true,
  hasUpgradedScissors: true,
  hasUpgradedOldLawnMower: false
};

const tools = [
  {tool: 'scissors', price: 5},
  {tool: 'Old Lawn Mower', price: 25},
  {tool: 'Battery-Powered Lawnmower', price: 100}
];

const start = () => {
  if(landscaper.name === '') {
    landscaper.name = prompt('What is your name?','Enter your name here');
  }
  toolPrompt();

};

const toolPrompt = () => {
  checkUpgrade();

  alert(`${landscaper.name}, you can use ${landscaper.currentTool} to cut grass`);
  cutGrassPrompt();
};

const checkUpgrade = () => {
  if(landscaper.money >= tools[0].price && (!landscaper.hasUpgradedTeeth)) {
    upgradeTool('scissors');
  }
  if(landscaper.money >= tools[1].price && (!landscaper.hasUpgradedScissors)) {
    upgradeTool('Old Lawn Mower');
  }
  if(landscaper.money >= tools[2].price && (!landscaper.hasUpgradedOldLawnMower)) {
    upgradeTool('Battery-Powered Lawnmower');
  }
}

const upgradeTool = (tool) => {
  if (tool === 'scissors') {
    //Change tool to scissors
    landscaper.currentTool = 'scissors';
    //Deduct price of the tool
    landscaper.money -= tools[0].price;
    //Make upgraded teeth true
    landscaper.hasUpgradedTeeth = true;
    alert('You bought scissors!');
  }
  if (tool === 'Old Lawn Mower') {
    //Change tool to scissors
    landscaper.currentTool = 'Old Lawn Mower';
    //Deduct price of the tool
    landscaper.money -= tools[1].price;
    //Make upgraded teeth true
    landscaper.hasUpgradedScissors = true;
    alert('You bought an Old Lawn Mower!');
  }
  if (tool === 'Battery-Powered Lawnmower') {
    //Change tool to scissors
    landscaper.currentTool = 'Battery-Powered Lawnmower';
    //Deduct price of the tool
    landscaper.money -= tools[2].price;
    //Make upgraded teeth true
    landscaper.hasUpgradedOldLawnMower = true;
    alert('You bought a Battery-Powered Lawnmower!');
  }
}

const cutGrassPrompt = () => {
  const input = prompt(`'Would you like to cut grass with your ${landscaper.currentTool}?`, 'Please enter: Yes or No');
  if(input === 'Yes') {
    cutGrass();
  } else {
    alert (Object.values(landscaper));
  }
}

const cutGrass = () => {
  if(landscaper.currentTool === 'teeth') {
    landscaper.money += 1;
  }
  if(landscaper.currentTool === 'scissors') {
    landscaper.money += 5;
  }
  if(landscaper.currentTool === 'Old Lawn Mower') {
    landscaper.money += 50;
  }
  if(landscaper.currentTool === 'Battery-Powered Lawnmower') {
    landscaper.money += 100;
    alert('You cut grass with Battery Powered Lawnmower');
  }
  start();
}

testVar = tools[0].price
console.log(!landscaper.hasUpgradedScissors);
start();

