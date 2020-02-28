
//Define variables
var hsEl = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var questionText = document.getElementById("question-text");
var buttonHolder = document.getElementById("button-div");
var interval;
var score;
var isOver = false;
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
    isOver = false;
    timeEl.textContent = "Time Remaining:  " + initalTime;
    console.log("we initialized");
}
const clickHandler = function(){

    console.log("questionIndex.length ", questionArray.length);
    console.log("questionIndex", questionIndex)

    if (parseInt(this.id) === questionArray[questionIndex].correctIndex){
        questionIndex++
    } else{
        initalTime-=7;
        timeEl.textContent = initalTime;
        questionIndex++
    }
    if(questionIndex < questionArray.length){
        setQuestion(questionIndex);
    } else {
        console.log("thats it, question index, questionarray", questionIndex, "  ", questionArray);
    }
}

const setQuestion = function(index){

    // if(questionIndex === questionArray.length - 1){
    //     isOver = true;
    // }

    buttonHolder.innerHTML = "";
    questionText.textContent = questionArray[index].question;

    for(i=0; i< questionArray[index].answers.length; i++){

        var btn = document.createElement("button");
        btn.className = "answer-button";
        btn.textContent = questionArray[index].answers[i];
        btn.id = i
        buttonHolder.append(btn);
        btn.addEventListener("click", clickHandler)
        
    }
}

init();
setQuestion(questionIndex);

// var btn = document.createElement("button");
// btn.textContent = "button";
// cardEl.append(btn);

// for(i=0; i< questionArray[0].answers.length; i++){

//     var btn = document.createElement("button");
//     btn.className = "answer-button";
//     btn.textContent = questionArray[0].answers[i];
//     btn.id = i
//     cardEl.append(btn);
//     btn.addEventListener("click", function(){
//         console.log(this.id);
//         if (parseInt(this.id) === 2||this.id === "2"){
//             console.log("correct");
//         } else{

//             console.log("wrong");
//         }
        
//     })
// }



interval = setInterval(function(){
    initalTime--
    if (initalTime === 0){
        clearInterval(interval);
    }
    timeEl.textContent = initalTime;
}, 1000)



