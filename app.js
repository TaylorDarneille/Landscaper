
console.log ("Hello landscaper")
const tools ={
    teeth: { 
        cost: 0,
        earnings: 1,
    },
    scissors: {
        cost: 5,
        earnings: 5,

    },
    pushLawnmower: {
        cost: 25,
        earnings: 50,
    },
    electricLawnmower: {
        cost: 250,
        earnings: 100,
    },
    students: {
        cost: 500,
        earnings: 250,
    },
}

let lawnsMowed = 0
let money = 0
let tool = "teeth"
function start () {
    alert("Welcome to Lanscaper! You are working through summer using your teeth!")
    mowLawn()
}
function mowLawn () {
    userInput = prompt(`Do you want to mow lawn using your ${tool}?`, `Yes/No/Restart`)
    if (userInput.toLowerCase() === 'yes'){
      lawnsMowed = lawnsMowed + 1 // lawnsMowed++ equivalent
      money = money + tools[tool].earnings
    


      // "$ not working"
      alert(`nice you made money using your ${tool}. You now have $${money} from mowing ${lawnsMowed}.`)
      upgradeTool()
      mowLawn()
    } else if (userInput.toLowerCase()=== 'no') {
      alert(`You mowed ${lawnsMowed} lawns and made ${money}`)

      if (tool === "students"){
          checkWin()
      } else {
          upgradeTool()
      }
      
      lawnsMowed = 0
      money = 0
      tool = "teeth"
      start ()
    }
}

    function upgradeTool() {
        const keys = Object.keys(tools)
        const currentToolIndex = keys.indexOf(tool)
        const nextTool = keys[currentToolIndex + 1]
        if (money >= tools[nextTool]["cost"]){
            const userUpgrade = prompt(`Awesome you can upgrade your tool to rusty ${nextTool}`, `Yes or No`)

            if (userUpgrade.toLowerCase() === "yes") {
                tool = nextTool
                money = money - tools[nextTool]["cost"]
            } else if (userUpgrade.toLowerCase() === "no"){
                alert(`sticking with ${tool}`)
            } 
            

        }

    }

    function checkWin() {
        if (money >= 1000) {
            alert("you win!")
        }

    }




start ()