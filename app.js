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
    checker();
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
      checker();
    }
  }
  buyUseSciss.addEventListener("click", buyUseScissors);

  //function for buying mower and using, if bought once, cannout buy again
  let boughtMower = false;
  const buyUseMow = document.querySelector("#button3");
  const buyUseMower = () => {
    if(boughtMower === false) {
      boughtMower = true;
      bankRoll = bankRoll - 25;
      updateBank();
      document.querySelector("#button3").innerHTML = "<button>Cut grass with mower to earn $50 a day</button> ";
    } else {
      bankRoll += 50;
      updateBank();
      checker();
    }
  }
  buyUseMow.addEventListener("click", buyUseMower);

  //function for buying Emower and using, if bought once, cannout buy again
  let boughtEmower = false;
  const buyUseEmow = document.querySelector("#button4");
  const buyUseEmower = () => {
    if(boughtEmower === false) {
      boughtEmower = true;
      bankRoll = bankRoll - 250;
      updateBank();
      document.querySelector("#button4").innerHTML = "<button>Cut grass with E-Mower to earn $100 a day</button> ";
    } else {
      bankRoll += 100;
      updateBank();
      checker();
    }
  }
  buyUseEmow.addEventListener("click", buyUseEmower);

   //function for hiring and using students, if bought once, cannout buy again
   let hiredStudents = false;
   const hireUseStud = document.querySelector("#button5");
   const hireUseStudents = () => {
     if(hiredStudents === false) {
       hiredStudents = true;
       bankRoll = bankRoll - 500;
       updateBank();
       document.querySelector("#button5").innerHTML = "<button>Get the students to cut grass and earn $250</button> ";
     } else {
       bankRoll += 250;
       updateBank();
       checker();
     }
   }
   hireUseStud.addEventListener("click", hireUseStudents);


  //function to check if the next upgrade is ready for purchase
  function checker () {
    if (bankRoll >= 5 && counter === 0) {
      const butt2 = document.querySelector("#button2");
      butt2.innerHTML = "<button>Click me to buy Scissors for $5</button>";
      counter ++;
    } else if (bankRoll >=25 && counter === 1){
      const butt3 = document.querySelector("#button3");
      butt3.innerHTML = "<button>Click me to buy Mower for $25</button>";
      counter ++;
    } else if (bankRoll >=250 && counter === 2){
      const butt4 = document.querySelector("#button4");
      butt4.innerHTML = "<button>Click me to buy Electric Mower for $250</button>";
      counter ++;
    } else if (bankRoll >=500 && counter === 3){
      const butt5 = document.querySelector("#button5");
      butt5.innerHTML = "<button>Hire Students to work for you for $500</button>";
      counter ++;
    } else if (bankRoll >= 1000 && counter === 4) {
      const winner = document.querySelector("#landscaper");
      winner.innerText = "You Win!!!!";
    }
  }
});
