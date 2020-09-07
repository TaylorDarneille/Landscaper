//was able to set up an initial prompt
// let userInput = prompt("Did you mow the lawn with your teeth?", "yes or no?")

// if(userInput === "Yes" || userInput === "yes") {
//     alert("Nice! You earn $1")
// } else if (userInput === "No" || userInput === "no") {
//     alert("No pay!")
// }
let wallet = 0

const earnMoney = () => {
  let userInput = prompt("How did you cut the grass today?");
  while(userInput === "teeth"){
    //earn $1 per time user inputs teeth
    wallet += 1;
    alert("You earned $1", "You now have "+ wallet)
    userInput = prompt("How did you cut the grass today?")
    if(wallet >= 5){
      prompt("You can buy rusty scissors!", "Yes or no?")
    }if(userInput === "yes"){
        wallet -= 5;
        //the alert is not popping up
        alert("You have bought rusty scissors");
        userInput = prompt("How did you cut the grass today?")
      }else(
      alert("Keep working!")
      )
  }
  while(userInput === "rusty scissors"){
    //earn $5 per time user inputs rusty scissors
    wallet += 5;
    alert("You earned $5", "You now have "+ wallet)
    userInput = prompt("How did you cut the grass today?")
    if(wallet >= 25){
      prompt("You can buy old lawnmower", "Yes or no?")
    }if(userInput === "yes"){
        wallet -= 25;
        alert("You have bought old lawnmower");
        userInput = prompt("How did you cut the grass today?")
      }else(
        alert("Keep working!")
      )
  }
  while(userInput === "old lawnmower"){
    //earn $50 per time user inputs old lawnmower
    wallet += 50;
    alert("You earned $50", "You now have "+ wallet)
    userInput = prompt("How did you cut the grass today?")
    if(wallet >= 250){
      prompt("You can buy fancy lawnmower", "Yes or no?")
    }if(userInput === "yes"){
        wallet -= 250;
        alert("You have bought fancy lawnmower");
        userInput = prompt("How did you cut the grass today?")
      }else(
        alert("Keep working!")
      )
  }
  while(userInput === "fancy lawnmower"){
    //earn $100 per time user inputs fancy lawnmower
    wallet += 100;
    alert("You earned $100", "You now have "+ wallet)
    userInput = prompt("How did you cut the grass today?")
    if(wallet >= 500){
      prompt("You can buy starving students", "Yes or no?")
    }if(userInput === "yes"){
        wallet -= 500;
        alert("You have bought starving students");
        userInput = prompt("How did you cut the grass today?")
      }else(
        alert("Keep working!")
      )
  }
  while(userInput === "starving students"){
    //earn $250 per time user inputs starving students
    wallet += 250;
    alert("You earned $250", "You now have "+ wallet)
    userInput = prompt("How did you cut the grass today?")
    if(userInput === "starving students" && wallet >= 1000){
      alert("Lanscaper wins!")
    }
  }
};

earnMoney()