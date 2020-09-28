// array of questions
var questions = [
    {
        question : "What does CSS stand for?",
        choiceA : "Computer Style Sheets",
        choiceB : "Cascading Style Sheets",
        choiceC : "Compiled Style sheets",
        answer : "B"

    },
    {
        question : "An array is enclosed within?",
        choiceA : "Curly Braces",
        choiceB : "Square Brackets",
        choiceC : "Parantheses",
        answer : "B"

    },
    {
        question : "Which data type returns a value of true or false.",
        choiceA : "Boolean",
        choiceB : "String",
        choiceC : "Int",
        answer : "A"

    },
    {
        question : "Which of the following is not an HTML semantic element? ",
        choiceA : "<article>",
        choiceB : "<form>",
        choiceC : "<span>",
        answer : "C"

    },
    {
        question : "Which html element is used to create an unordered list?",
        choiceA : "ul",
        choiceB : "ol",
        choiceC : "li",
        answer : "A"

    },
]

// list variables
var timerEl = document.getElementById('timer');
var BtnEl = document.getElementById("startBtn");


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
        }
       

    }, 1000);
}

// present the questions
//function quizQuestions() {
  //  let q = questions[];
    //question.innerHTML = "<p>" + q.questions + "</p>";
    //choiceA.innerHTML = q,choiceA;
    //choiceB.innerHTML = q.choiceB;
    //choiceC.innerHTML = q.choiceC;
//}
// add an event listener for when the start button is clicked
BtnEl.addEventListener("click",countDown);
