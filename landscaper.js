// let userInput = prompt("Did you mow the lawn with your teeth?", "yes or no?")

// if(userInput === "Yes" || userInput === "yes") {
//     alert("Nice! You earn money")
// } else if (userInput === "No" || userInput === "no") {
//     alert("No pay!")
// }


let wallet = 0
const earnMoney = () => {
    const userInput = prompt("How did you cut the grass today?")
    if(userInput === "teeth"){
        wallet += 1;
        alert("You earned $1")
    }else if(userInput === "scissors"){
        wallet +=5;
        alert("You earned $5")
    }else if(userInput === "old lawnmower"){
        wallet += 25;
        alert("You earned $50")
    }else if(userInput === "fancy lawnmower"){
        wallet += 100;
        alert("You earned $100")
    }else if(userInput === "starving students"){
        wallet +=250;
        alert("You earned $250")
    }
};
earnMoney()


const Lowes = () => {
    const buyingTools = prompt(
      "Welcome to Lowes - What do you want to buy today?",
      "Type: 1.Rusty Scissors | 2.Old lawnmower | 3.Fancy lawnmower | 4.Starving Students"
    );
    if (buyingTools === "Rusty Scissors" && wallet >= 5) {
      userTools.push(rustyScissors);
      wallet -= 5;
      alert(`Congratulations, you have bought ${tools[1].name}`);
    } else if (buyingTools === "Old lawnmower" && wallet >= 25) {
      userTools.push(oldMower);
      wallet -= 25;
      alert(`Congratulations, you have bought ${tools[2].name}`);
    } else if (buyingTools === "Fancy lawnmower" && wallet >= 250) {
      userTools.push(fancyMower);
      wallet -= 250;
      alert(`Congratulations, you have bought ${tools[3].name}`);
    } else if (buyingTools === "Starving Students" && wallet >= 500) {
      userTools.push(starvingStudents);
      wallet -= 500;
      alert(`Congratulations, you have bought ${tools[4].name}`);
    }
  };
  mowLawnToday()

  if(userInput === "starving students" && wallet === 1000){
      alert("Lanscaper wins!")
  }