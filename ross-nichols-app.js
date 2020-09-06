alert("Welcome to the game! You win by earning $1000 and hiring a team of starving students")

//Use start function to set starting point for game
//Use function to determine prompt given at start of round
//Ask: would you like to cut grass today? You can only use your teeth, but you'll earn a dollar. Earn enough money and you can buy tools! Answer yes/no
//Conditional: if yes, money += 1 / if no, don't add money (need to account for no answer)
//const cutGrass = prompt("Would you like to cut grass today? You can only use your teeth, but you'll earn a dollar.", "Yes / No")

let money
const tools = ["teeth", "rusty scissors", "push mower", "battery-powered mower", "a team of starving students"]
let implement = tools[0]

const start = () => {
    money = 0
    showStatus()
}

const showStatus = () => {
    if(money >= 1000 && implement === tools[4]) {
        alert("Congratulations! You have won the game! You have $" + money + " and you hired " + implement)
    } else {
        alert("You have $" + money + ". Your tool is " + implement +".")
        decision()
    }
}

const decision = () => {
    const choice = prompt("Do you want to cut grass?", "Yes / No / Restart")

    if(choice.toLowerCase() === "yes") {
        bank()
    } else if(choice.toLowerCase() === "no") {
        rest()
    } else if(choice.toLowerCase() === "restart") {
        start()
    } else {
        decision()
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
}

const rest = () => {
    alert("You're taking the day off!")
    decision()
    
}

const toolTree = () => {
    //if yes, change implement and deduct cost from money
    //if no, no action

    if(money < 5 && implement !== tools[1]) {
        implement = tools[0]
    }
    if(money >= 5 && implement === tools[0]) {
        const option = prompt("You have $5. Do you want to buy rusty scissors? The cost is $5 and you will earn $5 per day.", "Yes / No")
        if(option.toLowerCase() === "yes") {
            money -= 5
            implement = tools[1]
        } 
    }
    if(money >= 25 && implement === tools[1]) {
        const option = prompt("You have $25. Do you want to upgrade to a push-mower? The cost is $25 and you will earn $50 per day"," Yes / No")
        if(option.toLowerCase() === "yes") {
            money -= 25
            implement = tools[2]
        }
    }
    if(money >= 250 && implement === tools[2]) {
        const option = prompt("You have $250. Do you want to upgrade to a battery-powered mower? The cost is $250 and you will earn $100 per day", "Yes / No")
        if(option.toLowerCase() === "yes") {
            money -= 250
            implement = tools[3]
        }
    }
    if(money >= 500 && implement === tools[3]) {
        const option = prompt("You have $500. Do you want to hire a team of starving students? The cost is $500 and you will earn $250 per day", "Yes / No")
        if(option.toLowerCase() === "yes") {
            money -= 500
            implement = tools[4]
        }
    }
    showStatus()
}

start()
