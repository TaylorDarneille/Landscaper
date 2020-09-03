let money = 5 ;
let rustyScissor = false;
let lawnmower = false;

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
} else {
    useScissor()
}
}

const getLawnmower = () => {
    let gettingLandmower = prompt("Do you want to buy a Lawnmower?","Yes or No")
    if (gettingLandmower === "Yes"){
        money -= 25
        lawnmower = true 
        alert("Money: $"+ money+" || You have a lawnmower")
        // useLawnmower()
      }else if (gettingLandmower === "No"){
          useScissor()
    }
}

start()