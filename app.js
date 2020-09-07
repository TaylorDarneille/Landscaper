let money = 0;


/*while (money < 1000) {
    
}*/

const opening = () => {
while (money < 5) {
let teethPrompt = prompt('Welcome to Landscaping. You have $' + money + ' . What tool would you like to use?', 'teeth')
    if (teethPrompt === 'teeth') {
        alert('you will be using your teeth and will earn $1 for the day.');
        money++;
        document.querySelector('.money').innerHTML = money;
    } else if (teethPrompt !== 'teeth') {
        alert('earn more money');
    } else {
        alert('error');
    } 
}
};
opening();

const buyScissors = () => {
    alert('You purchased rusty scissors for $5. You may do this just once');
    money -= 5;
    document.querySelector('.money').innerHTML = money;
}
let rustyScissorsButton = document.querySelector('.rustyScissors');
rustyScissorsButton.addEventListener('click', buyScissors);

//continue the game after buying the pair of rusty scissors. create button that when clicked sends prompt to user asking which
//tool to use
const continueAfterScissors = () => {
    while (money < 25) {
    secondPrompt = prompt('Continue the Game. Which tool would you like to use? Remember, you have $' + money + ' Teeth earn $1. Scissors earn $5.', 'teeth/scissors');
    if (secondPrompt === 'teeth') {
        alert('you chose teeth')
        money++;
        document.querySelector('.money').innerHTML = money;
    } else if (secondPrompt === 'scissors') {
        alert('you chose scissors')
        money += 5;
        document.querySelector('.money').innerHTML = money;
    } else {
        console.log('you need more money');
    }
}
};

let continueScissors = document.querySelector('.continueAfterScissors');
continueScissors.addEventListener('click', continueAfterScissors);
//Next, add a buy lawnmower button to complete step 5

const runLawnmower = () => {
    alert('You have purchased a lawnmower. You may do this once.')
    money -= 25;
    document.querySelector('.money').innerHTML = money;
}
let buyLawnmower = document.querySelector('.lawnmower');
buyLawnmower.addEventListener('click', runLawnmower);

//continue after purchasing lawnmower
const continueAfterLawnmower = () => {
    while (money < 250) {
    thirdPrompt = prompt('Continue the Game. Which tool would you like to use? Remember, you have $' + money + ' Teeth earn $1. Scissors earn $5. Lawnmower earns $25.', 'teeth/scissors/lawnmower');
    if (thirdPrompt === 'teeth') {
        alert('you chose teeth')
        money++;
        document.querySelector('.money').innerHTML = money;
    } else if (thirdPrompt === 'scissors') {
        alert('you chose scissors')
        money += 5;
        document.querySelector('.money').innerHTML = money;
    } else if (thirdPrompt === 'lawnmower') {
        alert('you chose lawnmower');
        money += 25;
        document.querySelector('.money').innerHTML = money;
    } else {
        console.log('you need more money');
    }
}
};

let continueLawnmower = document.querySelector('.continueAfterLawnmower');
continueLawnmower.addEventListener('click', continueAfterLawnmower)
//next, add fancy lawnmower purchase button

const runFancyLawnmower = () => {
    alert('You have purchased a fancy lawnmower. You may do this once.')
    money -= 250;
    document.querySelector('.money').innerHTML = money;
}
let buyFancyLawnmower = document.querySelector('.fancyLawnmower');
buyFancyLawnmower.addEventListener('click', runFancyLawnmower);