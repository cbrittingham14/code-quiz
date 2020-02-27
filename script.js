var hsEl = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var wrapper = document.getElementsByClassName("wrapper");
var cardEl = document.getElementById("card");
var interval;
var initalTime = 10;


var btn = document.createElement("button");
btn.textContent = "button";
cardEl.append(btn);

interval = setInterval(function(){
    initalTime--
    if (initalTime === 0){
        clearInterval(interval);
    }
    timeEl.textContent = initalTime;
}, 1000)

btn.addEventListener("click", function(){
    console.log("you clicked me");
})


