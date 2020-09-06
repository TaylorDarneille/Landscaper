
let money
let tool

const start = () => {
    money = 0
    tool = 'teeth'
    askForActionTeeth()
}

document.querySelector('button').addEventListener('click', start);

const showStatus = ()=>{
    alert('Good morning! You are using your ' + tool + ' to cut lawns today and have $' + money + '.');
}


////////////////////Prompt Functions//////////////////////

const askForActionTeeth = () => {
    showStatus()
    //code for has teeth
    const choiceTeeth = prompt("What do you want to do? Use teeth and earn $1 or buy scissors for $5? You'll earn $5 a day with scissors.", "cut grass with teeth / buy scissors");
    if (choiceTeeth === "cut grass with teeth") {
        teeth()
    }else if (choiceTeeth === 'buy scissors' && money >= 5) {
        buyScissors()
    }else {
        alert('You did not type in a recognized response, or you do not have enough money for your purchase.');
        askForActionTeeth();
    }
}



const askForActionScissors = () => {
    showStatus();
    const choiceScissors = prompt("What do you want to do? Use scissors and earn $5 or buy push mower for $25? You'll earn $50 a day with the push mower.", "cut grass with scissors / buy push mower");
    if (choiceScissors === 'cut grass with scissors') {
            scissors()
    } else if (choiceScissors === 'buy push mower' && money >= 25) {
            buyPushMower()
    } else {
            alert('You did not type in a recognized response, or you do not have enough money for your purchase.');
            askForActionScissors();
    }
}



const askForActionPushMower = () => {
    showStatus();
    const choicePushMower = prompt("What do you want to do? Use push mower and earn $50 or buy a battery-powered mower for $250? You'll earn $100 a day with the battery mower.", "cut grass with push mower / buy battery mower");
    if (choicePushMower === 'cut grass with push mower') {
        pushMower()
    } else if (choicePushMower === 'buy battery mower' && money >= 250) {
        buyBatteryMower()
    } else {
        alert('You did not type in a recognized response, or you do not have enough money for your purchase.');
        askForActionPushMower()
    }
}

const askForActionBatteryMower = () => {
    showStatus();
    const choiceBatteryMower = prompt("What do you want to do? Use battery-powered motor and earn $10 or hire a team of students for $500? You'll earn $250 a day with the team of students.", "cut grass with battery mower / buy student team");
    if (choiceBatteryMower === 'cut grass with battery mower') {
        batteryMower()
    } else if (choiceBatteryMower === 'buy student team' && money >= 500) {
        buyTeam()
    } else {
        alert('You did not type in a recognized response, or you do not have enough money for your purchase.');
        askForActionBatteryMower()
    }
}

const askForActionTeam = () => {
    showStatus();
    if (money < 1000) {
        alert("Today you are using your student team and earned $250.");
        team()
    } else if (money >= 100) {
        alert('You win! Refresh the page to re-start the game.');
    } else {
        alert('You did not type in a recognized response. Try again.');
        askForActionTeam()
    }    
}



///////////////////Tool and Buying Functions////////////////////

const teeth = () => {
    money++
    askForActionTeeth()
}

const buyScissors = () => {
    //something is messed up here!
    tool = 'scissors'
    money -= 5
    askForActionScissors();
}

const scissors = () => {
    money += 5
    askForActionScissors()
}

const buyPushMower = () => {
    money -= 25
    tool = 'push mower'
    askForActionPushMower()
}

const pushMower = () => {
    money += 50
    askForActionPushMower()
}

const buyBatteryMower = () => {
    money -= 250
    tool = 'battery mower'
    askForActionBatteryMower()
}

const batteryMower = () => {
    money += 100
    askForActionBatteryMower()
}

const buyTeam = () => {
    money -= 500
    tool = 'student team'
    askForActionTeam()

}

const team = () => {
    money += 250;
    askForActionTeam()
}

