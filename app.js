//Starting variables. Money, tool, and price. Maybe lawns?
const landscaper = () => {
    let money = 0
    let tool = 'teeth'
    let price = 1

    //Prompt to start the game
    //Options to mow lawn with current tool & price, or go to store for upgrade

    const goToWork = () => {
        let start = prompt(`You have $${money}! Would you like to mow a lawn with your ${tool} for $${price} or go to the store to buy a new tool?`,`Choose "mow lawn" or "go to store"`)

        if(start ==='mow lawn'){
            alert(`You mowed a lawn with your ${tool} for $${price}`)
            money += price
            goToWork()
        } else if (start === 'go to store') {
            //This is where the goToStore function will run
            alert('You\'re broke! Get out!')
        } else alert('You have to make a choice!')
    }

    const goToStore = () => {
        let inventory = [
            {name: 'rusty scissors', price: 5},
            {name: 'push mower', price: 25},
            {name: 'battery mower', price: 250},
            {name: 'starving students', price: 500},
        ]
    }


    goToWork()
}

landscaper()