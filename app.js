// adapted + added from the wonderful support of Mateen's code in the debugging channel! I added more explanations on each functions to let you know that I got it! 
setTimeout(function(){ // so the page can load with my bootiful starting page! 
    const firstMessage = () => {
        alert('Hello, Mr. Cow! You are starting a landscaping business. Are you ready to pull yourself up by your bootstraps and cut some lawns today? All you have are your teeth to start.')
    }

    firstMessage()

    // variables
    let lawnsCut
    let monties
    let tool
    let toolBox = []

    // starting the game!
    const begin = () => {
        lawnsCut = 0
        monties = 0
        tool = 'teeth'
        askForAction()
    }

    const showStatus = () => { // this will let the user know how many lawns they've cut and how much money they have
        alert(`You have cut ${lawnsCut} lawns and have $${monties}`)
    }
    // this will receive user input 
    const askForAction = () => { // starting backwards to how the user can win the game, if user has $1000, user be alerted that they won and that they need to file an LLC in order to avoid paying extra taxes #fiscallyresponsible
        if (monties > 1000) {
        alert('You are a winner!!! Please file your business as an LLC.');
        } else {
        showStatus() // this was where I got stuck -- i inputted some math wrong so it didn't correctly meet the monties parameters to run the lowes function
        if (monties === 5 || monties === 25 || monties === 250 || monties === 500 ) {
            lowes() // this will send the user to the lowes function to purchase more tools once they have enough monties
        }
        const choice = prompt('Will you cut the lawn?', 'Yes/No/Restart');
        if (choice === 'Yes' || choice === 'yes') {
            cutLawns()
        } else if (choice === 'No' || choice === 'no') {
            alert('Landscaper: you have failed the game of capitalism... try again tomorrow!')
        } else if (choice === 'Restart' || choice === 'restart') {
            alert("Landscaper: Already?! Let's try again!")
            begin()
        } else {
            alert('Landscaper: ????? Refresh please!')
        }
      }
    }

    // the store! 
    const lowes = () => {
        if (monties === 5 && toolBox.includes('rustyScissors') === false) {
        askForScissors()
        } else if (monties === 25 && toolBox.includes('oldLawnmower') === false) {
            askForOldLawnmower()
        } else if (monties === 250 && toolBox.includes('newLawnmower') === false) {
            askForNewLawnmower()
        } else if (monties === 500 && toolBox.includes('starvingStudents') === false) {
            askForStarvingStudents()
        } 
    };

    // checks tools and uses to tool to determine which type of cut
    const cutLawns = () => {
        if (tool === 'teeth') {
        eatLawns()
        } else if (tool === 'rustyScissors') {
        chopLawns()  
        } else if (tool === 'oldLawnmower') {
        mowLawns()
        } else if (tool === 'newLawnmower') {
        mowNewLawns()
        } else if (tool === 'starvingStudents') {
        supervise()
        }
    }

    // eat lawns which add $1
    const eatLawns = () => {
        lawnsCut++
        monties += 1
        askForAction()
    }

    // cut lawns which add $5
    const chopLawns = () => {
        lawnsCut++
        monties += 5
        askForAction()
    }
    // mow lawns with old lawnmower which add $50
    const mowLawns = () => {
        lawnsCut++
        monties += 50
        askForAction()
    }
    // mow lawns with new lawnmower which add $100
    const mowNewLawns = () => {
        lawnsCut++
        monties += 100
        askForAction()
    }
    // supervise starving students to mow lawns which add $250
    const supervise = () => {
        lawnsCut++
        monties += 250
        askForAction()
    }

    // buying prompts for tools: 
    const askForScissors = () => {
        const wantScissors = prompt(
        'Do you want to buy some rusty scissors for $5?',
        'Yes/No'
        );
        if (wantScissors === 'Yes' || wantScissors === 'yes') {
        monties -= 5
        tool = 'rustyScissors'
        toolBox.push('rustyScissors')
        } else if (wantScissors === 'No' || wantScissors === 'no') {
        askForAction()
        }
    }
    // repeat for other tools from old lawnmower to team of starving students
    const askForOldLawnmower = () => {
        const wantOldLawnmower = prompt(
        "Let's be more efficient! Do you want to buy an old lawnmower for $25?",
        'Yes/No'
        );
        if (wantOldLawnmower === 'Yes' || wantOldLawnmower === 'yes') {
        monties -= 25
        tool = 'oldLawnmower'
        toolBox.push('oldLawnmower')
        } else if (wantOldLawnmower === 'No' || wantOldLawnmower === 'no') {
        askForAction()
        }
    }

    const askForNewLawnmower = () => {
        const wantNewLawnmower = prompt(
        "Let's be even more efficient! Do you want to buy a new lawnmower for $250?",
        'Yes/No'
        );
        if (wantNewLawnmower === 'Yes' || wantNewLawnmower === 'yes') {
        monties -= 250
        tool = 'newLawnmower'
        toolBox.push('newLawnmower')
        } else if (wantNewLawnmower === 'No' || wantNewLawnmower === 'no') {
        askForAction()
        }
    }

    const askForStarvingStudents = () => {
        const wantStarvingStudents = prompt(
        "#WorkSmarterNotHarder! Do you want to hire a team for $500?",
        'Yes/No'
        );
        if (wantStarvingStudents === "Yes" || wantStarvingStudents === "yes") {
        monties -= 500
        tool = 'starvingStudents'
        toolBox.push('starvingStudents')
        } else if (wantStarvingStudents === 'No' || wantStarvingStudents === 'no') {
        askForAction()
        }
    }

    begin() // running the function at the end will ensure that all the functions are declared before starting the game
}, 2500);
