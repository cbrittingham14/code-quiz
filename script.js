
//Define variables
var h1El = document.getElementById("highscores-header");
var highScoreEl = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var questionText = document.getElementById("question-text");
var buttonHolder = document.getElementById("button-div");
var interval;
var onHighScore = false;
var skipPrompt = false;
var score;
var initalTime = 100;
var questionIndex = 0;

//set question array
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
//reset values when page loads
const init = function(){

    clearInterval(interval);
    highScoreEl.innerHTML = "Highscores";
    initalTime = 100;
    questionIndex = 0;
    timeEl.textContent = "Time Remaining:  " + initalTime;
    onHighScore = false;
    skipPrompt = false;

    interval = setInterval(function(){
        initalTime--
        if (initalTime === 0){
            clearInterval(interval);
            alert("You lost! You suck! No scores for you! But you're gonna try again");
            init()
        }
        timeEl.textContent = "Time remaining:  " + initalTime;
    }, 1000)

    setQuestion(questionIndex);
   
}
//
const clickHandler = function(){

    if (parseInt(this.id) === questionArray[questionIndex].correctIndex){//check if answer was correct
        questionIndex++
    } else{//penalize a wrong answer
        initalTime-=12;
        timeEl.textContent = "Time remaining:  " + initalTime;
        questionIndex++
    }//check if we have reached end of questionArray. end game if so
    if(questionIndex < questionArray.length){
        setQuestion(questionIndex);
    } else {
        endGame()
    }
}

const setQuestion = function(index){

    //reset markup for new question
    buttonHolder.innerHTML = "";
    questionText.textContent = questionArray[index].question;

    //make a button for each answer in the question array object
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

    onHighScore = true;
    highScoreEl.innerHTML = "Restart Quiz";

    //reset markup and timer
    clearInterval(interval);
    h1El.innerHTML = "Highscores";
    buttonHolder.innerHTML = ""
    questionText.textContent = ""

    //get score and initials
    score = initalTime;
    if(!skipPrompt){
        var name = prompt("Please enter your initials");
    } 
    

    //check if scores object exists already
    if(!localStorage.getItem("scores")){

        //create score object (as array) if it does not exist
        var scoreObject = [{"score": score, "initials": name}];
        localStorage.setItem("scores", JSON.stringify(scoreObject));

        //add score to the markup dynamically
        var li = document.createElement("li");
        li.textContent = name + "          " + score;
        questionText.append(li);


    } else {

        //get the score values that are saved in local storage
        var retrievedValues = JSON.parse(localStorage.getItem("scores"))

        if(!skipPrompt){
            retrievedValues.push({"score": score, "initials": name}); // add the current score to the array
        }
        

        //write each element in the array to the markup
        for(i=0; i<retrievedValues.length; i++){
            var li = document.createElement("li");
            li.textContent = retrievedValues[i]["initials"] + "          " + retrievedValues[i]["score"];
            questionText.append(li);
        }

        localStorage.setItem("scores", JSON.stringify(retrievedValues)); //save the new score array
    }
}
init();
setQuestion(questionIndex);

//handel highscore link without new html page
highScoreEl.addEventListener("click", function(){

    event.preventDefault(); //do not refresh page on click

    if(!onHighScore && !localStorage.getItem("scores")){ // make sure there are highscores and you are not already on the page
        alert("No highscores to view! Take the quiz first");
        init();
    } else if(!onHighScore){

        skipPrompt = true; //boolean to ensure invalid scores are not saved
        endGame();

    } else {
        init();
    }
})






