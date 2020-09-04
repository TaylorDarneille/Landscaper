const landscaper = () => {
    //Starting variables. Money, tool, and price. Maybe lawns?
    //Options to mow lawn with current tool & price, or go to store for upgrade
    let money = 0
    let tools = [{name: 'teeth', price: 0, value: 1}]
    //let price = 1
    
//Prompt to start the game
    const goToWork = () => {
    if (money >=1000 && tools[0].name === 'starving students') alert('Congratuations! You win!')
        let start = prompt(`You have $${money}! Would you like to mow a lawn with your ${tools[0].name} for $${tools[0].value} or go to the store to buy a new tool?`,`Choose "mow lawn" or "go to store."`)
        if(start ==='mow lawn'){
            alert(`You mowed a lawn with your ${tools[0].name} for $${tools[0].value}`)
            money += tools[0].value
            goToWork()
        } else if (start === 'go to store') {
            //This is where the goToStore function will run
            goToStore()
        }
    }
    //issue with using prompts is that if user mistypes, entire game quits and resets - something to improve 
    
//List of what's available in the store
        let inventory = [
            {name: 'rusty scissors', price: 5, value: 5},
            {name: 'push mower', price: 25, value: 50},
            {name: 'battery mower', price: 250, value: 100},
            {name: 'starving students', price: 500, value: 250},
        ]
        
//Store function
    const goToStore = () => {
    //Ask user what they want to buy
                    
    // * COME BACK TO THIS *  //
                    
    //    let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy?`, `${inventory}`)
    //Right now not listing individual things, just object Object
                    
    // const storeList = inventory.forEach((item) => console.log(`${item.name}: $${item.price}`))
    // let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy? \n ${storeList}`, `Type the name of what you would like to buy`)
    // Printing list correctly, need to get out of console.log. return doesn't work
                    
    // let storeList = inventory.forEach((item) => prompt(`${item.name}: $${item.price}`,`Want to buy this?`))
    //Lists each item individually in a separate prompt
                    
    // const nameList = (item) => {
    //     return `${item.name}: $${item.price}`
    // }
                        
    // const storeList = inventory.forEach(nameList)
    //  let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy? \n ${storeList}`, `Type the name of what you would like to buy`)
                        
        const storeList = (inv) => {
            for(let item in inv) 
                return `${inv[item].name}: $${inv[item].price}`
            }
        let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy? \n ${storeList(inventory)}`, `Type "yes" to buy ${inventory[0].name}`)
            //closer - lists only first item in prompt. ok for now - first task is getting user to buy next tool, not whatever they want
            //rework for when they're able to buy multiple things/whatever they want
            //errors if user goes to store after buying last item
                        
        //Change tool to new tool //Change price to new price
                        
        //check that user has enough money
            if (shopping === 'yes') {
                if (money >= inventory[0].price) {
                    tools.unshift(inventory[0])
                    money -= inventory[0].price
                    inventory.shift()
                } else alert(`You don't have enough money! Mow some more lawns and come back later!`)
                //arr.shift working, but rusty scissors is still coming up in prompt
                //dur, it's reloading the original array at the start of goToStore //keep inventory outside of goToStore
            }
            goToWork()
    }
    
// checkWin()
    goToWork()
}
// landscaper()
// const checkWin = () => {
//     if (money >= 10) {
//         //&& tools[0].name === 'starving students'
//         alert('Congratulations, you win!')
//         } else {
//         goToWork() //gTW is recursive, that's why this wasn't working
//         }
//     }