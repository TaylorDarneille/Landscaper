let money = 0


/*while (money < 1000) {
    
}*/

const opening = () => {
    
    while (money < 5) {
        
let teethPrompt = prompt('Welcome to Landscaping. You have $' + money + ' . What tool would you like to use?', )
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

//continues the game after buying the pair of rusty scissors 