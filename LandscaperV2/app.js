
// *** If time have this write to a DOM element
 alert('Welcome to Landscaper: The Game! Try to earn $1000 and buy all the tools in the shop. Good luck!')


// *** If time, add Days
//Starting variables. money & tools
let money = 0
let tools = [{name: 'teeth', price: 0, value: 1}]

const moneyDiv = document.querySelector('#money')
const toolDiv = document.querySelector('#tool')

//Connect js variables to DOM
moneyDiv.innerText = `Money: $${money}`
toolDiv.innerText = `Tool: ${tools[0].name}`

//Win condition
//*** If time, turn this into DOM
//if (money >=1000 && tools[0].name === 'college students') alert('Congratuations! You win!')


//Options to mow lawn with current tool & price, or go to store for upgrade

const mowLawn = document.querySelector('#mow')
mowLawn.innerText = `Mow a Lawn ($${tools[0].value})`
mowLawn.addEventListener('click', mowLawn => {
//*** If time, create in DOM
    alert(`You mowed a lawn with your ${tools[0].name} for $${tools[0].value}`)
    money += tools[0].value
    moneyDiv.innerText = `Money: $${money}`
    if (money >=1000 && tools[0].name === 'college students') alert('Congratuations! You win!')
})

//List of what's available in the store
let inventory = [
    {name: 'rusty scissors', price: 5, value: 5},
    {name: 'push mower', price: 25, value: 50},
    {name: 'electric mower', price: 250, value: 100},
    {name: 'college students', price: 500, value: 250},
]

//Shopping function

// const shopping = () => {
// for (let item of inventory) {
//     // if (money >= item.price) {
//     //     tools.unshift(inventory[item])
//     //     money -= item.price
//     //     inventory.shift()
//     // } 
//     // else alert(`You don't have enough money! Mow some more lawns and come back later!`)
//     console.log(item.price)
// }
// }

const storeButtons = document.querySelectorAll('.store')

const shopping = (num) => {
    if (money >= (inventory[num].price)) {
        tools.unshift(inventory[num])
        toolDiv.innerText = `Tool: ${tools[0].name}`
        money -= inventory[num].price
        moneyDiv.innerText = `Money: $${money}`
        mowLawn.innerText = `Mow a Lawn ($${tools[0].value})`
        storeButtons[num].classList.add('disabled')      
        storeButtons[num].disabled = true
    }
    else alert(`You don't have enough money! Mow some more lawns and come back later!`)
}


//Assign to buttons
const scissors = document.querySelector('#scissors')
scissors.innerText = `${inventory[0].name} ($${inventory[0].price})`
scissors.addEventListener('click', run => {shopping(0)})

const pushMower = document.querySelector('#push_mower')
pushMower.innerText = `${inventory[1].name} ($${inventory[1].price})`
pushMower.addEventListener('click', run => {shopping(1)})

const electricMower = document.querySelector('#electric_mower')
electricMower.innerText = `${inventory[2].name} ($${inventory[2].price})`
electricMower.addEventListener('click', run => {shopping(2)})


const students = document.querySelector('#students')
students.innerText = `${inventory[3].name} ($${inventory[3].price})`
students.addEventListener('click', run => {shopping(3)})