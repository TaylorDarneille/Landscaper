let bank = 0;
const balanceHTMLElement = document.getElementById("bank");
function checker(tools) {
    // if we have enough money in the bank to buy rusty scissors and dont have 1 already
    if (bank >= tools.rustyScissors.buy.cost && tools.rustyScissors.quantity < tools.rustyScissors.limit) {
        tools.rustyScissors.buy.element.disabled = false;
    }
    // if we have enough money in the bank to buy oldtimeylawnmower and have rusty scissors
    if (bank >= tools.oldTimeyLawnmower.buy.cost && tools.rustyScissors.quantity > 0) {
        tools.oldTimeyLawnmower.buy.element.disabled = false;
    }
    // if we have enough money in the bank to buy poweredlawnmower and have old timey
    if (bank >= tools.poweredLawnmower.buy.cost && tools.oldTimeyLawnmower.quantity > 0) {
        tools.poweredLawnmower.buy.element.disabled = false;
    }
    //if we have enough money in bank to hire students and have a powered lawnmower
    if (bank >= tools.starvingStudents.buy.cost && tools.poweredLawnmower.quantity > 0) {
        tools.starvingStudents.buy.element.disabled = false;
    }

    // if conditions that apply to disabling by limit
    // if we already have rusty scissors
    if (tools.rustyScissors.quantity === tools.rustyScissors.limit) {
        tools.rustyScissors.buy.element.disabled = true;
        tools.rustyScissors.use.element.disabled = false;
    }
    // if we already have rusty old timey
    if (tools.oldTimeyLawnmower.quantity === tools.oldTimeyLawnmower.limit) {
        tools.oldTimeyLawnmower.buy.element.disabled = true;
        tools.oldTimeyLawnmower.use.element.disabled = false;
    }
    // if we already have powered lawnmower
    if (tools.poweredLawnmower.quantity === tools.poweredLawnmower.limit) {
        tools.poweredLawnmower.buy.element.disabled = true;
        tools.poweredLawnmower.use.element.disabled = false;
    }
    // if we already have starving students
    if (tools.starvingStudents.quantity === tools.starvingStudents.limit) {
        tools.starvingStudents.buy.element.disabled = true;
        tools.starvingStudents.use.element.disabled = false;
    }
    if (tools.starvingStudents.quantity > 0 && bank >= 1000) {
        // sometimes, alert would get executed before the HTML element representing my bank balance
        // has finished updating. This is why I am adding a delay of 300 ms so the change in balance
        // can reflect before the alert window is shown
        setTimeout(function() {
            alert("You've Won!!");
        }, 300);
    }
}
function increaseBankBalance(amountOfMoney, tools) {
    bank += amountOfMoney; // same as bank = bank + 1
    balanceHTMLElement.innerHTML = bank;
    checker(tools);
}
function decreaseBankBalance(amountOfMoney, tools) {
    bank -= amountOfMoney; // same as bank = bank - 1
    balanceHTMLElement.innerHTML = bank;
    checker(tools);
}
document.addEventListener("DOMContentLoaded", function(event) {   
    // initialize HTML objects
    balanceHTMLElement.innerHTML = bank;
    const useTeeth = document.getElementById("use-teeth");
    const buyScissors = document.getElementById("buy-rusty-scissors");
    const useScissors = document.getElementById("use-rusty-scissors");
    const buyOldTimeyLawnmower = document.getElementById("buy-old-lawnmower");
    const useOldTimeyLawnmower = document.getElementById("use-old-lawnmower");
    const buyPoweredLawnmower = document.getElementById("buy-battery-powered-lawnmower");
    const usePoweredLawnmower = document.getElementById("use-battery-powered-lawnmower");
    const hireTeamStarvingStudents = document.getElementById("hire-team-starving-students");
    const useTeamStarvingStudents = document.getElementById("use-team-starving-students");

    // define our toolbox data structure using an objects and properties
    const tools = {
        teeth: {
            use: {
                element: useTeeth,
                servicePrice: 1,
            },
            buy: null,
            quantity: 1,
            limit: 1,
        },
        rustyScissors: {
            use: {
                element: useScissors,
                servicePrice: 5,
            },
            buy: {
                element: buyScissors,
                cost: 5,
            },
            quantity: 0,
            limit: 1 
        },
        oldTimeyLawnmower: {
            use: {
                element: useOldTimeyLawnmower,
                servicePrice: 50,
            },
            buy: {
                element: buyOldTimeyLawnmower,
                cost: 25,
            },
            quantity: 0,
            limit: 1,
        },
        poweredLawnmower: {
            use: {
                element: usePoweredLawnmower,
                servicePrice: 100,
            },
            buy: {
                element: buyPoweredLawnmower,
                cost: 250,
            },
            quantity: 0,
            limit: 1,
        },
        starvingStudents: {
            use: {
                element: useTeamStarvingStudents,
                servicePrice: 250,
            },
            buy: {
                element: hireTeamStarvingStudents,
                cost: 500,
            },
            quantity: 0,
            limit: 1,
        },
    };

    tools.teeth.use.element.addEventListener("click", function(event) {
        increaseBankBalance(tools.teeth.use.servicePrice, tools);
    });
    tools.rustyScissors.buy.element.addEventListener("click", function(event) {
        tools.rustyScissors.quantity += 1;
        decreaseBankBalance(tools.rustyScissors.buy.cost, tools);
    });
    tools.rustyScissors.use.element.addEventListener("click", function(event) {
        increaseBankBalance(tools.rustyScissors.use.servicePrice, tools);
    });
    tools.oldTimeyLawnmower.buy.element.addEventListener("click", function(event) {
        tools.oldTimeyLawnmower.quantity += 1;
        decreaseBankBalance(tools.oldTimeyLawnmower.buy.cost, tools);
    });
    tools.oldTimeyLawnmower.use.element.addEventListener("click", function(event) {
        increaseBankBalance(tools.oldTimeyLawnmower.use.servicePrice, tools);
    });
    tools.poweredLawnmower.buy.element.addEventListener("click", function(event) {
        tools.poweredLawnmower.quantity += 1;
        decreaseBankBalance(tools.poweredLawnmower.buy.cost, tools);
    });
    tools.poweredLawnmower.use.element.addEventListener("click", function(event) {
        increaseBankBalance(tools.poweredLawnmower.use.servicePrice, tools);
    });
    tools.starvingStudents.buy.element.addEventListener("click", function(event) {
        tools.starvingStudents.quantity += 1;
        decreaseBankBalance(tools.starvingStudents.buy.cost, tools);
    });
    tools.starvingStudents.use.element.addEventListener("click", function(event) {
        increaseBankBalance(tools.starvingStudents.use.servicePrice, tools);
    });
});