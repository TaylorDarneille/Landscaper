// const welcome = () => {
//     alert('Welcome to Landscaper!')
// }
const startGame = () => {
    showNoobStatus()
    teethStage()
}

const showNoobStatus = () => {
    alert("Welcome to the landscaping business! You have $" + money + " and no tools.")
}

const teethStage = () => {
    const choice = prompt('What would you like to do? \nCut lawns (earn $1)\nBuy a pair of rusty scissors (spend $5)\nType your choice:',
    'cut lawns / buy scissors')

    if (choice === "cut lawns") {
        cutLawns()
    } else if (choice === "buy pair of rusty scissors") {
        buyScissors()
    } else {
        teethStage()
    }
}
// currently cannot exit game

const start = () => {
    money = 20
}
  
start()
startGame()

// askForAction() // invoking function
// }

// const showStatus = () => {
//     alert("you have " + apples + " apples and $" + money)
// }

// const askForAction = () => {
//     showStatus()
//     const choice = prompt("what do you want to do?",
//     "buy apple / eat apple / restart")

//     if (choice === "buy apple") {
//         buyApple()
//     } else if (choice === "eat apple") {
//         eatApple()
//     } else if (choice === "restart") {
//         start()
//     } 
// }