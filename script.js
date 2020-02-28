
//Define variables
var h1El = document.getElementById("highscores-header");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var questionText = document.getElementById("question-text");
var buttonHolder = document.getElementById("button-div");
var interval;
var score;
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

    interval = setInterval(function(){
        initalTime--
        if (initalTime === 0){
            clearInterval(interval);
            alert("You lost! You suck!");
        }
        timeEl.textContent = "Time remaining:  " + initalTime;
    }, 1000)
   
}
const clickHandler = function(){

    if (parseInt(this.id) === questionArray[questionIndex].correctIndex){
        questionIndex++
    } else{
        initalTime-=7;
        timeEl.textContent = "Time remaining:  " + initalTime;
        questionIndex++
    }
    if(questionIndex < questionArray.length){
        setQuestion(questionIndex);
    } else {
        endGame()
    }
}

const setQuestion = function(index){

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

const endGame = function(){

    clearInterval(interval);
    h1El.innerHTML = "Highscores";
    buttonHolder.innerHTML = ""
    questionText.textContent = ""

    score = initalTime;
    var name = prompt("Please enter your initials");


    if(!localStorage.getItem("scores")){

        var scoreObject = [{"score": score, "initials": name}];

        console.log("score object: ", scoreObject);

        localStorage.setItem("scores", JSON.stringify(scoreObject));

        var li = document.createElement("li");
        li.textContent = name + "          " + score;
        questionText.append(li);


    } else{

        var retrievedValues = JSON.parse(localStorage.getItem("scores"))
        retrievedValues.push({"score": score, "initials": name});
        console.log(retrievedValues);

        for(i=0; i<retrievedValues.length; i++){
            var li = document.createElement("li");
            li.textContent = retrievedValues[i]["initials"] + "          " + retrievedValues[i]["score"];
            questionText.append(li);
        }

        localStorage.setItem("scores", JSON.stringify(retrievedValues));
    }
}
init();
setQuestion(questionIndex);






