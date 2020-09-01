var startQuizButton = document.querySelector("#startQuizButton");
var count = 60
var countEl = document.querySelector("#count");


function setTimerText() {
    countEl.textContent=count;
}

startQuizButton.addEventListener("click", function () {
    var countdown = setInterval(function() {
        if (count > 0) {
        count --;
        setTimerText()
        }
        
    }, 1000);
    
})









// startQuizButton.setInterval(() => {
    
// }, 1000);


// startQuizButton.addEventListener("click", function() {
//     count --;
//     setTimerText();

// })