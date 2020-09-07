let money;

const start = () => {
  money = 0;
  alert("You are starting a landscaping business, but all you have are your teeth. You currently have $" + money)
  startCutting();
};

//Start the landscaping game
const  startCutting = () => {
  money++;  
  const go = alert("Let's use your teeth to begin cutting!");
  while(money<5) {
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
    if (moreMoney === "Yes" || moreMoney === "yes") {
        money++;
    } else {
        stop();
    }
  }

// Buy Scissors  
  while(money<25){
    const buyScissors = prompt("You now have $" + money + "! Would you like to buy scissors to help you cut the grass!", "Yes or No?");
        if (buyScissors === "Yes" || buyScissors === "yes") {
            scissors();
            break;
        } else if (buyScissors === "No" || buyScissors === "no") {
            keepTeeth();
        } else {
            stop();
        }  
    }
  // buy lawnmower 
  while(money<50){
        const buyLawnmower = prompt("You now have $" + money + "! Would you like to buy a lawn mower to help you cut the grass!", "Yes or No?");
            if (buyLawnmower === "Yes" || buyLawnmower === "yes") {
                lawnmower();
                break;
            } else if (buyLawnmower === "No" || buyLawnmower === "no") {
                keepScissors();
            } else {
                stop();
            }  
        }
}  

// Stop cutting
const stop = () => {
    const areYouSure = prompt("Are you sure you don't want to keep going?", "Yes or No")
    if (areYouSure === "Yes" || areYouSure === "yes"){
        alert ("Tired of using your teeth, huh? You finished with $" + money);
        start();
    } else{
        keepTeeth();
    }
}

//Unlimited teeth cutting
const keepTeeth = () => {
    money++;
    const buyScissors = prompt("You now have $" + money + "! Would you like to buy scissors to help you cut the grass!", "Yes or No?");
    if (buyScissors === "Yes" || buyScissors === "yes") {
     scissors();
    } else if (buyScissors === "No" || buyScissors === "no") {
     keepTeeth();
    }  else {
     stop();
    }
}

//Scissor cutting
const scissors = () => {
    const cut = alert("Let's use your scissors to cut the grass!");
    while(money < 25){
        let y = money+5;
        alert("Great! You now have $" + y);
        const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+5;
        } else {
        stop();
        }
    }   
}

//Unlimited scissor cutting
const keepScissors = () => {
    let y = money+5;
    const buyLawnmower = prompt("You now have $" + y + "! Would you like to buy a lawn mower to help you cut the grass!", "Yes or No?");
    if (buyLawnmower === "Yes" || buyLawnmower === "yes") {
     lawnmower();
    } else if (buyLawnmower=== "No" || buyLawnmower === "no") {
        let y = money + 5;
        money = y;
        keepScissors();
    }  else {
     stop();
    }
}

const lawnmower = () => {
    const mow = alert("Let's use your lawn mower to cut the grass!");
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
    while(money < 50){
        let y = money+50;
        alert("Great! You now have $" + y);
        const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+50;
        } else {
        stop();
        }
    }   
}
