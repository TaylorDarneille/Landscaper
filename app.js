let money = 0
let scissors
let pushLawnmower
let BatteryLawnmower
let team
let days = 0
const start =()=>{
    let welcome = prompt("Welcome to the game.","Press Yes to continue and No to stop")
    if(welcome === "Yes"){
      alert("You can cut grass with teeth to earn $1")
        earnMoneyWithTeeth()
    } else (welcome === "No")
    days ++
    alert ("Sorry to see you go today, come back tomorrow when you're ready to work. You have $" + money + ". It's day" + days)
          
        }

start()

   function earnMoneyWithTeeth (){
    while(money < 1000){
        let teeth= prompt("Cut grass with teeth to earn $ 1", "Yes or No")
        if ( teeth === "Yes"){
            money ++
            days ++
            alert("Now you have $" + money + ". It's day " + days)
    }
        if (teeth === "No"){
            alert("Sorry to see you go today, come back tomorrow when you're ready to work. You have $" + money + " It's day  " + days)
             days ++ 
        
        } 
        while(money >=5){
            let check1= prompt("You now have $" + money + ".Would you like to buy rusty scissors?", "Yes or No")
             if(check1==="Yes"){
                 buyScissors()
                 }
                 else(check1==="No")
                 earnMoneyWithTeeth()  
             
                 }
    } 
    
    
   }

earnMoneyWithTeeth()

function buyScissors (){
    alert("You have bought scissors for $ 5 ")
    money-=5
    let useScissors= prompt("You now have scissors. Would you like to use them?","Yes or No")
        if(useScissors === "Yes"){
            earnMoneyWithScissors()

    }else if (useScissors === "No"){
        earnMoneyWithTeeth()
    }
}
buyScissors ()
        
        
function earnMoneyWithScissors (){

    while(money < 25){
        let scissor= prompt("Cut grass with scissors to earn $ 5", "Yes or No")
    if ( scissor === "Yes"){
        money +=5
        days ++
        alert("Now you have $" + money + ". It's day " + days)
    }else if (scissor === "No"){
        alert("Sorry to see you go today, come back tomorrow when you're ready to work. You have $" + money + " It's day  " + days)
         days ++ 
    }
}
    while( money >=25){
    let check2 = prompt("You now have $" + money + ".Would you like to buy a push lawnmower?", "Yes or No")
    if(check2==="Yes"){
       buyPushLawnMower()
    }else if(check2 ==="No"){
        // earnMoneyWithScissors()
    }
}  
    
}
earnMoneyWithScissors()

function buyPushLawnMower (){
    alert("You have bought a push lawnmower for $ 25")
    money-=25
    let usePush= prompt("You now have a push lawnmower. Would you like to use it?","Yes or No")
        if(usePush === "Yes"){
            earnMoneyWithPushLawnmower()

    }else if (usePush=== "No"){
        earnMoneyWithScissors()
    }
}
buyPushLawnMower ()

function earnMoneyWithPushLawnmower (){

    while(money < 250){
        let push= prompt("Cut grass with push lawnmower to earn $ 50", "Yes or No")
    if ( push === "Yes"){
        money +=50
        days ++
        alert("Now you have $" + money + ". It's day " + days)
    }else if (push === "No"){
        alert("Sorry to see you go today, come back tomorrow when you're ready to work. You have $" + money + " It's day  " + days)
         days ++ 
    }
}
    while( money >=250){
    let check3 = prompt("You now have $" + money + ".Would you like to buy a battery powered lawnmower?", "Yes or No")
    if(check3==="Yes"){
       buyBatteryLawnMower()
    }else if(check3 ==="No"){
        earnMoneyWithPushLawnmower()
    }
}  
    
}
earnMoneyWithPushLawnmower()