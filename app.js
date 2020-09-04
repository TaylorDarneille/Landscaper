//Starting variables. Money, tool, and price. Maybe lawns?
const landscaper = () => {
let money = 0
    let tools = [{name: 'teeth', price: 0, value: 1}]
    //let price = 1

    //Prompt to start the game
    //Options to mow lawn with current tool & price, or go to store for upgrade

    const goToWork = () => {
        let start = prompt(`You have $${money}! Would you like to mow a lawn with your ${tools[0].name} for $${tools[0].value} or go to the store to buy a new tool?`,`Choose "mow lawn" or "go to store"`)

        if(start ==='mow lawn'){
            alert(`You mowed a lawn with your ${tools[0].name} for $${tools[0].value}`)
            money += tools[0].value
            goToWork()
        } else if (start === 'go to store') {
            //This is where the goToStore function will run
            goToStore()
        } else alert('You\'re no fun')
    }

    const goToStore = () => {
    //List of what's available in the store
        let inventory = [
            {name: 'rusty scissors', price: 5, value: 5},
            {name: 'push mower', price: 25, value: 50},
            {name: 'battery mower', price: 250, value: 100},
            {name: 'starving students', price: 500, value: 250},
        ]
    //Ask user what they want to buy
    
    // * COME BACK TO THIS *  //

    //    let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy?`, `${inventory}`)
    //Right now not listing individual things, just object Object

    // const storeList = inventory.forEach((item) => console.log(`${item.name}: $${item.price}`))
    // let shopping = prompt(`Welcome to the store! You have $${money}. What would you like to buy? \n ${storeList}`, `Type the name of what you would like to buy`)
    //Printing correctly, need to get out of console.log. return doesn't work

    // let storeList = inventory.forEach((item) => prompt(`${item.name}: $${item.price}`,`Want to buy this?`))
    //Lists each item individually

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
    //closer - lists first item in prompt. ok for now - first task is getting user to buy next tool, not whatever they want
    


    //Change tool to new tool //Change price to new price
    if (shopping === 'yes') {
        tools.unshift(inventory[0])
        money -= inventory[0].price
        console.log(inventory.shift())
    //rusty scissors is still coming up as only option
    }

    goToWork()
    }


    goToWork()
}

// landscaper()