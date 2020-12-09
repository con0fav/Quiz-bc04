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
        question: "What record label released Birth of a New Day by 2814?",
        answers: [
            { text: "Fortune 500", right: false },
            { text: "Dream Catalogue", right: true },
            { text: "Business Casual", right: false },
            { text: "Beer on the Rug", right: false }]
    }, 
    {
        question: "Who is generally considered to have pioneered Mallsoft?",
        answers: [
            { text: "Cat Sys Corp", right: true },
            { text: "Windows 96", right: false },
            { text: "Hantasi", right: false },
            { text: "Cosmic Cycler", right: false }]
    },
    {
        question: "Hit Vibes was an album made by which artist?",
        answers: [
            { text: "Saint Pepsi", right: false },
            { text: "Luxury Elite", right: false },
            { text: "Macintosh Plus", right: false },
            { text: "waterfront dining", right: true }]
    },
    {
        question: "Far Side Virtual is an example of which subgenre?",
        answers: [
            { text: "Mallsoft", right: false },
            { text: "Late Night Lo-fi", right: false },
            { text: "Eccojams", right: false },
            { text: "Utopian Virtual", right: true }]
    },
    {
        question: "What is the most popular format for physical vaporwave albums?",
        answers: [
            { text: "CD", right: false },
            { text: "Minidisc", right: false },
            { text: "Cassette", right: true },
            { text: "Vinyl", right: false }]
    }
]

var questionsIndex = 0;
var start = document.querySelector("#start");
var intervalID;
var timeRemaining = 15 * questions.length;
var timeEl = document.getElementById("timer");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#gameover");
var replay = document.querySelector("#replay");
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

replay.addEventListener("click", function(){
    window.location.reload();
});


function hideSplash() {
    var x = document.getElementById("splash");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function showOver() {
    var y = document.getElementById("gameover");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
}

function startQuiz() {

    // document.getElementById("gameover").style.display == "none";    


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

        showOver();
    }
}





function saveScore() {
    var name



}



// google recursive functions

// make separate highscore.html and highscore.js
// input score info into local storage
// highscore.js gets score info from local storage
// save as array of objects? score and initials
// score = time remaining
