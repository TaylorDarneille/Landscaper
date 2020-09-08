let lawn;
let dollar;

//Cut grass with teeth
const start = () => {
   dollar = 0;
   lawn = 0;
   askForService();
}
//Prompt the amount for how many lawns and how much money that you have
const lawnDollarAmount = () => {
   alert("You cut " + lawn + " lawns and have $" + dollar + " dollars!");
}

//Asking for whether you would like to have your lawn cut ot not
const  askForService = () => {
   lawnDollarAmount();
   const wantService = prompt("These teeth are sharp AF, you want your grass cut?", "Yes/No");
   if  (wantService === "Yes" || wantService === "yes") {
       buyService();
   } else if (wantService === "No" || wantService === "no") {
       alert ("Fine! We'll take these teeth elsewhere!")
   }
} 

//Cut grass for $1
const buyService = () => {
   alert("That would be $1 dollar please");
}
