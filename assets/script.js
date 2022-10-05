//countdown timer
// const startingMinutes = 1;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     countdownEl.innerHTML = '$(minutes):$(seconds)';
//     time--;
// }

// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//     countdownEl ("1:00");
// }
//event listener

//start game
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}
const targetDiv = document.getElementById("second");

//