//console.log('testing testing 123')

 let money= 0;

//!!FUNCTIONS GO HERE
    //all functions that are nested must be written ABOVE where it is called

 let howMuch= () => {
    alert('You now have $'+ money);
 }

 let userWon= () => {
     alert('You have won at the art of landscaping. King. (or Queen)');
 }

let cutWithStudentWorkers= () => {
    let cutStudentWorkers= prompt('Do you want to cut lawns with your hired team of students to earn $250?', 'Yes/No');
    if(cutStudentWorkers=== 'Yes' || cutStudentWorkers=== 'yes'){
        money+=250;
        howMuch();
    }
    if(money>=1000){
        userWon();
    }
}


let buyStudentWorkers= () => {
    let studentWorkers= prompt('You can now afford to pay some starving student workers to help you mow lawns, do you want to pay them $500?', 'Yes/No');
    if(studentWorkers=== 'Yes' || studentWorkers=== 'yes'){
        money-=500;
        howMuch();
    }
    while(studentWorkers=== 'Yes' || studentWorkers=== 'yes'){
        cutWithStudentWorkers();
    }
}


let cutWithFancyMower= () => {
    let cutFancyMower= prompt('Do you want to cut lawns with the fancy new battery-powered lawnmover to earn $100?', 'Yes/No');
    if(cutFancyMower=== 'Yes' || cutFancyMower=== 'yes'){
        money+=100;
        howMuch();
    }
    if(money>= 500){
        buyStudentWorkers();
    }
}


let buyFancyMower= () => {
    let fancyMower= prompt('You can now afford a fancy battery-powered lawnmower for $250, do you want to buy?', 'Yes/No');
    if(fancyMower=== 'Yes' || fancyMower=== 'yes'){
        money-=250;
        howMuch();
    }
    while(fancyMower=== 'Yes' || fancyMower=== 'yes'){
        cutWithFancyMower();
    }
}


let cutWithOldMower= () => {
    let cutOldMower= prompt('Do you want to cut lawns with the old push lawnmower to earn $50?', 'Yes/No');
    if(cutOldMower=== 'Yes' || cutOldMower=== 'yes'){
        money+=50;
        howMuch();
    }
    if(money>= 250){
        buyFancyMower();
    }
}

 let buyOldMower= ()=> {
    let oldMower= prompt('You can now afford an old push lawnmower for $25, do you want to buy?', 'Yes/No');
    if(oldMower=== 'Yes'|| oldMower=== 'yes'){
        money= money-25;
        howMuch();
        //without this while statement, prompt will revert back to cutSci 
        while(oldMower=== 'Yes'|| oldMower=== 'yes'){
            cutWithOldMower();
        }
    }
}

/*----------------------------TRIAL----------------------------------- 
//using only a while statement, rather than the if and then while, doesnt work because it runs cutWithOldMover only once and then loops through this while statement again, subtracting money without a cause
let buyOldMower= ()=> {
    let oldMower= prompt('You can now afford an old push lawnmower for $25, do you want to buy?', 'Yes/No');
    while(oldMower=== 'Yes'|| oldMower=== 'yes'){
        money= money-25;
        howMuch();
        cutWithOldMower();
    }
}
----------------------------TRIAL----------------------------------- */

 let cutWithSci= () => {
    let cutSci= prompt('Do you want to cut the lawn with the rusty scissors to earn $5?', 'Yes/No');
    //using while(money< 25) to get the function to stop running and move onto the if statement down below in the non function code, it stopped but didnt move on, idk why
    if(cutSci=== 'Yes' || cutSci=== 'yes'){
        money= money + 5;
        howMuch();
    }
    //this if statement needs to be here to work and call on buyOldMover function, when this if statement was put in the code below it did not stop the beginning of this function (cutWithSci) to stop running
    if(money>=25){
        buyOldMower();
    //?????? is it possible to have a forcequit of a function so that it moves down to the next step in the body of code below?
    }
}

 //function, that is later nested, to ask user if they want to buy scissors, once they can afford it 
 let buyScissors= () => {
    let rustSci= prompt('You can now afford rusty scissors for $5, do you want to buy them?', 'Yes/No');
    //checks if user said yes to buying scissors and takes away cost from their money
    if(rustSci=== 'Yes' || rustSci=== 'yes'){
        money= money-5;
        howMuch();
        //runs cutWithSci function while user agreed to buy scissors
        //without this while statement, prompt will revert back to og prompt cutLawn
        while(rustSci=== 'Yes' || rustSci=== 'yes'){
            cutWithSci();
        }
    }
}


//BEGINNING: what runs first on homepage
let askCut= null;
while(askCut !== 'cancel'){
    let cutLawn= prompt('Do you want to cut lawns with your teeth to earn $1?', 'Yes/No');
    //cutting lawns with teeth will increase their money by one everytime they say yes 
    if(cutLawn=== 'Yes' || cutLawn=== 'yes'){
        money++;
        howMuch();
        //once user has made $5 or more, run function that will ask if they want to buy rusty scissors 
        if(money>= 5 && money < 25){
            buyScissors();
        }
        //does not move onto to next if statement until the nested function is done running...
        if(money>= 25){ //this if statement only affects code if you are answering cutLawn prompt, not any of the other prompts from other functions, aka.if you buy scissors, this if statement does not affect flow of code
            buyOldMower();
        }
    }else if(cutLawn=== 'No' || cutLawn=== 'no'){
        alert('You can\'t make money if you don\'t cut lawns');
    }    
}


//Question: when you have a nested function, and the nested function has a while or if within it, does it not move on in the body of code until the function is done running? 
//why 