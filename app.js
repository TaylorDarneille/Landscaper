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
    const choice = prompt("Current tool: " + tool.name + "\nYou have $" + money + "\nWhat do you want to do?", "Type in \'work\', \'shop\', or \'reset\'");

    if (choice === "work") {
        work()
    } else if (choice === "shop") {
        shop()
    }else if (choice === "reset") {
        start()
    }else {
        askForAction()
    }
}

const work = () => {
    money += tool.profit
    askForAction()
}

const shop = () => {
    // prompt with store array values
    const storeSelect = prompt("Welcome to the store! What did you have in mind? \n" + store[0].name + ": $" +  store[0].cost + "\n" + store[1].name + ": $" + store[1].cost + "\n" + store[2].name + ": $" + store[2].cost + "\n" + store[3].name + ": $" + store[3].cost, "type the item you want (e.g. \'Rusty Scissors\')" );
    //conditional for selecting each item in the store, executes function for purchase of that item
    if (storeSelect === "Rusty Scissors") {
        buyScissors()
    }else if (storeSelect === "Push Mower") {
        buyPushMower()
    }else if (storeSelect === "Battery-powered Mower") {
        buyElecMower()
    }else if (storeSelect === "Team of Students") {
        buyStudents()
    }else {
        askForAction()
    }
}

const buyScissors = () => {
   if (tool === store[0]) {
       alert("This item is sold out!");
       shop()
   }else {
    tool = store[0]
    console.log(tool)
    askForAction()
   }
}


document.getElementById("startBtn").addEventListener("click", start)


