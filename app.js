const landscaper = {
  name: '',
  userInput: 'null',
  money: 0,
  currentTool: 'teeth'
};

const tools = [
  {tool: 'scissors', price: 5},
  {tool: 'Old Lawn Mower', price: 25}
];

const start = () => {
  landscaper.name = prompt('What is your name?','Enter your name here');
  toolPrompt();
};

const toolPrompt = () => {
  if (landscaper.money < 5) {
    alert(`${landscaper.name}, you can use teeth to cut grass`);
    cutGrassPrompt();
  }
};

const cutGrassPrompt = () => {
  const input = prompt(`'Would you like to cut grass with your ${landscaper.currentTool}?`, 'Please enter: Yes or No');
  if(input === 'Yes') {
    cutGrass();
  } else {
    return;
  }
}

const cutGrass = () => {
  alert('Cut Grass Ran');
  if(landscaper.currentTool === 'teeth') {
    landscaper.money += 1;
  }
  if(landscaper.currentTool === 'scissors') {
    landscaper.money += 5;
  }
  if(landscaper.currentTool === 'Old Lawn Mower') {
    landscaper.money += 25;
  }
}

console.log();
start();