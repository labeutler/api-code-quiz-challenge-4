//start button
const startButton = document.getElementById('start-btn')
//Clicking answer button will take you to next question
const answerButton = document.getElementById('answer-buttons')
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
//add event listener for answer buttons
answerButton.addEventListener('click', function(event){
    console.log(event)
    if (event.target.nodeName === 'BUTTON'){
        var choice = event.target.innerText
        var correct = questions[currentQuestionIndex].correct
        if (choice === correct){
            //timer needs to be added here
            currentQuestionIndex++
            //display next question
            displayQuestion()
        } else {
            //timer will need to deduct time here
            currentQuestionIndex++
            displayQuestion()
        }
    }

})


// answerButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

//function when the start of the game begins
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    document.getElementById('first').classList.add('hide')
    document.getElementById('second').classList.remove('hide')
    // document.getElementById('second').classList.add('hide')
    // document.getElementById('third').classList.remove('hide')
    
    
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    //call display question
    displayQuestion()
}
//display question (make function)
function displayQuestion() {
    //when no more questions
    if (currentQuestionIndex === questions.length){
        document.getElementById('second').classList.add('hide')
        return
    }
    //target something in HTML
    document.getElementById('question').innerText = questions [currentQuestionIndex].question
    //pull answers by targeting buttons in html
    document.getElementById('btn1').innerText = questions [currentQuestionIndex].answer[0]
    document.getElementById('btn2').innerText = questions [currentQuestionIndex].answer[1]
    document.getElementById('btn3').innerText = questions [currentQuestionIndex].answer[2]
    document.getElementById('btn4').innerText = questions [currentQuestionIndex].answer[3]
}

// calling next question and show 
// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

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
// function resetState() {
//     answerButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }


// const targetDiv = document.getElementById("second");

// Function to select the answer
// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.deataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.deataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     answerButton.classList.remove('hide')
//     } else {
//         startButton.innerText = 'restart'
//         startButton.classList.remove('hide')
//     }
// }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

//create list of questions in the form of an array, with answers as another array.
const questions = [
    {
        question: 'What do we use to create an aesthetically appealing web page?',
        answer: ['A: HTML', 'B: JavaScript', 'C: CSS', 'D: Java'],
        correct: 'C: CSS'
    },
    {
        question: 'Which one of the following headings does NOT belong?',
        answer:['A: h2', 'B: h4', 'C: h3', 'D: h8'],
        correct: 'D: h8'
    },
    {
        question: 'What is being referred to when you make a Web Design fit on any platform you are running it on?',
        answer: ['A: Center', 'B: Justify', 'C: Responsive', 'D: Class'],
        correct: 'C: Responsive'
    },
    {
        question: 'When creating an Array, what of the following do you use?',
        answer: ['A: ()', 'B: []', 'C: {}', 'D: <>'],
        correct: 'B: []'
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