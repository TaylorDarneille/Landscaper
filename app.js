
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



const askForAction = () => {
    showStatus(); //you have 0, work harder
    const userInput = prompt(
      "do you want to cut grass with your teeth? You can earn $1!"
    ); //option to work
    if (userInput === "yes") {
      bank = bank + 1; //or bank++   also adds 1
      daysOfWork = daysOfWork + 1;
      if (bank >= 5) {
        prompt("do you want to buy scissors for $5?");
        if (userInput === "yes") {
          bank = bank - 5;
          alert("HAVE FUN USING YOUR SCISSORS!");
        } else if (userInput === "no") {
          bank = bank
          prompt(
            "Have fun using your teeth, you have $" +
              bank +
              "left. Do you want to keep cutting grass with your teeth?"
          )
         return keepPlaying();
        }
        // if (userInput === "yes") {
        //   bank = bank + 1;
        //   daysOfWork = daysOfWork + 1;
        // } else if (userInput === "no") {
        //   bank = bank;
        //   alert("you have $" + bank); //notify player that they earned a dollar
        // }
      }
    } else if (userInput === "no") {
      alert("game over");
    }
    askForAction();
  };

const keepPlaying = () => {
    prompt("you have"+ bank + "do you want to keep playing?")
    {
        if (userInput === "yes") {
            bank = bank + 1;
            daysOfWork = daysOfWork + 1;
          } else if (userInput === "no") {
            alert("game over"); //notify player that they earned a dollar
          }
    }
}


start();

// function nextDay {
//     if 
// }



//  const dailyWork= () => {
//      askForAction();
//  }

// const askForUpgrade = ()=> {
//     for (let i=0; i>5; i++){
        
//      }
//     }


// const buyScissors = () => {
//     if (bank >= 5) {
//         alert("Do you want to buy scissors?")
//     } if (userInput==="yes") {
//         bank=bank-5
//     } else if(userInput==="no"){
//         alert("Have fun with your teeth")
//     }
//  }



// const askForAction2 = ()=> {
//     showStatus();const userInput = prompt("do you want to cut grass with your teeth? You can earn $1!")
//     if (userInput==="yes") { 
//        bank = bank+1 //or bank++   also adds 1
//        daysOfWork = daysOfWork+1 
//        alert("you have $" +bank) //notify player that they earned a dollar 
//     } else if (userInput==="no") {
//         alert("game over")
//     } else if(bank>=5){
//         alert("do you want scissors?")
//     }
// }


//for (let i=0; i>=)





//  const askForAction = ()=> {
//    showStatus();
//      const choice = prompt("do you want to cut grass with your teeth?");
//      if (choice==="yes") {
//          bank = bank+1
//      } else if (choice==="no"){
//          alert("game over")
//     }
// }




// const askForUpgrade = prompt("Do you want rusty scisccors for $5?")

// const upgrade = () => {
//     bank >= 5 {

//     