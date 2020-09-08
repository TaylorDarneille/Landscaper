
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
    const userInput = prompt("do you want to cut grass with your teeth? You can earn $1!", "yes or no"); //option to work
    if (userInput === "yes") {
      bank = bank + 1; //or bank++   also adds 1
      daysOfWork = daysOfWork + 1;}
      if (bank >= 5) {
          askForUpgrade(); }
          //run this until this condition is met. //I think insteaf of an if, I should hhave made another function
    //   prompt("do you want to buy scissors for $5?", "yes or no"); //once it is met, notifty user
    //    if (userInput === "yes") {
    //      bank = bank-5;  //update the bank
    //       alert("HAVE FUN USING YOUR SCISSORS!"),
    //        useScissors(); //go to another functionn otherwise Jv will read the lines below
    //     } else if (userInput === "no"); {
    //       bank = bank
    //       alert(
    //         "Have fun using your teeth, you have $" +
    //           bank +
    //           " left." 
    //       )
    else if (userInput === "no") {
      alert("game over");
    }
    askForAction();
  }


  const askForUpgrade= () => {
      userInput= prompt("do you want to buy rusty scissors for $5", "yes or no");
        if (userInput === "yes") {
        bank = bank-5;  //update the bank
        alert("HAVE FUN USING YOUR SCISSORS!"),
        useScissors(); //go to another functionn otherwise Jv will read the lines below
        } else if (userInput === "no"); {
        bank = bank
        alert(
       "Have fun using your teeth, you have $" +
         bank +
         " left.") 
        }
    }


    const useScissors = () => {
        showStatus();
        userInput= prompt("You are now using rusty scissorrs, do you want to cut grass for $5?", "yes or no");
        if (userInput === "yes") {
          bank = bank + 5; //or bank++   also adds 1
          alert("you made $5")
          if (bank >= 25) {
            askForUpgradeLawn(); }
        } else if(userInput==="no"){
            alert("game over");
        }
        useScissors();
        }



        const askForUpgradeLawn= () => {
            userInput= prompt("do you want to buy a lawnmower for $25", "yes or no");
              if (userInput === "yes") {
              bank = bank-25;  //update the bank
              alert("have fun with your lawnmower!")
              useLawn();
             // useScissors(); //go to another functionn otherwise Jv will read the lines below
              } else if (userInput === "no"); {
              bank = bank
              alert(
             "Have fun using your scissors, you have $" +
               bank +
               " left.") 
              }
          }


          const useLawn = () => {
            showStatus();
            userInput= prompt("You are now using a lawnmower, do you want to cut grass for $50?", "yes or no");
            if (userInput === "yes") {
              bank = bank + 50; //or bank++   also adds 1
              alert("you made $50")}
              if (bank >= 250) {
                 askForElectric();
              //  askForUpgradeElectric(); }
            } else if(userInput==="no"){
                alert("game over");
            }
            useLawn();
            }

            const askForElectric= () => {
                userInput= prompt("do you want to buy electric lawnmower for $250", "yes or no");
                  if (userInput === "yes") {
                  bank = bank-250;  //update the bank
                  alert("HAVE FUN USING YOUR FANCY LAWNMOWER!"),
                  useElectric(); //go to another functionn otherwise Jv will read the lines below
                  } else if (userInput === "no"); {
                  bank = bank
                  alert(
                 "Have fun using your REGULAR lawnmower, you have $" +
                   bank +
                   " left.") 
                  }
              }


              const useElectric = () => {
                showStatus();
                userInput= prompt("You are now using an electric mower, do you want to cut grass for $100?", "yes or no");
                if (userInput === "yes") {
                  bank = bank + 100; //or bank++   also adds 1
                  alert("you made $100")}
                  if (bank >= 500) {
                     alert("working")
                  //  askForUpgrade
                } else if(userInput==="no"){
                    alert("game over");
                }
                useElectric();
                }



                

// const keepPlaying = () => {
//    userInput= prompt("you have $"+ bank + " do you want to keep playing?", "yes please or not now");
//     {
//         if (userInput === "yes please") {
//            askForAction()
//           } else if (userInput === "not now") {
//             alert("game over"); 
//           }
//     }
// }



// const useScissors = () => {
//     showStatus(),
//   userInput= prompt("You are now using rusty scissorrs, do you want to cut grass for $5?", "yes or no");
//     if (userInput === "yes") {
//         bank = bank + 5; 
//         alert("you made $5")
// } else if(userInput==="no"){
//     alert("game over");
// }
// }

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
//     bank >= 5