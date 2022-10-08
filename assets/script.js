//start button
const startButton = document.getElementById('start-btn')
//Clicking answer button will take you to next question
const answerButton = document.getElementById('answer-btn')
//question container
const questionContainerElement = document.getElementById ('question-container')
//question element
const questionElement = document.getElementById('question')
//answer buttons element
const answerButtonsElement = document.getElementById('answer-buttons')

//variable to show our shuffled and current questions
let shuffledQuestions, currentQuestionIndex

//event listener when clicking on the start button
startButton.addEventListener('click', startGame)
answerButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//function when the start of the game begins
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// calling next question and show 
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//pulls a question from our array of questions
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.deataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    answerButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


const targetDiv = document.getElementById("second");

// Function to select the answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.deataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.deataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    answerButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//create list of questions in the form of an array, with answers as another array.
const questions = [
    {
        question: 'What is...',
        answer: [
            { text: 'A', correct: true },
            { text: 'B', correct: false }  
        ]
    }
]

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