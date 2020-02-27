var hsEl = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var interval;
var initalTime = 10;
var questionArray = [
    {question: "How much would can a wood chuck chuck?",
    answers: ["none", "some", "a lot"],
    correctIndex: 2,
    }
];

console.log(questionArray[0]);
console.log(questionArray[0].correctIndex)
console.log(questionArray[0].answers[questionArray[0].correctIndex]);


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
        
    })
}



interval = setInterval(function(){
    initalTime--
    if (initalTime === 0){
        clearInterval(interval);
    }
    timeEl.textContent = initalTime;
}, 1000)




