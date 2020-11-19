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

var tester = document.querySelector(".tester")
var block = document.querySelector(".testDiv")
var word = document.querySelector(".testH")

var arrOfObj = [
    {
        question: " ",
        answers: [
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: true }]
    }, 
    {
        question: " ",
        answers: [
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: true }]
    },
    {
        question: " ",
        answers: [
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: false },
            { text: "a", right: true }]
    },
]


function hideSplash() {
    var x = document.getElementById("splash");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


// tester.addEventListener("click", () => {
//     block.style.display = "block"
//         word.innerHTML = arrOfObj[0].question
// })

// console.log(arrOfObj[0].question)