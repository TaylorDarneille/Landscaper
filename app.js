
let tool;
let money;
let value;
let day;

const start = () => {
  tool = "Your Teeth";
  value: 1;
  money = 0;
  day = 0;
  askForAction() //invoking function
}

const showStatus = () => {
  alert(`It is day ${day}. You have ${tool} to mow, and $${money}.`)
}

const askForAction = () => {
  showStatus();
  const choice = prompt("What do you want to do?","cut grass");
  if (choice === "cut grass"){
    cutGrass();
  }
}

const cutGrass = () => {
  money++
  day++
  askForAction();
}



start()
