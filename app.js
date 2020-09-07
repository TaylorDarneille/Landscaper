console.log("HELLO WORLD")
let tool = {}
let money
let boughtScissors = false
let boughtPushMower = false
let boughtElecMower = false
let boughtStudents = false

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
    winner()
    const choice = prompt("Current tool: " + tool.name + "\nYou have $" + money + "\nWhat do you want to do?", "Type in \'work\', \'shop\', or \'reset\'");
//input conditionals
    if (choice === "work") {
        work()
    } else if (choice === "shop") {
        shop()
    }else if (choice === "reset") {
        start()
    }
    else {
        askForAction()
    }
}


const work = () => {
    money += tool.profit
    askForAction()
}

const shop = () => {
    // prompt with store array values
    const storeSelect = prompt("Welcome to the store! You have $" + money + "\nWhat did you have in mind? \n" + "1. " + store[0].name + ": $" +  store[0].cost + "\n" + "2. " + store[1].name + ": $" + store[1].cost + "\n" + "3. " + store[2].name + ": $" + store[2].cost + "\n" + "4. " + store[3].name + ": $" + store[3].cost, "type in the number of the item you want");
    //conditional for selecting each item in the store, executes function for purchase of that item
    if (storeSelect === "1") {
        buyScissors()
    }else if (storeSelect === "2") {
        buyPushMower()
    }else if (storeSelect === "3") {
        buyElecMower()
    }else if (storeSelect === "4") {
        buyStudents()
    }else {
        askForAction()
    }
}

const buyScissors = () => {
   if (boughtScissors === true) {
       alert("This item is sold out!");
       shop()
   }else if (money < store[0].cost) {
       alert("You do not have enough money. Get back to work!")
       askForAction() 
   }else {
    tool = store[0]
    money -= store[0].cost
    boughtScissors = true
    alert("You've purchased " + store[0].name + "!")
    askForAction()
   }
}

const buyPushMower = () => {
    if (boughtPushMower === true) {
        alert("This item is sold out!");
        shop()
    }else if (money < store[1].cost) {
        alert("You do not have enough money. Get back to work!")
        askForAction() 
    }else {
     tool = store[1]
     money -= store[1].cost
     boughtPushMower = true
     alert("You've purchased " + store[1].name + "!")
     askForAction()
    }
 }

 const buyElecMower = () => {
    if (boughtElecMower === true) {
        alert("This item is sold out!");
        shop()
    }else if (money < store[2].cost) {
        alert("You do not have enough money. Get back to work!")
        askForAction() 
    }else {
     tool = store[2]
     money -= store[2].cost
     boughtElecMower = true
     alert("You've purchased " + store[2].name + "!")
     askForAction()
    }
 }

 const buyStudents = () => {
    if (boughtStudents === true) {
        alert("This item is sold out!");
        shop()
    }else if (money < store[3].cost) {
        alert("You do not have enough money. Get back to work!")
        askForAction() 
    }else {
     tool = store[3]
     money -= store[3].cost
     boughtStudents = true
     alert("You've purchased " + store[3].name + "!")
     askForAction()
    }
 }
 
 const winner = () => {
    if (boughtStudents === true && money >= 1000){
   alert("You won the game! You are the best landscaper!")
   }
}


document.getElementById("startBtn").addEventListener("click", start)


