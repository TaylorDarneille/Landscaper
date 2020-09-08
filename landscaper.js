// let userInput = prompt('Did you do the lawn with your teeth?', 'Yes or no')
// console.log(userInput)

// if (userInput === 'yes'||userInput === 'Yes') {
//     alert("NICE")
// } else if (userInput === 'no'|| userInput === 'No') {
//     alert('No work, no pay')
// }
// let isScissors = false 
// const checkScissors = () => {
//     if(isScissors === false){
//     alert('Cut lawn with teeth')
//     } else if {
//         alert('text')
//     }
// }






// const start = () => {
//   money = 0 
//   lawnsCut = 0
//   askForAction()
// }

// const showStatus = () => {
//   alert('You have ' + lawnsCut + 'and $ ' + money)
// }

// const askForAction = () => {
  
// }






// let apples;
// let money;

// const start = () => {
  //   apples = 0;
  //   money = 20;
  //   askForAction(); //invoking function
  // };
  
  // const showStatus = () => {
    //   alert("You have " + apples + " apples and $" + money);
    // };
    
    // const askForAction = () => {
      //     "What do you want to do?",
      //     "buy apple / eat apple / restart"
      //   );   //   showStatus();
      //   const choice = prompt(
        
        
        //   if (choice === "buy apple") {
          //     buyApple();
          //   } else if (choice === "eat apple") {
            //     eatApple();
            //   } else if (choice === "restart") {
              //     start();
              //   }
              // };
              
              // const buyApple = () => {
                //   apples++;
                //   money -= 1;
                //   askForAction();
                // };
                
                // const eatApple = () => {
                  //   apples--;
                  //   askForAction();
                  // };
                  
                  
                  
                  //Make 1 function for prompt user.
                  
                  //Create 
                  //while loop
                  
                  
                  
                  
                  
                  //come back to this and how to use tool in loop
                  // while (money <= 1000) {
                    
                  // }
                  
                  
                  
//NUMBER 1
//Make money variable to add one dollar everytime
                  
let money
// let amountPerDay = 1
let scissors
let lawnmower
let fancyLawnmower
let starvingStudents
                  
//2
//the button is clicked, also make prompt for cutting grass with teeth. 

const start = () => {
  scissors = 0
  lawnmower = 0
  fancyLawnmower = 0
  starvingStudents = 0
  money = 0
  landscaper()
}

//Use teeth to recieve a dollar. 
//Tell the user they have received a dollar everytime they use their teeth to mow the lawn
//LOG: "Want to make your life easier?"
//Give the user an option to buy scissors
const landscaper = () => {
  alert('You currently have $' + money)
  if(money < 5){
    grassyTeeth()
  }else if(money >= 5){
    useScissors()
  }
}

const grassyTeeth = () => {
  let choice = prompt('Do you want to start cutting the grass with your teeth?', 'Yes/No')

if (choice === 'Yes' || choice === 'yes'){
  alert('You now have $1!') 
  money ++
  landscaper()
  } else if (choice === 'No' || choice === 'no'){
    alert('You are broke!')
  }
}

//create another variable for teeth. 
//prompt if they want to cut grass for $1 



//3
//Once 5 dollars is reached, have an option to buy scissors

const useScissors = () => {
  let choice = prompt('Do you want buy scissors?', 'Yes/No')

  if(choice === 'Yes' || choice === 'yes'){
    alert('Wooohoo! You now have scissors to cut the grass with!')
    money -=5
}else if(choice === 'No' || choice ==='no'){
  alert('Suit yourself!')
  }
}
//4
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
