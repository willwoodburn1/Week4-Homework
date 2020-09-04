var startQuizButton = document.querySelector("#startQuizButton");
var count = 60
var countEl = document.querySelector("#count");
var welcomeEl = document.querySelector(".titlePageContentDiv");
var questionsEl = document.querySelector("#questionsAsked");
var questionText = document.querySelector(".theQuestion");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var listButtons = document.querySelectorAll(".listButton");

var resultsDiv = document.querySelector("#resultsPage");
var yourScoreEl = document.querySelector("#yourScore");
var highScoresEl = document.querySelector("#highScores");

var questions = [
    { q: "Who won the 2019 NBA Championship?", a1: "Miami Heat", a2: "Phoenix Suns", a3: "Toronto Raptors", a4: "Milwaukee Bucks", correct: "Toronto Raptors" },
    { q: "Who is nicknamed the Black Mamba?", a1: "LeBron James", a2: "Michael Jordan", a3: "Kevin Durant", a4: "Kobe Bryant", correct: "Kobe Bryant" },
    { q: "Who is known as The Beard", a1: "James Harden", a2: "Kevin Durant", a3: "Kawhi Leonard", a4: "Magic Johnson", correct: "James Harden" },
    { q: "How many MVP's did Michael Jordan win?", a1: "2", a2: "5", a3: "6", a4: "3", correct: "5" },
];

var currentQuestion = 0;

function setTimerText() {
    countEl.textContent = count;
}

var countdownTimer;
startQuizButton.addEventListener("click", function () {
    countdownTimer = setInterval(function () {
        count--;
        setTimerText()

        // show the high scores page
        if (count <= 0) {
            clearInterval(countdownTimer)

        }
    }, 1000);

    // hide the intro button and text 
    welcomeEl.classList.add("hide")
    questionsEl.classList.remove("hide")
    showQuestion();
});

function showQuestion() {
    //show the questions[questionNumber] in questionEl
    console.log(questions[currentQuestion])
    questionText.textContent = questions[currentQuestion].q;
    answer1.textContent = questions[currentQuestion].a1;
    answer2.textContent = questions[currentQuestion].a2;
    answer3.textContent = questions[currentQuestion].a3;
    answer4.textContent = questions[currentQuestion].a4;
}

listButtons.forEach(function (item) {
    item.addEventListener("click", function (event) {
        var text = event.target.textContent
        console.log(currentQuestion)
        // need to check whether the item is valid and we haven't exceed the array count
        if (currentQuestion < questions.length) {
            if (text !== questions[currentQuestion].correct) {
                count -= 10;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) showQuestion()
            else {
                // todo: show the scores and make sure that youre setting and storring
                // those values in local storage
                questionsEl.classList.add("hide")

            }

            showHighScores()



        } else {
            questionsEl.classList.add("hide")
        }

    })
})


var highScoresList = [];

function showHighScores() {
    if (currentQuestion >= questions.length) {
        resultsDiv.classList.remove("hide");
        var score = count
        yourScoreEl.textContent = ("Your score for the quiz is: " + score);
        highScoresList.push(score);
        renderHighScores();

    }

}

function renderHighScores() {
    // Clear todoList element and update todoCountSpan
    highScoresEl.innerHTML = "";


    // Render a new li for each 
    for (var i = 0; i < highScoresList.length; i++) {
        var highScores = highScoresList[i];

        var li = document.createElement("li");
        li.textContent = highScores;
        highScoresEl.appendChild(li);



    }
}


