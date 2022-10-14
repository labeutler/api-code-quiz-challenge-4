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
   //create form document
const form = document.querySelector('#highScore')
const initials = document.querySelector('#initial');
const score = document.querySelector('#time')
   

//variable to show our shuffled and current questions
let shuffledQuestions, currentQuestionIndex

//event listener when clicking on the start button
startButton.addEventListener('click', startGame)
//Add event listener for when start game begins, timer begins
startButton.addEventListener('click', countDown)
//countdown timer


function countDown() {
   var timeleft = 60;
       var downloadTimer = setInterval(function(){
           if(timeleft <= 0) {
               clearInterval(downloadTimer);
               document.getElementById('countdown').innerHTML = 'Finished';
           } else {
               document.getElementById('countdown').innerHTML = timeleft + ' seconds';
           }
           timeleft -= 1;
       }, 1000);
   }
   // document.getElementById('wrong').addEventListener('click', function() {
   //     sec -= 5;
   //     document.getElementById('countDown').innerHTML='00:'+sec;
   // });

//add event listener for answer buttons
answerButton.addEventListener('click', function(event){
   console.log(event)
   if (event.target.nodeName === 'BUTTON'){
       var choice = event.target.innerText
       var correct = questions[currentQuestionIndex].correct
       if (choice === correct){
           //timer needs to be added here
           document.getElementById('countdown').innerHTML = 'finished'
           currentQuestionIndex++
           //display next question
           displayQuestion()
       } else {
           //timer will need to deduct time here
           currentQuestionIndex++
           displayQuestion()
           // document.getElementById('wrong').addEventListener('click', function() 
           {
               document.getElementById('wrong').innerHTML
               sec -= 5;
               document.getElementById('countDown').innerHTML='00:'+sec;
           }
           
       }
   }
})
//create list for high scores
let initial = document.getElementById('initial').value;
console.log(initial);
let time = document.getElementById('countDown').value;
console.log(time);


//function when the start of the game begins
function startGame() {
   console.log('started')
   startButton.classList.add('hide')
   document.getElementById('first').classList.add('hide')
   document.getElementById('second').classList.remove('hide')
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
       document.getElementById('third').classList.remove('hide')
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

//Create a function to submit initials for final score
// function submit() {
//     console.log ('submit')

// }
//create a function to unhide final score page and enter initials
// function endGame() {
//     console.log('return')
//     // initialsELement.classList.add('hide')
//     document.getElementById('second').classList.add('hide')
//     document.getElementById('third').classList.remove('hide')
// }
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


function setStatusClass(element, correct) {
   clearStatusClass(element)
   if (correct) {
       element.classList.add('correct')
   } else {
       element.classList.add('wrong')
   }
}

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