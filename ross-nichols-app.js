//console.log("test 1")
//console.log("test 2")
//alert("Welcome to the game!")

//Use start function to set starting point for game
//Use function to determine prompt given at start of round?
//Ask: would you like to cut grass today? You can only use your teeth, but you'll earn a dollar. Earn enough money and you can buy tools! Answer yes/no
//Conditional: if yes, person += 1 / if no, don't add money (need to account for no answer)
//const cutGrass = prompt("Would you like to cut grass today? You can only use your teeth, but you'll earn a dollar.", "Yes / No")

let money
let tools = ["teeth", "rusty scissors", "push mower", "battery-powered mower", "team of starving students"]
let implement = tools[0]

const start = () => {
    money = 0
    //decision()
    showStatus()
}

const showStatus = () => {
    alert("You have $" + money + ". Your tool is " + implement +".")
    decision()
}

const decision = () => {
    //showStatus()
    
    const choice = prompt("Do you want to cut grass?", "Yes / No / Restart")

    if(choice === "Yes") {
        bank()
    } else if(choice === "No") {
        rest()
    } else if(choice === "Restart") {
        start()
    }
    
}

const bank = () => {
    //invoke function to add money. should be called if decision = yes
    //money += 1
    if(implement === tools[0]) {
        money +=1
    }
    if(implement === tools[1]) {
        money += 5
    }
    if(implement === tools[2]) {
        money += 50
    }
    if(implement === tools[3]) {
        money += 100
    }
    if(implement === tools[4]) {
        money += 250
    }
    toolTree()
    //decision()
}

const rest = () => {
    alert("You're taking the day off!")
    decision()
    
}

const toolTree = () => {
    //prompt similar to choice
    //if yes, change implement and deduct 5
    //if no, no action

    if(money < 5 && implement !== tools[1]) {
        implement = tools[0]
    }

    if(money >= 5 && implement === tools[0]) {
        const option = prompt("You have $5. Do you want to buy rusty scissors? The cost is $5", "Yes / No")
        if(option === "Yes") {
            money -= 5
            implement = tools[1]
        }
        
    }

    if(/*money >= 25 && implement === tools[0] ||*/ money >= 25 && implement === tools[1]) {
        const option = prompt("You have $25. Do you want to upgrade to a push-mower?"," Yes / No")
        if(option === "Yes") {
            money -= 25
            implement = tools[2]
        }
    }

    if(/*money >= 250 && implement === tools[0] || money >= 250 && implement === tools[1] ||*/ money >= 250 && implement === tools[2]) {
        const option = prompt("You have $250. Do you want to upgrade to a battery-powered mower?", "Yes / No")
        if(option === "Yes") {
            money -= 250
            implement = tools[3]
        }
    }

    if(money >= 500 && implement === tools[3]) {
        const option = prompt("You have $500. Do you want to hire a team of starving students for $500?", "Yes / No")
        if(option === "Yes") {
            money -= 500
            implement = tools[4]
        }
    }
    showStatus()
    //decision()
}

/*
const upgradeToScissors = () => {
    money -= 5
    implement === tools[1]
}
*/
start()
