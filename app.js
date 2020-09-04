let money = 0
let tools=0
const start =()=>{

    let haveTeeth = prompt("Do you have teeth", "Yes or No")
    if(haveTeeth === "Yes"){
        money
        alert("You have $" + money)
    }else if( haveTeeth === "No"){
        alert("Sorry to see you go, bye")
       return;
    }
} 
    
start()

// follows steps to earn money till the player can buy next tool

const earnMoneyWithTeeth =()=>{

    alert("Everytime you click yes you earn $1")
    "cut grass and earn $1"

    let day1= prompt("Cut grass to earn $ 1", "Yes or No")
    if ( day1 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day1 === "No"){
        alert("Sorry to see you go, bye")
        return

    }

    let day2= prompt("Welcome to day 2. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day2 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day2 === "No"){
        alert("Sorry to see you go, bye")
    }

    let day3= prompt("Welcome to day 3. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day3 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day3=== "No"){
        alert("Sorry to see you go, bye")
    }

    let day4= prompt("Welcome to day 4. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day4 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day4=== "No"){
        alert("Sorry to see you go, bye")
    }

    let day5= prompt("Welcome to day 5. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day5 === "Yes"){
        money ++
        alert("Congratulations!!! You now have " + money)
    }if ( day5=== "No"){
        alert("Sorry to see you go, bye")
    }
 
     }

     earnMoneyWithTeeth()     