let money = 5 ;
let rustyScissor = false;

const start = () => {
    alert("You can cut grass with teeth!")
    useTeeth()
    
}

const useTeeth = () => {
    let usingTeeth = prompt("Want to spend the day cutting grass with your teeth?","Yes or No")
    if (usingTeeth === "Yes" && (money > 5 || money < 5)){
      money++
      alert("Money: $"+ money)
      start()
    } else if (usingTeeth === "Yes" && money === 5){
        getScissor()
    } else if (usingTeeth === "No"){
        start()
 }
}

const getScissor = () => {
    let gettingScissor = prompt("Do you want to buy a pair of rusty scissors?","Yes or No")
    if (gettingScissor === "Yes"){
        money -= 5
        rustyScissor = true 
        alert("Money: $| "+ money+" You have a pair of rusty scissors")
        start()
      }else if (gettingScissor === "No"){
          start()
    }
}
start()

