console.log("test 1")
console.log("test 2")
//alert("Welcome to the game!")

//Use start function to set starting point for game
//Use function to determine prompt given at start of round?
//Ask: would you like to cut grass today? You can only use your teeth, but you'll earn a dollar. Earn enough money and you can buy tools! Answer yes/no
//Conditional: if yes, person += 1 / if no, don't add money (need to account for no answer)
//const cutGrass = prompt("Would you like to cut grass today? You can only use your teeth, but you'll earn a dollar.", "Yes / No")

let money
let tools = ["teeth"]

const start = () => {
    money = 0
    implement = tools[0]
    decision()
}

const showStatus = () => {
    alert("You have $" + money + ". Your tool is " + implement +".")
}

const decision = () => {
    showStatus()
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
    money += 1
    decision()
}

const rest = () => {
    alert("You're taking the day off!")
    decision()
    //use a timeout function here?
}

//start()
