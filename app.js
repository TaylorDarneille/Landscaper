let bank = 0;
const balanceHTMLElement = document.getElementById("bank");
function checker(tools) {
    if (bank >= tools.rustyScissors.buy.cost && tools.rustyScissors.quantity < tools.rustyScissors.limit) {
        tools.rustyScissors.buy.element.disabled = false;
    }
    if (bank >= tools.oldTimeyLawnmower.buy.cost && tools.rustyScissors.quantity > 0) {
        tools.oldTimeyLawnmower.buy.element.disabled = false;
    }
    if (bank >= tools.poweredLawnmower.buy.cost && tools.oldTimeyLawnmower.quantity > 0) {
        tools.poweredLawnmower.buy.element.disabled = false;
    }
    if (bank >= tools.starvingStudents.buy.cost && tools.poweredLawnmower.quantity > 0) {
        tools.starvingStudents.buy.element.disabled = false;
    }

    // if conditions that apply to disabling by limit
    if (tools.rustyScissors.quantity === tools.rustyScissors.limit) {
        tools.rustyScissors.buy.element.disabled = true;
        tools.rustyScissors.use.element.disabled = false;
    }
    if (tools.oldTimeyLawnmower.quantity === tools.oldTimeyLawnmower.limit) {
        tools.oldTimeyLawnmower.buy.element.disabled = true;
        tools.oldTimeyLawnmower.use.element.disabled = false;
    }
    if (tools.poweredLawnmower.quantity === tools.poweredLawnmower.limit) {
        tools.poweredLawnmower.buy.element.disabled = true;
        tools.poweredLawnmower.use.element.disabled = false;
    }
    if (tools.starvingStudents.quantity === tools.starvingStudents.limit) {
        tools.starvingStudents.buy.element.disabled = true;
        tools.starvingStudents.use.element.disabled = false;
    }
    
}
function increaseBankBalance(amountOfMoney, tools) {
    bank = bank + amountOfMoney;
    balanceHTMLElement.innerHTML = bank;
    checker(tools);
}
function decreaseBankBalance(amountOfMoney, tools) {
    bank = bank - amountOfMoney;
    balanceHTMLElement.innerHTML = bank;
    checker(tools);
}
document.addEventListener("DOMContentLoaded", function(event) {   
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
    const tools = {
        teeth: {
            use: {
                element: useTeeth,
                isDisabled: false,
                servicePrice: 1,
            },
            buy: null,
            quantity: 1,
            limit: 1,
        },
        rustyScissors: {
            use: {
                element: useScissors,
                isDisabled: true,
                servicePrice: 5,
            },
            buy: {
                element: buyScissors,
                isDisabled: true,
                cost: 5,
            },
            quantity: 0,
            limit: 1 
        },
        oldTimeyLawnmower: {
            use: {
                element: useOldTimeyLawnmower,
                isDisabled: true,
                servicePrice: 50,
            },
            buy: {
                element: buyOldTimeyLawnmower,
                isDisabled: true,
                cost: 25,
            },
            quantity: 0,
            limit: 1,
        },
        poweredLawnmower: {
            use: {
                element: usePoweredLawnmower,
                isDisabled: true,
                servicePrice: 100,
            },
            buy: {
                element: buyPoweredLawnmower,
                isDisabled: true,
                cost: 250,
            },
            quantity: 0,
            limit: 1,
        },
        starvingStudents: {
            use: {
                element: useTeamStarvingStudents,
                isDisabled: true,
                servicePrice: 250,
            },
            buy: {
                element: hireTeamStarvingStudents,
                isDisabled: true,
                cost: 500,
            },
            quantity: 0,
            limit: 1,
        },
    };
    // document.getElementById("use-teeth").addEventListener("click", function(event) {
    //    increaseBankBalance(1);
    // });
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