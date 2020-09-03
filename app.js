let money = 0;
const start = () => {
    alert("You can cut grass with teeth!");
    useTeeth();
    
}
const useTeeth = () => {
    let usingTeeth = prompt("Want to spend the day cutting grass with your teeth?","Yes or No")
    if (usingTeeth === "Yes"){
      money++
      alert("Money: $"+ money)
      start()
    } else if (usingTeeth === "No"){
        start()
    }
}
start()