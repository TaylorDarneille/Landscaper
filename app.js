let money = 0;


//while (money < 1000) {
    


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

//add fancy lawnmower operation 
const continueAfterFancyLawnmower = () => {
    while (money < 500) {
    fourthPrompt = prompt('Continue the Game. Which tool would you like to use? Remember, you have $' + money + ' Teeth earn $1. Scissors earn $5. Lawnmower earns $25. Fancy Lawnmower earns $100.', 'teeth/scissors/lawnmower/fancy lawnmower');
    if (thirdPrompt === 'teeth') {
        alert('you chose teeth')
        money++;
        document.querySelector('.money').innerHTML = money;
    } else if (fourthPrompt === 'scissors') {
        alert('you chose scissors')
        money += 5;
        document.querySelector('.money').innerHTML = money;
    } else if (fourthPrompt === 'lawnmower') {
        alert('you chose lawnmower');
        money += 25;
        document.querySelector('.money').innerHTML = money;
    } else if (fourthPrompt === 'fancy lawnmower') {
        alert('you chose fancy lawnmower');
        money += 100;
        document.querySelector('.money').innerHTML = money;
    } else {
        console.log('you need more money');
    }
}
};

let continueFancyLawnmower = document.querySelector('.continueAfterFancyLawnmower');
continueFancyLawnmower.addEventListener('click', continueAfterFancyLawnmower);

//add team of students instructions/button
const runStudents = () => {
    alert('You have purchased a team of students. You may do this once.')
    money -= 500;
    document.querySelector('.money').innerHTML = money;
}
let buyStudents = document.querySelector('.students');
buyStudents.addEventListener('click', runStudents); 

//add students prompt
const continueAfterStudents = () => {
    while (money < 1000) {
    fithPrompt = prompt('Continue the Game. Which tool would you like to use? Remember, you have $' + money + ' Teeth earn $1. Scissors earn $5. Lawnmower earns $25. Fancy Lawnmower earns $100. Students earns $250.', 'teeth/scissors/lawnmower/fancy lawnmower/students');
    if (thirdPrompt === 'teeth') {
        alert('you chose teeth')
        money++;
        document.querySelector('.money').innerHTML = money;
    } else if (fithPrompt === 'scissors') {
        alert('you chose scissors')
        money += 5;
        document.querySelector('.money').innerHTML = money;
    } else if (fithPrompt === 'lawnmower') {
        alert('you chose lawnmower');
        money += 25;
        document.querySelector('.money').innerHTML = money;
    } else if (fithPrompt === 'fancy lawnmower') {
        alert('you chose fancy lawnmower');
        money += 100;
        document.querySelector('.money').innerHTML = money;
    } else if (fithPrompt ==='students') {
        alert('you chose a team of students');
        money += 250;
        document.querySelector('.money').innerHTML = money;
    } else {
        console.log('you need more money');
    }
}
    if (money === 1000){
        alert('You Won!!!!');
    }
};
let continueStudentTeam = document.querySelector('.continueStudents');
continueStudentTeam.addEventListener('click', continueAfterStudents);