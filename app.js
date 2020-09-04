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
    fadeOut(startButton);
    //startButton.parentNode.replaceChild(landscaper, startButton);
  };
  //function to fadeout elements
  function fadeOut(fadee) {
    setInterval(function() { hide(fadee); }, 100);
  }
  function hide(fadee) {
    let opacity = Number(window.getComputedStyle(fadee).getPropertyValue("opacity"));
    if (opacity > 0) {
      opacity = opacity - 0.1;
      fadee.style.opacity = opacity;
    } else {
      startButton.remove();
      fadeIn(landscaper);
      clearInterval(intervalID);
    }
  }
  //function to fadein the title
  function fadeIn(waker) {
    setInterval(function() { reveal(waker); }, 100);
  }
  function reveal(waker) {
    let opacity = Number(window.getComputedStyle(waker).getPropertyValue("opacity"));
    if (opacity < 1) {
      opacity = opacity + 0.1;
      waker.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }
  startButton.addEventListener("click", start);

  let teethButton = document.querySelector("#button1");
  let bank = document.querySelector("#bankRoll");
  let cutTeeth = () => {
    bankRoll++;
    bank.innerText = bankRoll;
  };
  teethButton.addEventListener("click", cutTeeth);
});
