//alert("HELP");

//stuff to goog:
//data attributes in html: info passed into html
//updating local storage to change high scores
//set intervals
//

//WHEN site is open
//splash page in html explaining quiz
//button to start quiz

//WHEN start button is pressed
//splash page text display: none
//
//question 1 displays


var questions = [
    {
        question: "question 1",
        answers: [
            { text: "a1", right: false },
            { text: "b1", right: false },
            { text: "c1", right: false },
            { text: "d1", right: true }]
    }, 
    {
        question: "question 2",
        answers: [
            { text: "a2", right: false },
            { text: "b2", right: false },
            { text: "c2", right: false },
            { text: "d2", right: true }]
    },
    {
        question: "question 3",
        answers: [
            { text: "a3", right: false },
            { text: "b3", right: false },
            { text: "c3", right: false },
            { text: "d3", right: true }]
    }
]

var questionsIndex = 0;
var start = document.querySelector("#start");
var intervalID;
var timeRemaining = 15 * questions.length;
var timeEl = document.getElementById("timer");
var quiz = document.querySelector("#quiz");
// var questionsEl = document.querySelector("#questions")


function timer() {
    timeEl.textContent = timeRemaining;
    timeRemaining--;
    if (timeRemaining <= 0) {
        clearInterval(intervalID);
    }
}

start.addEventListener("click", function(){
    hideSplash();
    intervalID = setInterval(timer, 1000);
    startQuiz();
});


function hideSplash() {
    var x = document.getElementById("splash");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function startQuiz() {
    if (questionsIndex < questions.length) {
        var titleEl = document.createElement("h2");
        titleEl.textContent = questions[questionsIndex].question;
        quiz.append(titleEl);

        for (let i = 0; i < questions[questionsIndex].answers.length; i++) {

            var qList = document.createElement("li");
            var qAnswers = document.createElement("button");
            console.log(qAnswers);

            qAnswers.textContent = questions[questionsIndex].answers[i].text;
            qList.append(qAnswers);
            var questionsEl = document.createElement("ul");
            questionsEl.append(qList);
            quiz.append(questionsEl);

            qAnswers.addEventListener("click", function(e){
                
                console.log(questions[questionsIndex].answers[i]);

                if ( questions[questionsIndex].answers[i].right === true ){
                    console.log("correct");
                }
                else {
                    console.log("wrong");
                }

                quiz.innerHTML = "";

                questionsIndex++;

                startQuiz();

            });
            
        }
    }

    else {
        clearInterval(intervalID);
        console.log("game over");
    }
}

// google recursive functions

// make separate highscore.html and highscore.js
// input score info into local storage
// highscore.js gets score info from local storage
// save as array of objects? score and initials
// score = time remaining
