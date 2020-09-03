//console.log('testing testing 123')

 let money= 0;

//!!!!!ALL FUNCTIONS THAT ARE NESTED MUST BE WRITTEN ABOVE WHERE IT IS CALLED!!! 

 //a function that alerts user how much money they have, made so that it can be called within several different functions 
 let howMuch= () => {
     alert('You now have $'+ money);
 }

 //function, that is later nested, to ask user if they want to buy scissors, once they can afford it 
 let buyScissors= () => {
    let rustSci= prompt('You can now afford rusty scissors for $5, do you want to buy them?', 'Yes/No');
    //checks if user said yes to buying scissors and takes away cost from their money
    if(rustSci=== 'Yes' || rustSci=== 'yes'){
        money= money-5;
        howMuch();
    }
}

// prompt('Do you want to cut lawns?', 'Yes/No');
let askCut= null;
while(askCut !== 'cancel'){
    let cutLawn= prompt('Do you want to cut lawns with your teeth?', 'Yes/No');
    //cutting lawns with teeth will increase their money by one everytime they say yes 
    if(cutLawn=== 'Yes' || cutLawn=== 'yes'){
        money++;
        howMuch();
        //once user has made $5 or more, run function that will ask if they want to buy rusty scissors 
        if(money>= 5){
            buyScissors();
        }
    }else if(cutLawn=== 'No' || cutLawn=== 'no'){
        alert('You made no money');
    }    
}


