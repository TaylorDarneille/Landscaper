
alert('LANDSCAPING GAME, TYPE RESPONSES AS LISTED OR DIE (CASE SENSITIVE), PRESS 1 AT ANY TIME TO RESTART')

// Initializing global variables

const tools = ['teeth', 'scissors', 'old lawnmower', 'fancy lawnmower', 'starving students']
let tool = tools[0]
let money = 0

// Defining functions

// Consolidated a landscape function to determine how much money would be gained depending on the tool

function landscape(device) {
    if (device === 'teeth') {
        money++
    } else if (device === 'scissors') {
        money += 5
    } else if (device === 'old lawnmower') {
        money += 50
    } else if (device === 'fancy lawnmower') {
        money += 100
    } else if (device === 'starving students') {
        money += 250
    }
}

// restart function
// for some reason game is not starting over after this function is called?

function restart(){
    tool = tool[0]
    money = 0
    alert('You have toof and $0')
    stop = 0
}

// Finding a way to stop the game loop

let stop = 0

// While the loop continues we'll keep returning to the first prompt

while (stop != 1){

    // conditional to see if the player won
    if (tool === tools[4] && money >= 1000) {
        alert("You win you filthy capitalist scum")
        stop = 1
    }

    // tree of options while using teeth
    if (tool === 'teeth'){
        // add conditional to see if player has enough money for scissors
        if (money >= 5) {
            var choice = prompt("Buy scissors or mow lawn?", "scissors/mow")
        } else {var choice = prompt('Mow lawn?', 'mow')
     }   
        
        //different outcomes based on teeth
        if (choice === 'mow') {
            landscape(tool)
            alert('You have $'+money)
        } else if (choice === 'scissors'){
            tool = tools[1]
            money -= 5
            alert("Now have scissors and $"+money)
        } else if (choice === '1'){
            restart()
        }
    }

    // tree of options while using scissors
    if (tool === 'scissors') {
        if (money >= 25) {
            var choice = prompt("Buy old timey lawnmower or mow lawn?", "oldmower/lawn")
            } else {var choice = prompt('Mow lawn?', 'mow')
        }
        if (choice === 'mow') {
            landscape(tool)
            alert('You have $'+money)
         } else if (choice === 'oldmower'){
            tool = tools[2]
            money -= 25
            alert("Now have an old lawnmower and $"+money)
        } else if (choice === '1'){
            restart()
        }
    }

    // tree of options while using old lawnmower
    if (tool === 'old lawnmower') {
        if (money >= 250) {
            var choice = prompt("Buy fancy lawnmower or mow lawn?", "fancymower/lawn")
            } else {var choice = prompt('Mow lawn?', 'mow')
        }
        if (choice === 'mow') {
            landscape(tool)
            alert('You have $'+money)
         } else if (choice === 'fancymower'){
            tool = tools[3]
            money -= 250
            alert("Now have a fancy lawnmower and $"+money)
        } else if (choice === '1'){
            restart()
        }
    }

    // tree of options while using fancy lawnmower
    if (tool === 'fancy lawnmower') {
        if (money >= 500) {
            var choice = prompt("Buy a crew of starving students or mow lawn?", "students/lawn")
            } else {var choice = prompt('Mow lawn?', 'mow')
        }
        if (choice === 'mow') {
            landscape(tool)
            alert('You have $'+money)
         } else if (choice === 'students'){
            tool = tools[4]
            money -= 500
            alert("Now have crew of starving students and $"+money)
        } else if (choice === '1'){
            restart()
        }
    }

    // tree of options while using starving students
    if (tool === 'starving students' && stop !== 1){
        var choice = prompt('Mow lawn?', 'mow')
        if (choice === '1'){
            restart()
        }
        landscape(tool)
        alert('You have $'+money)
    }

    // ability to restart the game after winning
    if (stop === 1){
        var choice = prompt('Start from the bottom?', 'yes/no')
        if (choice === 'yes'){
            stop = 0
        }
    }
}

