let money = 5 ;
let rustyScissor = false;
let lawnmower = false;
let lawnmowerBattery = false;
let starvingStudents = false;

const start = () => {
    useTeeth()
    
}

const useTeeth = () => {
    while( rustyScissor === false){
        let usingTeeth = prompt("Want to spend the day cutting grass with your teeth?","Yes or No")
        if (usingTeeth === "Yes" && (money > 5 || money < 5) && rustyScissor === false){
             money++
            alert("Money: $"+ money)
            start()
        }else if (usingTeeth === "Yes" && money === 5){
            getScissor()
        } else if (usingTeeth === "No"){
            start()
        }    
    }
    if ( rustyScissor === true){
        useScissor()
    }
}

const getScissor = () => {
    let gettingScissor = prompt("Do you want to buy a pair of rusty scissors?","Yes or No")
    if (gettingScissor === "Yes"){
        money -= 5
        rustyScissor = true 
        alert("Money: $"+ money+" || You have a pair of rusty scissors")
        start()
      }else if (gettingScissor === "No"){
          start()
    }
}

const useScissor = () => {
    while( lawnmower === false){
    let usingScissors = prompt("Want to spend the day cutting grass with your rusty scissors?","Yes or No")
    if (usingScissors === "Yes" && (money > 25 || money < 25)){
      money += 5
      alert("Money: $"+ money)
      useScissor()
      }else if (usingScissors=== "Yes" && money === 25){
            ("Money: $"+ money+" || You have a pair of rusty scissors")
           getLawnmower()
       } else if ( usingScissors === "No"){
           useScissor()

        }
    }
    if ( lawnmower === true){
        useLawnmower()
    }
}

const getLawnmower = () => {
    let gettingLandmower = prompt("Do you want to buy a Lawnmower?","Yes or No")
    if (gettingLandmower === "Yes"){
        money -= 25
        lawnmower = true 
        alert("Money: $"+ money+" || You have a lawnmower")
          useLawnmower()
      }else if (gettingLandmower === "No"){
          useScissor()
    }
}

const useLawnmower = () => {
    while( lawnmowerBattery === false){
        let usingLawnmower = prompt("Want to spend the day cutting grass with your lawnmower?","Yes or No")
        if (usingLawnmower === "Yes" && (money > 250 || money < 250)){
          money += 50
          alert("Money: $"+ money)
          useLawnmower()
          }else if (usingLawnmower=== "Yes" && money === 250){
                ("Money: $"+ money+" || You have a lawnmower")
               getLawnmowerTwo()
           } else if ( usingLawnmower === "No"){
               useLawnmower()
    
            }
       }
        if ( lawnmowerBattery === true){
            useLawnmowerTwo()
        }
}
const getLawnmowerTwo = () => {
    let gettingLandmowerTwo = prompt("Do you want to buy a battery powered Lawnmower?","Yes or No")
    if (gettingLandmowerTwo === "Yes"){
        money -= 250
        lawnmowerBattery = true 
        alert("Money: $"+ money+" || You have a battery powered lawnmower")
          useLawnmowerTwo()
      }else if (gettingLandmowerTwo === "No"){
          useLawnmower()
    }
}

const useLawnmowerTwo = () => {
    while( starvingStudents === false){
        let usingLawnmowerTwo = prompt("Want to spend the day cutting grass with your battery powered lawnmower?","Yes or No")
        if (usingLawnmowerTwo === "Yes" && (money > 500|| money < 500)){
          money += 100
          alert("Money: $"+ money)
          useLawnmowerTwo()
          }else if (usingLawnmoweTwo === "Yes" && money === 500){
                ("Money: $"+ money+" || You have a battery powered landmower")
               getStarvingStudents()
           } else if ( usingLawnmower === "No"){
               useLawnmowerTwo()
    
            }
       }if ( starvingStudents === true){
        useStarvingStudents()
    }
}
const getStarvingStudents = () => {
    let gettingStarvingStudents = prompt("Do you want to buy a battery powered Lawnmower?","Yes or No")
    if (gettingStarvingStudents === "Yes"){
        money -= 500
        starvingStudents = true 
        alert("Money: $"+ money+" || You have a group of starving students")
          useLawnmowerTwo()
      }else if (gettingStarvingStudents === "No"){
          useLawnmowerTwo()
    }
}
start()
