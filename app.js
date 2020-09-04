let money = 0
let scissors=0
let lawnmower=0
const start =()=>{

    let haveTeeth = prompt("Do you have teeth", "Yes or No")
    if(haveTeeth === "Yes"){
        money
        alert("You have $" + money)
    }else if( haveTeeth === "No"){
        alert("Sorry to see you go, bye")
       
    }
    return
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
        return
    }

    let day3= prompt("Welcome to day 3. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day3 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day3=== "No"){
        alert("Sorry to see you go, bye")
        return
    }

    let day4= prompt("Welcome to day 4. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day4 === "Yes"){
        money ++
        alert("Now you have $" + money)
    }if ( day4=== "No"){
        alert("Sorry to see you go, bye")
        return
    }

    let day5= prompt("Welcome to day 5. Do you want to cut grass to earn another $ 1", "Yes or No")
    if ( day5 === "Yes"){
        money ++
        alert("Congratulations!!! You now have $" + money)
    }if ( day5=== "No"){
        alert("Sorry to see you go, bye")
        return
    }
 
     }

     earnMoneyWithTeeth()   
     
     // Give option to buy scissors
     const buyScissors = ()=>{
         let buyTool1= prompt("Welcome to day 6! You now have $ " + money + " .Would you like to buy scissors?", "Yes or No")
            if(buyTool1 === "Yes"){
                money -= 5
                scissors ++
                alert ("You now have $ " + money + " money and " + scissors +" scissors")
            }
            if(buyTool1 === "No"){
                alert("You will keep earning money with teeth. Are you sure?")
            }
            return
         }
    buyScissors ()

     const earnMoneyWithScissors = ()=>{

        let day6= prompt("Welcome to day 6. Cut grass to earn $ 5", "Yes or No")
            if ( day6 === "Yes"){
        money += 5
        alert("Now you have $ " + money)
            }if ( day6 === "No"){
        alert("Sorry to see you go, bye")

            }
        let day7= prompt("Welcome to day 7. Cut grass to earn $ 5", "Yes or No")
            if ( day7 === "Yes"){
            money += 5
            alert("Now you have $" + money)
            }if ( day6 === "No"){
            alert("Sorry to see you go, bye")
    
            }
        
        let day8= prompt("Welcome to day 8. Cut grass to earn $ 5", "Yes or No")
            if ( day8 === "Yes"){
            money += 5
            alert("Now you have $" + money)
            }if ( day8 === "No"){
            alert("Sorry to see you go, bye")
          }
        let day9= prompt("Welcome to day 9. Cut grass to earn $ 5", "Yes or No")
            if ( day9 === "Yes"){
            money += 5
            alert("Now you have $" + money)
            }if ( day9 === "No"){
            alert("Sorry to see you go, bye")
            }
        let day10= prompt("Welcome to day 10. Cut grass to earn $ 5", "Yes or No")
            if ( day10 === "Yes"){
            money += 5
            alert("Now you have $" + money)
            }if ( day10 === "No"){
            alert("Sorry to see you go, bye")
            }

          return 
     } 

     earnMoneyWithScissors ()

     const buyLawnmower = ()=>{
        let buyTool2= prompt("Welcome to day 11! You now have $" + money + "Would you like to buy a lawnmower?", "Yes or No")
           if(buyTool2 === "Yes"){
               money -= 25
               lawnmower ++
               alert ("You now have $" + money + " money and " + lawnmower +" lawnmower")
           }
           if(buyTool2 === "No"){
               alert("You will keep earning money with scissors. Are you sure?")
           }
           return
        }
   buyLawnmower()

   const earnMoneyWithLawnmower = ()=>{

    let day11= prompt("Welcome to day 11 . Cut grass to earn $ 50", "Yes or No")
        if ( day11 === "Yes"){
    money += 50
    alert("Now you have $ " + money)
        }if ( day11 === "No"){
    alert("Sorry to see you go, You have" + money)

        }
    let day12= prompt("Welcome to day 12. Cut grass to earn $ 50", "Yes or No")
        if ( day12 === "Yes"){
        money += 50
        alert("Now you have $" + money)
        }if ( day12 === "No"){
        alert("Sorry to see you go, You have" + money)

        }
    
    let day13= prompt("Welcome to day 13. Cut grass to earn $ 50", "Yes or No")
        if ( day13 === "Yes"){
        money += 50
        alert("Now you have $" + money)
        }if ( day13 === "No"){
        alert("Sorry to see you go, You have" + money)
      }
    let day14= prompt("Welcome to day 14. Cut grass to earn $ 50", "Yes or No")
        if ( day14 === "Yes"){
        money += 50
        alert("Now you have $" + money)
        }if ( day14 === "No"){
        alert("Sorry to see you go, You have" + money)
        }
    let day15= prompt("Welcome to day 15. Cut grass to earn $ 50", "Yes or No")
        if ( day15 === "Yes"){
        money += 50
        alert("Now you have $" + money)
        }if ( day15 === "No"){
        alert("Sorry to see you go, You have" + money)
        }

      return 
 } 

 earnMoneyWithLawnmower ()
