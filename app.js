//console.log('testing testing 123')

/*You are starting a landscaping business,
 but all you have are your teeth.

Using just your teeth, you can spend the day cutting lawns
 and make $1. You can do this as much as you want. */

 let money= 0;

//function that will ask user if they want to cut lawns 

// prompt('Do you want to cut lawns?', 'Yes/No');
let askCut= null;
while(askCut !== 'stop'){
    let cutLawn= prompt('Do you want to cut lawns with your teeth?', 'Yes/No');
    if(cutLawn=== 'Yes'){
        money++;
        alert('You have $'+ money);
    }else if(cutLawn=== 'No'){
        alert('You made no money');
    }    
}

//  //code to make increments to money
// // if(cutLawn=== 'Yes'){
// //     money++;
// //}


// //function to display money
// const displayMoney= () => {

// }
