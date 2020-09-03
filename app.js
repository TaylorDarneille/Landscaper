//console.log('testing testing 123')

 let money= 0;

//!!FUNCTIONS GO HERE
    //all functions that are nested must be written ABOVE where it is called

 //a function that alerts user how much money they have, made so that it can be called within several different functions 
 let howMuch= () => {
     alert('You now have $'+ money);
 }

 let buyOldMower= ()=> {
    let oldMower= prompt('You can now afford an old push lawnmower for $25, do you want to buy?', 'Yes/No');
    if(oldMower=== 'Yes'|| oldMower=== 'yes'){
        money= money-25;
        howMuch();
        //cutWithOldMower();
    }
}

 let cutWithSci= () => {
    let cutSci= prompt('Do you want to cut the lawn with the rusty scissors to make money faster?', 'Yes/No');
    //using while(money< 25) to get the function to stop running and move onto the if statement down below in the non function code, it stopped but didnt move on, idk why
    if(cutSci=== 'Yes' || cutSci=== 'yes'){
        money= money + 5;
        howMuch();
    }
    //this if statement needs to be here to work and call on buyOldMover function, when this if statement was put in the code below it did not stop this function (cutWithSci) to stop running
    if(money>=25){
        buyOldMower();
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
        while(rustSci=== 'Yes' || rustSci=== 'yes'){
            cutWithSci();
        }
    }
}


//BEGINNING: what runs first on homepage
// prompt('Do you want to cut lawns?', 'Yes/No');
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
        if(money>= 25){
            buyOldMower();
        }
    }else if(cutLawn=== 'No' || cutLawn=== 'no'){
        alert('You can\'t make money if you don\'t cut lawns');
    }    
}


