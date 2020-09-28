// array of questions
var questions = [
    {
        q : "What does CSS stand for?",
        choiceA : "Computer Style Sheets",
        choiceB : "Cascading Style Sheets",
        choiceC : "Compiled Style sheets",
        a : "B"

    },
    {
        q : "An array is enclosed within?",
        choiceA : "Curly Braces",
        choiceB : "Square Brackets",
        choiceC : "Parantheses",
        a: "B"

    },
    {
        q : "Which data type returns a value of true or false.",
        choiceA : "Boolean",
        choiceB : "String",
        choiceC : "Int",
        a : "A"

    },
    {
        q : "Which of the following is not an HTML semantic element? ",
        choiceA : "<article>",
        choiceB : "<form>",
        choiceC : "<span>",
        a : "C"

    },
    {
        q : "Which html element is used to create an unordered list?",
        choiceA : "ul",
        choiceB : "ol",
        choiceC : "li",
        a : "A"

    },
]

// list the variables
var timerEl = document.getElementById('timer');
var BtnEl = document.getElementById("startBtn");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var question = document.getElementById("question");
var score = 0;

// function that will start the quiz and timer countdown
function countDown() {
    
    // set the initial time
    var timeLeft = 5;

    // start the countdown using setInterval method and setting the conditions

    var timer = setInterval(function() {
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
}

// Present the quiz questions
function askQuestion () {
    var q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function showQuestion () {
    // remove the initial display
    quizSection.style.display = "none";
    askQuestion();
    quiz.style.display = "block";
    loopQuestions();
    countDown();
}

// create a loop to go through the array
function loopQuestions () {
    currentQuestion++;

    if (currentQuestion < finalQuestion) {
        endQuiz();
        return;
    } else {
        quiz.innerHTML += "<div class='loop' id=" + currentQuestion +"></div>";
    }
}

// display a message with the score when the game is over
function endQuiz () {
    clearInterval(timer);

    var results = `
    <h2>Quiz Over!</h2>
    <h2>Your final score is ` + score + ` /100!</h2>
    <input type-"text" id="name" placeholder="Enter your name">
    <button onclick="saveScore()">Save Score</button>`;

    document.getElementById("quizSection").innerHTML = results;
}
// add an event listener for when the start button is clicked
BtnEl.addEventListener("click",showQuestion);
