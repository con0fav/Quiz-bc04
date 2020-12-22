function showScore() {

    for (let i = 0; i < score.length; i++) {
        var score = score[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("dataIndex", i);

        score.appendChild(li);
        
    }

}