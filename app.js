let money;

const start = () => {
  money = 0;
  alert("You are starting a landscaping business, but all you have are your teeth. You currently have $" + money)
  startCutting();
};

//Start the landscaping game
const  startCutting = () => {
  const go = alert("Let's use your teeth to begin cutting!");
  money++;
  alert("Great! You now have $" + money);
  const moreMoney = prompt("Keep going?", "Yes or No?");
  if (moreMoney === "Yes" || moreMoney === "yes") {
      money++;
      keepGoing();
  } else if (moreMoney === "No" || moreMoney === "no"){
      stop();
  }
}

const stop = () => {
    // const areYouSure = prompt("Are you sure you don't want to keep going?", "Yes or No")
    // if (areYouSure === "Yes" || areYouSure === "yes"){
        alert("Tired of using your teeth, huh? You finished with $" + money)
    // } else {
    //     keepGoing();
    // }
    
}

//Unlimited teeth cutting
const keepGoing = () => {
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
    if (moreMoney === "Yes" || moreMoney === "yes") {
        money++;
        alert("Great! You now have $" + money);
        money++;
        restart();
    } else if (moreMoney === "No" || moreMoney === "no"){
        stop();
        }  
};

const restart = () => {
    const moreMoney = prompt("Keep going?", "Yes or No?");
    if (moreMoney === "Yes" || moreMoney === "yes") {
        keepGoing();
    } else if (moreMoney === "No" || moreMoney === "no"){
        stop();
        } 
}


// // // Buy supplies
// const shop = () => {
//   const supplies = prompt ("Welcome to Ralphs! Do you need to buy syrup or waffles?", "Syrup or Waffles or Both");
//   if(supplies === "Syrup") {
//   buySyrup();
// } else if (supplies === "Waffles"){
//   buyWaffles();
// } else if(supplies === "Both") {
//   buyBoth();
// };
// };

// // // Checkout

// const buySyrup = () => {
//   const purchaseSyrup = prompt("Syrup is on aisle 9. Buy Now?", "Yes or No");
//   if (purchaseSyrup === "Yes") {
//     syrup++;
//     money -=5;
//     alert ("You now have " + syrup + "and $" + money + ". Time to make some waffles!");
//   } else if (purchaseSyrup === "No") {
//     alert ("You still have $" + money + ". It seems like you don't want any waffles. See you later!");
//   };
// };

// const buyWaffles = () => {
//   const purchaseWaffles = prompt("Waffles are on aisle 15. Buy Now?", "Yes or No")
//   if (purchaseWaffles === "Yes") {
//     waffles++;
//     money -=5;
//     alert ("You now have " + waffles + "and $" + money + ". Time to make some waffles!")
//   } else if (purchaseWaffles === "No") {
//       alert ("You still have $" + money + ". It seems like you don't want any waffles. See you later!")
//     }
// };
