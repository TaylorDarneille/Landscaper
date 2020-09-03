let money = 0
let tools=0
const start =()=>{

    let haveTeeth = prompt("Do you have teeth", "Yes or No")
    if(haveTeeth === "Yes"){
        money ++
        alert("You have $" + money)
    }else if( haveTeeth === "No"){
        alert("Cannot play game")
    }
}
start()

const cutGrass =()=>{

    alert("Everytime you click you earn $" + money)
    "cut grass and earn $1"
    for(let money =0; money< 5; money ++){
        money += 1
    }
}

cutGrass()