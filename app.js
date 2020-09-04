console.log("HELLO WORLD")

let tool = {}
let money;
let store = //array of objects with name, profit, and cost key:value pairs 
    [
    { name: "Rusty Scissors",
      profit: 5,
      cost: 5
    },
    { name: "Push Mower",
      profit: 50,
      cost: 25
    },
    { name: "Battery-powered Mower",
    profit: 100,
    cost: 250
    },
    { name: "Team of Students",
    profit: 250,
    cost: 500
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
    } else if (choice === "shop") {
        shop()
    }
}

const work = () => {
    money += tool.profit
    askForAction()
}

const shop = () => {
    // prompt with store array values 
    //conditional for selecting each item in the store
}

start()