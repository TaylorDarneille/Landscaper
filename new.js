console.log("hello")
const greet = () => {
    alert("welcome to my game")
};


//global variables 
let bank; 
let daysOfWork;
let teeth;
let userTools = [];


//array of objects, tools available, prices and daily earning.
const tools = [
    {name: "teeth", price: null, dailyEarnings:1 },
    {name: "rusty scissors", price: 5, dailyEarnings: 5},
    {name: "lawnmower", price: 25, dailyEarnings:50},
    {name: "eMower", price:250, dailyEarnings:100},
    {name:"starvinStudents", price:500, dailyEarnings:250}
];



const start = () => {
    bank = 0;
    daysOfWork =0;
    askForAction();
}

const showStatus = () => {
    alert ("You Have $" + bank + " work harder");
}   //shows status of the player

const askForAction = ()=> {
    showStatus(); //you have 0, work harder
    const userInput = prompt("do you want to cut grass with your teeth? You can earn $1!") //option to work
    if (userInput==="yes") {
    bank = bank+1 //or bank++ also adds 1
    daysOfWork = daysOfWork+1
    if (bank >= 5) {
    prompt("do you want to buy scissors for $5?")
    
    if (userInput==="yes") {
    bank= bank-5
    prompt("Have fun using your scissors, you have $" + bank + "left. Do you want to keep cutting grass with your scissors?");
   // keepPlaying();
    } else if (userInput==="no") {
    bank= bank
    prompt("Have fun using your teeth, you have $" + bank + "left. Do you want to keep cutting grass with your teeth?");
    //keepPlaying();
    } else {
    bank= bank
    prompt("Bad Input. Have fun using your teeth, you have $" + bank + "left. Do you want to keep cutting grass with your teeth?")
    //keepPlaying()
    }
   // else {
    //keepPlaying()}
    }
    
    else if (userInput==="no") {
    alert("game over")
    } askForAction();
    }
}
start();