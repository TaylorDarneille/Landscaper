let money = 0


/*while (money < 1000) {
    
}*/

const opening = () => {
    
    while (money < 5) {
        
let teethPrompt = prompt('Welcome to Landscaping. You have $' + money + ' . What tool would you like to use?', )
    if (teethPrompt === 'teeth') {
        alert('you will be using your teeth for the day');
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