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
    alert(`You have cut ${lawnsCut} lawns and have $ ${money}`);
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
    } else if (money === 25 && toolBox.includes('oldMower') === false){
        askForOldMower();
    } else if (money >= 250 && !toolBox.includes('newMower')) {
        askForNewMower();
    } else if (money >= 500 && !toolBox.includes('starvingStudents')) {
        askForStudents();
    }
  };


  // checks tools and uses to tool to determin which type of cut
  const cutLawns = () => {
    if (tool === "teeth") {
      eatLawns();
    } else if (tool === 'rustyScissors') {
        cutWithScissors();
    } else if (tool === 'oldMower') {
        cutWithOldMower();
    } else if (tool === 'newMower') {
        cutWithNewMower();
    } else if (tool === 'starvingStudents') {
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
  }

  const cutWithOldMower = () => {
    lawnsCut++;
    money += 50;
    askForAction();
  }

  const cutWithNewMower = () => {
    lawnsCut++ ;
    money += 100;
    askForAction();
  }

  const cutWithStudents = () => {
    lawnsCut++ ;
    money += 250;
    askForAction();
  }





// ask if you want scissors
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

  //ask if you want old mower
  const askForOldMower = () => {
      const wantOldMower = prompt('Do you want to buy an old lawnmower for $25?', 'Yes/No');
      if(wantOldMower === 'Yes' || wantOldMower === 'yes') {
          money -= 25;
          tool = 'oldMower';
        toolBox.push('oldMower')
        showStatus();
      }else if (wantOldMower === 'No' || 'no'){
          askForAction();
      }
  }

// ask if you want new mower

  const askForNewMower = () => {
    const wantNewMower = prompt('Do you want to buy a fancy battery-powered lawnmower for $250?', 'Yes/No');
    if(wantNewMower === 'Yes' || wantNewMower === 'yes') {
        money -= 250;
        tool = 'newMower';
      toolBox.push('newMower')
      showStatus();
    }else if (wantNewMower === 'No' || 'no'){
        askForAction();
    }
}


//ask if you want student

const askForStudents = () => {
    const wantStudents = prompt('Do you want to buy some starving students for $500?', 'Yes/No');
    if(wantStudents === 'Yes' || wantStudents === 'yes') {
        money -= 500;
        tool = 'starvingStudents';
      toolBox.push('starvingStudents')
      showStatus();
    }else if (wantStudents === 'No' || 'no'){
        askForAction();
    }
}

constdayOff = () => {

}


  start();
  
  
  