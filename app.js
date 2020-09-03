const landscaper = {
  userInput: 'null',
  money: 0,
  currentTool: 'teeth'
};

const tools = [
  {tool: 'scissors', price: 5},
  {tool: 'Old Lawn Mower' price: 25}
];

const start = () => {
  
};

const toolPrompt = () => {
  if (landscaper.money < 5) {
    alert('user can use teeth to cut grass');
    cutGrass();
  }
};

const cutGrass = () => {
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