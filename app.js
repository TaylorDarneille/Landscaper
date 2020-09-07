// START GAME WITH WELCOME MESSAGE AND ENTER TEETH STAGE
const startGame = () => {
    welcome()
    teethStage()
}

// WELCOME MESSAGE 
const welcome = () => {
    alert('Welcome to the landscaping business!')
}

// STAGE ONE -- TEETH
const teethStage = () => {
    const choice = prompt('You currently have $' + money + '. What would you like to do? \n- Cut lawns (earn $1)\n- Buy a pair of rusty scissors (spend $5)\nType your choice:',
    'cut lawns / buy scissors')

    if (choice === 'cut lawns') {
        alert('You earned $1!')
        money += 1
        teethStage()
    } else if (choice === 'buy scissors' && money >= 5) {
        alert('You purchased a pair of rusty scissors!')
        money -= 5
        scissors += 1
        scissorsStage()
    } else if (choice === 'buy scissors' && money < 5) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        teethStage()
    } else (
        teethStage()
    )
}

// STAGE TWO -- RUSTY OLD SCISSORS
const scissorsStage = () => {
    const choice = prompt('You current have $' + money + ' and a pair of rusty old scissors. What would you like to do? \n- Cut lawns (earn $5)\n- Buy an old-timey push lawnmower (spend $25)\nType your choice:',
    'cut lawns / buy lawnmower')

    if (choice === 'cut lawns') {
        alert('You earned $5!')
        money += 5
        scissorsStage()
    } else if (choice === 'buy lawnmower' && money >= 25) {
        alert('You purchased an old-timey push lawnmower!')
        money -= 25
        oldLawnmower += 1
        oldLawnmowerStage()
    } else if (choice === 'buy lawnmower' && money < 25) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        scissorsStage()
    } else (
        scissorsStage()
    )
}

// DECLARING VARIABLES WHEN GAME STARTS
const start = () => {
    money = 0
    scissors = 0
    oldLawnmower = 0
    newLawnmower = 0
    team = 0
}
  
// INVOKING FUNCTIONS TO START GAME
start()
startGame()

// --- notes/thoughts

// create an object with all the stage functions? then when game starts i can just call functions if it happens
// store function in an array?



// --- sample code from class

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