var dollar = 0;
var scissor =false;

let moneyPocket = document.getElementById("money");
let moneyLog = document.createElement("p");
moneyLog.textContent= dollars;
moneyPocket.appendChild(moneyLog);

const moneyUpdate = ()=>{
    console.log(moneyLog.innerHTML=dollars)
};

teeth.onclick = function(){
    dollars ++;
    moneyUpdate()
};