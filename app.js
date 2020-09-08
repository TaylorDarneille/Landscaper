// START GAME WITH WELCOME MESSAGE AND ENTER TEETH STAGE
const startGame = () => {
    welcome()
    teethStage()
}

// WELCOME MESSAGE 
const welcome = () => {
    alert('Welcome to the landscaping business! We are so excited to have you on board.')
}

// STAGE ONE -- TEETH
const teethStage = () => {
    const choice = prompt('You currently have $' + money + '. What would you like to do? \n- Cut lawns (earn $1)\n- Buy a pair of rusty scissors (spend $5)\n- Restart game\n- Exit game\nType your choice:',
    'cut lawns, buy scissors, restart, exit?')

    if (choice === 'cut lawns' || choice === 'Cut lawns') {
        alert('You earned $1!')
        money += 1
        teethStage()
    } else if ((choice === 'buy scissors' && money >= 5) || (choice === 'Buy scissors' && money >= 5)) {
        alert('You purchased a pair of rusty scissors!')
        money -= 5
        scissors += 1
        scissorsStage()
    } else if ((choice === 'buy scissors' && money < 5) || (choice === 'Buy scissors' && money < 5)) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        teethStage()
    } else if (choice === 'restart' || choice === 'Restart') {
        start()
        startGame()
    } else if (choice === 'exit' || choice === 'Exit') {
        endGame()
    } else {
        teethStage()
    }
}

// STAGE TWO -- RUSTY OLD SCISSORS
const scissorsStage = () => {
    const choice = prompt('You currently have $' + money + ' and a pair of rusty old scissors. What would you like to do?\n- Cut lawns (earn $5)\n- Buy an old-timey push lawnmower (spend $25)\n- Restart\n- Exit game\nType your choice:',
    'cut lawns, buy lawnmower, restart, exit?')

    if (choice === 'cut lawns' || choice ==='Cut lawns') {
        alert('You earned $5!')
        money += 5
        scissorsStage()
    } else if ((choice === 'buy lawnmower' && money >= 25) || (choice === 'Buy lawnmower' && money >= 25)) {
        alert('You purchased an old-timey push lawnmower!')
        money -= 25
        oldLawnmower += 1
        oldLawnmowerStage()
    } else if ((choice === 'buy lawnmower' && money < 25) || (choice === 'Buy lawnmower' && money < 25)) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        scissorsStage()
    } else if (choice === 'restart' || choice === 'Restart') {
        start()
        startGame()
    } else if (choice === ' exit' || choice === 'Exit') {
        endGame()
    } else {
        scissorsStage()
    }
}

// STAGE THREE -- OLD-TIMEY LAWNMOWER
const oldLawnmowerStage = () => {
    const choice = prompt('You currently have $' + money + ' and an old-timey lawnmower. What would you like to do?\n- Cut lawns (earn $50)\n- Buy a fancy battery-powered lawnmower (spend $250)\n- Restart game\n- Exit game\nType your choice:',
    'cut lawns, buy lawnmower, restart, exit?')

    if (choice === 'cut lawns' || choice === 'Cut lawns') {
        alert('You earned $50!')
        money += 50
        oldLawnmowerStage()
    } else if ((choice === 'buy lawnmower' && money >= 250) || (choice === 'Buy lawnmower' && money >= 250)) {
        alert('You purchased a fancy battery-powered lawnmower!')
        money -= 250
        newLawnmower += 1
        newLawnmowerStage()
    } else if ((choice === 'buy lawnmower' && money < 250) || (choice === 'Buy lawnmower' && money < 250)) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        oldLawnmowerStage()
    } else if (choice === 'restart' || choice === 'Restart') {
        start()
        startGame()
    } else if (choice === 'exit' || choice === 'Exit') {
        endGame()
    } else {
        oldLawnmowerStage()
    }
}

// STAGE FOUR -- BATTERY-POWERED LAWNMOWER
const newLawnmowerStage = () => {
    const choice = prompt('You currently have $' + money + ' and a battery-powered lawnmower. What would you like to do?\n- Cut lawns (earn $100)\n- Hire a team of starving students (spend $500)\n- Restart game\n- Exit game\nType your choice:',
    'cut lawns, hire team, restart, exit')

    if (choice === 'cut lawns' || choice === 'Cut lawns') {
        alert('You earned $100!')
        money += 100
        newLawnmowerStage()
    } else if ((choice === 'hire team' && money >= 500) || (choice === 'Hire team' && money >= 500)) {
        alert('You hired a team of starving students!')
        money -= 500
        team += 1
        teamStage()
    } else if ((choice === 'hire team' && money < 500) || (choice === 'Hire team' && money < 500)) {
        alert('You do not have enough money! Looks like you need to cut more lawns...')
        newLawnmowerStage()
    } else if (choice === 'restart' || choice === 'Restart') {
        start()
        startGame()
    } else if (choice === 'exit' || choice === 'Exit') {
        endGame()
    } else {
        newLawnmowerStage()
    }
}

// STAGE FIVE -- TEAM OF STUDENTS
const teamStage = () => {
    if (money >= 1000) {
        alert('Congrats on earning over $1,000 and employing a team of students! You are a huge success in the landscaping business!')
        endGame()
    } else if (money < 1000) {
        const choice = prompt('You currently have $' + money + ' and a team of starving students. What would you like to do?\n- Cut lawns (earn $250)\n- Restart game\n- Exit game',
        'cut lawns, restart, exit')
        if (choice === 'cut lawns' || choice === 'Cut lawns') {
            alert('You earned $250!')
            money += 250
            teamStage()
        } else if (choice === 'restart' || choice === 'Restart') {
            start()
            startGame()
        } else if (choice === 'exit' || choice === 'Exit') {
            endGame()
        } else (
            teamStage()
        )
    }
}

// WIN -- END GAME
const endGame = () => {
    alert('Thank you for playing Landscaper!')
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