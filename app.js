console.log("HELLO WORLD")

let tool = {}
let money;
let store = //array of objects with name, profit, and cost key:value pairs 
    [
    { name: "Rusty Scissors",
      profit: 1
    },

    }
    ]

const start = () => {
    money = 0;
    tool = {
         name: "Teeth",
        profit: 1
     }
    askForAction(); //invoking function
};

const askForAction = () => {
    const choice = prompt("Current tool: " + tool.name + "\nYou have $" + money + "\nWhat do you want to do?", "Type in \'work\' or \'shop\'");

    if (choice === "work") {
        work()
    } 
}

const work = () => {
    money += tool.profit
    askForAction()
}


start()