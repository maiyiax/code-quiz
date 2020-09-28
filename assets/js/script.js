// array of questions
var questions = [
    {
        q: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Cascading Style Sheets", "Compiled Style sheets"],
        a: "Cascading Style Sheet"

    },
    {
        q: "An array is enclosed within?",
        choices: ["Curly Braces","Square Brackets","Parantheses"],
        a: "Square Brackets"

    },
    {
        q: "Which data type returns a value of true or false.",
        choices: ["Boolean","String", "Int"],
        a: "Boolean"

    },
    {
        q: "Which of the following is not an HTML semantic element? ",
        choices: ["<article>","<form>","<span>",],
        a: "<span>"

    },
    {
        q: "Which html element is used to create an unordered list?",
        choices: ["ul","ol","li"],
        a: "ul"

    },
];

// list the variables
var timerEl = document.getElementById('timer');
var BtnEl = document.getElementById("startBtn");
var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var questionEl = document.getElementById("question");
var score = 0;

// create the timer countdown
function countDown() {

    // set the initial time
    var timeLeft = 80;

    // start the countdown using setInterval method and setting the conditions

    var timer = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Time Up!';
            clearInterval(timer);
            // show score
        }


    }, 1000);
};

// Present the quiz questions
function askQuestion() {
    currentQuestion++;

    if (currentQuestion > finalQuestion) {
        endQuiz();
        return;
    }

   for (var qLoop = 0; qLoop <questions[currentQuestion].choices.length; qLoop++) {
       if ()
   }

};

function showQuestion() {
    // remove the initial display
    quizSection.style.display = "none";
    askQuestion();
    quiz.style.display = "block";
    loopQuestions();
    countDown();
};

// create a loop to go through the array
function loopQuestions() {
    currentQuestion++;

    if (currentQuestion < finalQuestion) {
        endQuiz();
        return;
    } 
};

// display a message with the score when the game is over
function endQuiz() {
    clearInterval(timer);
};

// store the scores to localStorage
function storeScore() {
    localStorage.setItem("highscore", score);
    pullScore();
};

// view scores stored on localStorage
//function pullScore() {

// add an event listener for when the start button is clicked
BtnEl.addEventListener("click", showQuestion);
