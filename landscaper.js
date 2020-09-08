// // let userInput = prompt('Did you do the lawn with your teeth?', 'Yes or no')
// // console.log(userInput)

// // if (userInput === 'yes'||userInput === 'Yes') {
// //     alert("NICE")
// // } else if (userInput === 'no'|| userInput === 'No') {
// //     alert('No work, no pay')
// // }
// // let isScissors = false 
// // const checkScissors = () => {
// //     if(isScissors === false){
// //     alert('Cut lawn with teeth')
// //     } else if {
// //         alert('text')
// //     }
// // }






// // const start = () => {
// //   money = 0 
// //   lawnsCut = 0
// //   askForAction()
// // }

// // const showStatus = () => {
// //   alert('You have ' + lawnsCut + 'and $ ' + money)
// // }

// // const askForAction = () => {
  
// // }






// // let apples;
// // let money;

// // const start = () => {
//   //   apples = 0;
//   //   money = 20;
//   //   askForAction(); //invoking function
//   // };
  
//   // const showStatus = () => {
//     //   alert("You have " + apples + " apples and $" + money);
//     // };
    
//     // const askForAction = () => {
//       //     "What do you want to do?",
//       //     "buy apple / eat apple / restart"
//       //   );   //   showStatus();
//       //   const choice = prompt(
        
        
//         //   if (choice === "buy apple") {
//           //     buyApple();
//           //   } else if (choice === "eat apple") {
//             //     eatApple();
//             //   } else if (choice === "restart") {
//               //     start();
//               //   }
//               // };
              
//               // const buyApple = () => {
//                 //   apples++;
//                 //   money -= 1;
//                 //   askForAction();
//                 // };
                
//                 // const eatApple = () => {
//                   //   apples--;
//                   //   askForAction();
//                   // };
                  
                  
                  
//                   //Make 1 function for prompt user.
                  
//                   //Create 
//                   //while loop
                  
                  
                  
                  
                  
//                   //come back to this and how to use tool in loop
//                   // while (money <= 1000) {
                    
//                   // }
                  
                  
                  
// //NUMBER 1
// //Make money variable to add one dollar everytime

// // let amountPerDay = 1
// let money
// let scissors
// let lawnmower
// let fancyLawnmower
// let starvingStudents
                  
// //2
// //the button is clicked, also make prompt for cutting grass with teeth. 

// const start = () => {
//   scissors = 0
//   lawnmower = 0
//   fancyLawnmower = 0
//   starvingStudents = 0
//   money = 0
//   landscaper()
// }

// //Use teeth to recieve a dollar. 
// //Tell the user they have received a dollar everytime they use their teeth to mow the lawn
// //LOG: "Want to make your life easier?"
// //Give the user an option to buy scissors
// const landscaper = () => {
//   alert('You currently have $' + money)
//   // if(money < 5){
//   //   grassyTeeth()
//   // }else if(money >= 5){
//   //   useScissors()
//   // }
//   grassyTeeth()
// }

// const Service = () =>{
//   if(money >= 5) {
//     buyScissors()
//   }
// }

// const grassyTeeth = () => {
//   let choice = prompt('Do you want to start cutting the grass with your teeth?', 'Yes/No')
// // make selective menu of differnt processes to cut grass in grassyTeeth prompt
// if (choice === 'Yes' || choice === 'yes'){
//   alert('You now have $1!') 
//   money ++
//   landscaper()
//   } else if (choice === 'No' || choice === 'no'){
//   alert('You are broke!')
//   useScissors()
//   }
// }

// //create another variable for teeth. 
// //prompt if they want to cut grass for $1 



// //3
// //Once 5 dollars is reached, have an option to buy scissors

// const buyScissors = () => {
//   let choice = prompt('Do you want buy scissors?', 'Yes/No')

//   if(choice === 'Yes' || choice === 'yes'){
//     alert('Wooohoo! You now have scissors to cut the grass with!')
//     money -= 5
// }else if(choice === 'No' || choice ==='no'){
//   alert('Suit yourself!')
//   grassyTeeth()
//   }
// }


// const toolStore = () => {
//   let store = prompt('What would you like to buy?', 'Scissors / Lawnmower / Fancy Lawnmower / Hire starving students')
//   if((store === 'Scissors' || store === 'scissors') && money >= 5){//code 5 dollars somewhere so it knows
//     alert('Wooohoo! You now have scissors to cut the grass with!')
// }else if((store === 'Lawnmower' || store === 'lawnmower') && money >= 25){
//     alert('You got yourself a mower to cut grass with!')
// }else if((store === 'Fancy Lawnmower' || store === 'fancy lawnmower') && money >= 250){
//     alert('Thats a fine mower you gou got here!')
// }else if((store === 'Hire starving students' || store === 'hire starving students') && money >= 500){
//     alert('These students are hungry, but they can work!')
//   }
// }

// //4
 //Make 5 dollars a day using scissors

//5
//Once 25 dollars is reached have an option to buy lawnmower

//6
//Make 50 dollars a day using the lawnmowers

//7
//Once 250 dollars is reached, have an option to buy fancy lawnmower

//8
// Make 100 dollars a day using fancy lawnmower

//9
//Once 500 dollars is reached, have an option to hire starving students 

//10
 //Make 250 dollars a day with the starving students

//11
//Win the game once 1000 dollars is reached
                  

                  
                  
                  
                  
                  
                  
























// let money = 0
// let lawnsCut = 0


// const userInput = () => {
  //     money = 0
//     lawnsCut = 0
//     askForAction();
// }

// const showStatus = () => {
//        alert("You have " + lawnsCut + " lawns cut with your teeth and $" + money)
// };

// const askForAction = () => {
//      "Do you want to cut the lawn with your teeth?",
//      "yes/no"
//     );  showStatus()
//     }

// const choice = prompt("hello")

//     if (choice === "buy apple") {
//         money();
//     } else if (choice === "eat apple") {
//         lawnsCut();
//      } else if (choice === "restart") {
//         userInput();
//     }



// const money = () => {
//         money -= 1;
//         askForAction();
//     };
                                
// const lawnsCut = () => {
//         money--;
//         askForAction();
//     };
                                    




//LECTURE NOTES
                                    
                                    
                                    
                                    
                                    // let userInput = prompt('Did you do the lawn with your teeth?', 'Yes or no')
                                    // console.log(userInput)
                                    
                                    
                                    //PREETS CODE 
                                    //prompt is always string
                                    // alert(“You are starting a landscaping business, but all you have are your teeth. Using just your teeth, you can spend the day cutting lawns and make $1.  You can do this as much as you want.“)
                                    //   const answer = prompt(“Are you using your teeth”, “Yes/No?“);
                                    //   if (answer === “Yes”) {
                                    //     alert();
                                    //   } else if (answer === “No”) {
                                    //     alert();
                                    //   }
                                    // //code taken from Mateen’s lecture
                                    // let landscaper;
                                    // let money;
                                    // const start = () => {
                                    //   landscaper = 0;
                                    //   money = 0;
                                    //   askForAction(); //invoking function
                                    // };
                                    // const showStatus = () => {
                                    //   alert(“You made a dollar, you now have $” + money);
                                    // };
                                    // const askForAction = () => {
                                    //   showStatus();
                                    //   const choice = prompt(
                                    //     “What do you want to do?“,
                                    //     “cut lawns / restart”
                                    //   );
                                    //   if (choice === “cut lawns”) {
                                    //     cutLawns();
                                    //   } else if (choice === “restart”) {
                                    //     start();
                                    //   }
                                    // };
                                    // const cutLawns = () => {
                                    //   money++;
                                    //   askForAction();
                                    // }
                                    // start();






//METEEN CODE ALONG
// const greet = () => {
//   alert('You are starting a landscaping business, but all you have are your teeth')
// }
// greet ()
// //variables to store values in
// let lawnCut
// let money
// let tool 
// let toolBox

// //the start function
// const start  = () => {
//   lawnCut = 0 
//   money = 0 
//   tool = 'teeth'
//   askForAction()
// }
// //SHOWS how many lawns have been ciy and how much money is earned
// const showStatus = () => {
//   alert(`You have cut ${lawncut} lawns and have $ ${money}`)//ES6 Templating
// }


// //actions to handle each event
// const askForAction = () => {
//   if (money === 1000){
//     alert('WINNER WINNER CHICKEN DINNER')
//   } else {
//     showStatus()
//     if(money === 5){
//       storeTools()
//     }
  
//     const choice = prompt('Will you cut the lawn?', 'Yes/No'){
//       if (choice === 'Yes' || choice === 'yes'){
//       cutLawns()
//       }
//     }
// }

// const toolStore = () => {
//   //check i f money is equal to 5 and if toolBox doesnt have rusty scissors
//   if(money === 5 && toolBox.includes('rustyScissors') === false){
//     askForScissors()
//   }
// }



// //checks toools and uses to tool to sdetermine which tyoe of that
// const cutLawns = () => {
//   if(tool === 'teeth'){
//     eatLawns()
//   }
// }

// //eatLawns will add $1
// const eatLawns = () => {
//   lawnsCut++
//   money += 1
//   askForAction()
// }

// const askForScissors = () => {
//   const wantScissors = prompt('Do you want to buy some rusty scissors for $5?', 'Yes/No')
//   if(wantScissors === 'Yes' || wantScissors === 'yes'){
//     money -= 5
//     tool = 'rustyScissors'
//     toolBox.push('rustyScissors')
//   } else if(wantScissors === 'No' || wantScissors === 'no'){
//   }
// }

// start()





//MY CODE=========================
// const greet = () => {
//   alert(
//     "You are starting a landscaping business, but all you have are your teeth"
//   );
// };
// greet();
// // variable to store values in
// let lawnsCut;
// let money;
// let tool;
// let toolBox = [];
// // the start function
// const start = () => {
//   lawnsCut = 0;
//   money = 0;
//   tool = "teeth";
//   askForAction();
// };
// // shows how many lawns have been cut and how much money is earned
// const showStatus = () => {
//   alert(`You have cut ${lawnsCut} lawns and have $ ${money}`);
//   //alert("You have cut " + lawnsCut + " lawns and have $" + money);
// };
// // actions to handle each event
// const askForAction = () => {
//   if (money === 1000) {
//     alert("You are a winner!!!");
//   } else {
//     showStatus();
//     // check money value to purchase new tool
//     if (money === 5 || money >= 25 || money >= 250 ||money >= 500) {
//       toolStore();
//     }
//     const choice = prompt("Will you cut the lawn?", "Yes/No/Restart");
//     if (choice === "Yes" || choice === "yes") {
//       cutLawns();
//     }else if(choice === 'No' || choice === 'no'){
//       dayOff()
//     }else if(choice === 'Restart' || choice === 'restart'){
//       alert('Better luck next time')
//       start()
//     }
//   }
// };
// const toolStore = () => {
//   // check if money is equal to 5 and if toolBox doesn't have rusty Scissors
//   if (money === 5 && toolBox.includes("rustyScissors") === false) {
//     askForScissors();
//   } else if(money === 25 && toolBox.includes('oldMower') === false){
//     askForOldMower()
//   }else if (money >= 250 && !toolBox.includes('oldMower')) {
//     askForNewMower()
//   }else if (money >= 500 && !toolBox.includes('starvingStudents')) {
//     askForStudent()
//   }
// };
// // checks tools and uses to tool to determin which type of cut
// const cutLawns = () => {
//   if (tool === "teeth") {
//     eatLawns();
//   }else if (tool === 'rustyScissors') {
//     cutWithScissors()
//   }else if(tool === 'oldMower') {
//     cutWithOldMower()
//   }else if (tool === 'newMower'){
//   cutWithNewMower()
//   }else if(tool ==- 'starvingStudents'){
//     cutWithStudents()
//   }
// }
// // eat lawns which add $1
// const eatLawns = () => {
//   lawnsCut++;
//   money += 1;
//   askForAction();
// };

// const cutWithStudents = () =>{
//   lawnsCut++
//   money += 250
//   askForAction()
// }

// const cutWithScissors = () => {
//   lawnsCut++
//   money += 5
//   askForAction()
// }

// const cutWithOldMower = () => {
//   lawnsCut++
//   moeny += 25
//   askForAction()
// }

// const askForScissors = () => {
//   const wantScissors = prompt(
//     "Do you want to buy some rusty scissors for $5?",
//     "Yes/No"
//   );
//   if (wantScissors === "Yes" || wantScissors === "yes") {
//     money -= 5;
//     tool = "rustyScissors";
//     toolBox.push("rustyScissors");
//     showStatus()
//   } else if (wantScissors === "No" || wantScissors === "no") {
//     askForAction();
//   }
// };
// const askForOldMower = () => {
//   const wantOldMower = prompt('Do you want to buy an old mower for $25', 'Yes/No')
//   if (wantOldMower === 'Yes' || wantOldMower === 'yes') {
//     money -= 25
//     tool = 'oldMower'
//     toolBox.push('oldMower')
//     showStatus
//   }else if(wantOldMower === 'No' || wantOldMower === 'no'){
//     }
//   }

//   const askForNewMower = () => {
//     const wantNewMower = prompt('Do you want to buy a new fancy mower for 250?', 'Yes/No')
//     if(wantNewMower === 'Yes' || wantNewMower === 'yes'){
//       money -= 250
//       tool = 'newMower'
//       toolBox.push('newMower')
//       showStatus()
//     }else if(wantNewMower === 'No' || wantNewMower === 'no'){
//       askForAction()
//     }
//   }

// const askForStudent = () => {
//   const wantStudent = prompt('Do you want to buy a student', 'Yes/No')

//     if(wantStudent === 'Yes' || wantStudent === 'yes'){
//       money -= 500
//       tool = 'starvingStudent'
//       showStatus
//     } else if(wantStudent === 'No' || wantStudent === 'no'){
//       askForAction()
//     }

// }
// const dayOff = () => {
// askForAction
// } 

// start();





//========================================
//MATEENS SOLUTION TO LANDSCAPER GAME
//========================================

const greet = () => {
  alert(
    "You are starting a landscaping business, but all you have are your teeth"
  );
};
greet();
// variable to store values in
let lawnsCut;
let money;
let tool;
let toolBox = [];
// the start function
const start = () => {
  lawnsCut = 0;
  money = 0;
  tool = "teeth";
  askForAction();
};
// shows how many lawns have been cut and how much money is earned
const showStatus = () => {
  alert(`You have cut ${lawnsCut} lawns and have $${money}`);
  //alert("You have cut " + lawnsCut + " lawns and have $" + money);
};
// actions to handle each event
const askForAction = () => {
  if (money === 1000) {
    alert("You are a winner!!!");
  } else {
    showStatus();
    // check money value to purchase new tool
    if (money === 5 || money >= 25 || money >= 250 || money >= 500) {
      toolStore();
    }
    const choice = prompt("Will you cut the lawn?", "Yes/No/Restart");
    if (choice === "Yes" || choice === "yes") {
      cutLawns();
    } else if (choice === "No" || choice === "no") {
      dayOff();
    } else if (choice === "Restart" || choice === "restart") {
      alert("Better luck next time!");
      start();
    }
  }
};
const toolStore = () => {
  // check if money is equal to 5 and if toolBox doesn't have rusty Scissors
  if (money === 5 && toolBox.includes("rustyScissors") === false) {
    askForScissors();
  } else if (money === 25 && toolBox.includes("oldMower") === false) {
    askForOldMower();
  } else if (money >= 250 && !toolBox.includes("newMower")) {
    askForNewMower();
  } else if (money >= 500 && !toolBox.includes("starvingStudents")) {
    askForStudent();
  }
};
// checks tools and uses to tool to determin which type of cut
const cutLawns = () => {
  if (tool === "teeth") {
    eatLawns();
  } else if (tool === "rustyScissors") {
    cutWithScissors();
  } else if (tool === "oldMower") {
    cutWithOldMower();
  } else if (tool === "newMower") {
    cutWithNewMower();
  } else if (tool === "starvingStudents") {
    cutWithStudents();
  }
};
// each function handles different tools
const eatLawns = () => {
  lawnsCut++;
  money += 1;
  askForAction();
};
const cutWithScissors = () => {
  lawnsCut++;
  money += 5;
  askForAction();
};
const cutWithOldMower = () => {
  lawnsCut++;
  money += 50;
  askForAction();
};
const cutWithNewMower = () => {
  lawnsCut++;
  money += 100;
  askForAction();
};
const cutWithStudents = () => {
  lawnsCut++;
  money += 250;
  askForAction();
};
//ask if you want scissors
const askForScissors = () => {
  const wantScissors = prompt(
    "Do you want to buy some rusty scissors for $5?",
    "Yes/No"
  );
  if (wantScissors === "Yes" || wantScissors === "yes") {
    money -= 5;
    tool = "rustyScissors";
    toolBox.push("rustyScissors");
    showStatus();
  } else if (wantScissors === "No" || wantScissors === "no") {
    askForAction();
  }
};
// ask if you want old mower
const askForOldMower = () => {
  const wantOldMower = prompt(
    "Do you want to buy an old lawnmower for $25",
    "Yes/No"
  );
  if (wantOldMower === "Yes" || wantOldMower === "yes") {
    money -= 25;
    tool = "oldMower";
    toolBox.push("oldMower");
    showStatus();
  } else if (wantOldMower === "No" || wantOldMower === "no") {
    askForAction();
  }
};
// ask if you want new mower
const askForNewMower = () => {
  const wantNewMower = prompt(
    "Do you want to buy a fancy battery-powered lawnmoer for $250",
    "Yes,No"
  );
  if (wantNewMower === "Yes" || wantNewMower === "yes") {
    money -= 250;
    tool = "newMower";
    toolBox.push("newMower");
    showStatus();
  } else if (wantNewMower === "No" || wantNewMower === "no") {
    askForAction();
  }
};
// ask if you want student
const askForStudent = () => {
  const wantStudent = prompt("do you want to buy a student", "Yes/No");
  if (wantStudent === "Yes" || wantStudent === "yes") {
    money -= 500;
    tool = "starvingStudents";
    toolBox.push("starvingStudents");
    showStatus();
  } else if (wantStudent === "No" || wantStudent === "no") {
    askForAction();
  }
};
// start from top
const dayOff = () => {
  askForAction();
};
start();