let playGame;
let bankRoll = 0;
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#startButton");

  //function to start game when click
  const start = () => {
    const button1 = document.querySelector("#button1");
    button1.innerHTML = "<button>Click me to chomp grass for a whole day for $1</button>";
    const landscaper = document.createElement("h1");
    landscaper.innerText = "Landscaper";
    landscaper.setAttribute("id", "landscaper")
    startButton.parentNode.replaceChild(landscaper, startButton);
    
  };
  //function to fadeout elements
  // function fadeOut(fadee) {
  //   setInterval(function() { hide(fadee); }, 100);
  // }
  // function hide(fadee) {
  //   let opacity = Number(window.getComputedStyle(fadee).getPropertyValue("opacity"));
  //   if (opacity > 0) {
  //     opacity = opacity - 0.1
  //     fadee.style.opacity = opacity;
  //   } else {
      
      
  //     // fadeIn(landscaper);
  //     clearInterval(intervalID);
  //   }
  // }
  //function to fadein the title
  // function fadeIn(waker) {
  //   setInterval(function() { reveal(waker); }, 100);
  // }
  // function reveal(waker) {
  //   let opacity = Number(window.getComputedStyle(waker).getPropertyValue("opacity"));
  //   if (opacity < 1) {
  //     opacity = opacity + 0.1;
  //     waker.style.opacity = opacity;
  //   } else {
  //     clearInterval(intervalID);
  //   }
  // }
  startButton.addEventListener("click", start);
  //function to update bankroll
  function updateBank () {
    bank.innerText = bankRoll;
  }
  
  //button for cutting grass with teeth
  let teethButton = document.querySelector("#button1");
  let bank = document.querySelector("#bankRoll");
  let counter = 0;
  const cutTeeth = () => {
    bankRoll++;
    updateBank();
    if(bankRoll === 5 && counter === 0){
      const butt2 = document.querySelector("#button2");
      butt2.innerHTML = "<button>Click me to buy Scissors for $5</button>";
      butt2.setAttribute("id", "button2");
      counter ++;
    }
  };
  teethButton.addEventListener("click", cutTeeth);
  //function for buying scissors and using, if bought once, cannout buy again
  let boughtScissors = false;
  const buyUseSciss = document.querySelector("#button2");
  const buyUseScissors = () => {
    if(boughtScissors === false) {
      boughtScissors = true;
      bankRoll = bankRoll - 5;
      updateBank();
      document.querySelector("#button2").innerHTML = "<button>Cut grass with scissors to earn $5 a day</button> ";
    } else {
      bankRoll += 5;
      updateBank();
    }
  }
  buyUseSciss.addEventListener("click", buyUseScissors);
});
