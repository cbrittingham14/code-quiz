
//Define variables
var hsEl = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var questionText = document.getElementById("question-text");
var interval;
var initalTime = 100;
var questionIndex = 0;
var questionArray = [

    {question: "Commonly used data types in Java script do not include: ",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctIndex: 2,
    },

    {question: "The condition in an if/else statement is enclosed within _____",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correctIndex: 2,
    },

    {question: "Arrays in JavaScript can be used to Store _____",
    answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    correctIndex: 3,
    },

    {question: "String values must be enclosed within what when being assigned to variables?",
    answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctIndex: 2,
    }
];

const init = function(){
    initalTime = 100;
    questionIndex = 0;
    timeEl.textContent = "Time Remaining:  " + initalTime;
    console.log("we initialized");
}

init();


questionText.textContent = questionArray[0].question
// var btn = document.createElement("button");
// btn.textContent = "button";
// cardEl.append(btn);

for(i=0; i< questionArray[0].answers.length; i++){

    var btn = document.createElement("button");
    btn.className = "answer-button";
    btn.textContent = questionArray[0].answers[i];
    btn.id = i
    cardEl.append(btn);
    btn.addEventListener("click", function(){
        console.log(this.id);
        if (parseInt(this.id) === 2||this.id === "2"){
            console.log("correct");
        } else{

            console.log("wrong");
        }
        
    })
}



interval = setInterval(function(){
    initalTime--
    if (initalTime === 0){
        clearInterval(interval);
    }
    timeEl.textContent = initalTime;
}, 1000)




