let playGame;
document.addEventListener('DOMContentLoaded', function () {
    let startButton = document.querySelector('#startButton');

    let start = () => {
        playGame = prompt("Would you like to play a game?", "yes/no");
        let button1 = document.querySelector('#button1');
        if(playGame === "yes") {
        button1.innerHTML = "<button>Click me to chomp grass for a whole day for $1</button>";
    }
    }
    
    startButton.addEventListener("click", start);

});


