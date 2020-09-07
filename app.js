
const greet = () => {
    alert("welcome to my game")
};



let bank = 0
let daysOfWork = 0

//global variables 
let teeth;
let wallet;
let countingDays;
let userTools = [];


//array of objects, tools available, prices and daily earning.
const tools = [
    { name: "teeth", price: null, dailyEarnings:1 },
    {name: "rusty scissors", price: 5, dailyEarnings: 5},
    {name: "lawnmower", price: 25, dailyEarnings:50},
    {   }
];



const start = () => {
    money = 0;
    lawsCut=0;
    askForAction();
}


const showStatus = () => {
    alert ("You Have $") + money + " and have to cut" + lawscut);
}

const askForAction = ()=> {
    showStatus();
}

const userInput = prompt("do you want to cut grass with your teeth?")
 if (userInput==="yes") { 
    bank = bank+1 //or bank++   also adds 1
 } else if (userInput==="no") {
     alert("game over")
 }

