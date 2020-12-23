// add variables for score form, submit score button


init();

function init() {
    var savedScore = JSON.parse(localStorage.getItem("score"));

    if (savedScore !== null) {
        score = savedScore;
    }

    showScore();
}

function showScore() {

    for (let i = 0; i < score.length; i++) {
        var score = score[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("dataIndex", i);

        score.appendChild(li);   
    }
}

function storeScore() {
    localStorage.setItem("score", JSON.stringify(score));
}