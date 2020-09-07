//Alert is use to make a statement
//prompt is use to make a decision
alert("Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.");
let money = 0;
let workDay = 0;



const start = () => {
    
alert("Its a New day")
const choice =  prompt("Do you want to work today", "Yes/No") 
    if(choice === "Yes") {
        increaseDay()
        increaseMoney()
        MakeMoney()
    }
    else if(choice === "No") {
        alert("Try again Tomorrow")
     }
    console.log(start)
     
} 

MakeMoney = () => {
    if(money === 2) {
        alert("You made 2 dollar", "Now you have " + money) 
    } else if(money === 3) {
       alert("You made 3 dollars", "Now you have " + money) 
    } else if(money === 3) {
       alert("You made 3 dollars", "Now you have " + money) 
    } else if(money === 4) {
       alert("You made 4 dollars", "Now you have " + money) 
    }  else if(money === 5) {
const buyingChoice = prompt("You made 5 dollars and can now buy a rusty scissors. Do you want too?", "Yes/No") 
    }
}
const landscaper = prompt("Are you currently using your teeth", "Yes/No");
    if(landscaper === "Yes") {
        money++
        workDay++
        alert("You made a dollar. now you have $" + money)
        //prompt always a string   
    } else if(landscaper === "No") {
        workDay++
        alert("You in for a rough day on workDay " + workDay)
    }
    


const increaseDay = () => {
        workDay++
        console.log(increaseDay)
    }
const increaseMoney = () => {
        money++
        console.log(increaseMoney)
    }    
for(var i = 0; i <= 5; i++) {
        start()
    }
    