var interval;
var secondsRemaining = 10;
var timeText = document.getElementById("time");
var cardDiv = document.getElementById("card");
var buttonItem = document.createElement("button");

buttonItem.textContent = "Button";
buttonItem.id = "btn1";
console.log(buttonItem);
console.log(cardDiv)
// cardDiv.appendChild(buttonItem);
cardDiv.append(buttonItem);


buttonItem.addEventListener("click", function(){

    console.log("you clicked me");
})



interval = setInterval(function(){
    secondsRemaining--;
    if (secondsRemaining === 0){
        clearInterval(interval);
    }
    timeText.textContent = "Time Remaining:  "+secondsRemaining+" ";
}, 1000)

// console.log(timeText.textContent)