//Alert is use to make a statement
//prompt is use to make a decision
//i use mateen some of code to get mine to work
const welcome = () => {
    alert(
      "Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want."
    );
  };
  welcome();
// variables to run the game 
let tool;
let toolShed = [];
let money;
let workDay;


// Global function
const start = () => {
    workDay = 0;
    money = 0;
    tool = "teeth";
    actionTaken()
} 
// function to show a choice after every daily decision
const showStatus = () => {
    alert(`You have work ${workDay} days and have $${money}`);
  };
// Function to decide if someone is a winner
const actionTaken = () => {
    if (money === 1000) {
      alert("Congrats you a winner!!!");
    } else {
      showStatus();
      // check money value to purchase new tool
      if (money === 5 || money >= 25 || money >= 250 || money >= 500) {
        dailyTools();
      }
      const choice = prompt("Do you want to work today?", "Yes/No/Restart");
      if (choice === "Yes" || choice === "yes") {
        cutLawns();
      } else if (choice === "No" || choice === "no") {
        dayOff();
      } else if (choice === "Restart" || choice === "restart") {
        alert("See you next time!");
        start();
      }
    }
  };

const dailyTools = () => {

   const choice2 = prompt()
        if(money === 5 && toolShed.includes("rustyScissors") === false) {
            askForScissors()  
        } else if(money === 25 && toolShed.includes("pushLawnmower") === false) {
            askForOldMower()
        } else if(money === 250 && toolShed.includes("powerLawnmower")) {
            askForNewMower()
        } else if(money === 25 && toolShed.includes("starvingStudents")) {
            askForStudent()
        }
}
 // Function to check tools and uses tool to determine how its cut
 const cutLawns = () => {
    if (tool === "teeth") {
      rabbitMood();
    } else if (tool === "rustyScissors") {
      scissors();
    } else if (tool === "pushLawnmower") {
        pusholdmower();
    } else if (tool === "powerLawnmower") {
        powLawnmower();
    } else if (tool === "starvingStudents") {
        stStudents();
    }
  };
/*
// Alert and prompt to start the game
const landscaper = prompt("Are you currently using your teeth", "Yes/No");
    if(landscaper === "Yes") {
        money++
        workDay++
        alert("You made a dollar. now you have $" + money)
        start()
        //prompt always a string   
    } else if(landscaper === "No") {
        workDay++
        alert("You in for a rough day on workDay " + workDay)
        start()
    }
*/
    
/*
// Function to increase the day daily
const increaseDay = () => {
        workDay++
        console.log(increaseDay)
    }
    

// Function to increase the money
statusCheck = () => {
    if(money => 5) {
        scissors()
    } else if(money => 25) {
        pushLawnmower()
    } else if(money => 25) {
        poweredLawnmower()
    } else if(money => 25) {
        starvingStudents()
    } start()
}
*/
// I did these on my own 
  // function for different tools
const rabbitMood = () => {
    workDay++;
    money += 1;
    actionTaken()
}

const scissors = () => {
    workDay++;
    money += 5;
    actionTaken()
}

const pusholdmower = () => {
    workDay++;
    money += 50;
    actionTaken()
}
const powLawnmower = () => {
    workDay++;
    money += 100;
    actionTaken()
}
const stStudents = () => {
    workDay++;
    money += 250;
    actionTaken()
}

const askForScissors = () => {

    const blueScissors = prompt(
      "Do you want to buy some rusty scissors for $5?",
      "Yes/No"
    );
    if (blueScissors === "Yes" || blueScissors === "yes") {
      money -= 5;
      tool = "rustyScissors";
      toolShed.push("rustyScissors");
      showStatus();
    } else if (blueScissors === "No" || blueScissors === "no") {
      actionTaken();
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
      actionTaken();
    }
};
// wasn't show how to always ask for a new tool
  // Function to ask if you want to use a new tool
  // Function to ask for newMomwer
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
        actionTaken();
    }
  };
  // ask if you want student
  const askForStudent = () => {
    const wantStudent = prompt("do you want to buy a student", "Yes/No");
    if (wantStudent === "Yes" || wantStudent === "yes") {
      money -= 500;
      tool = "starvingStudents";
      toolShed.push("starvingStudents");
      showStatus();
    } else if (wantStudent === "No" || wantStudent === "no") {
        actionTaken();
    }
  };



const dayOff = () => {
    actionTaken();
};

start();
