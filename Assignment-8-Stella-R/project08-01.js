"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Randi Stella
      Date:   Nov 7th, 2022

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function timer(min,sec) {
    this.minutes = min;
    this.sections = sec;
    this.timeID = null;
}

timer.prototype.runPause = function(timer, minBox, secBox) {
    if (timer.timeID) {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else {
        timer.timeID = window.setInterval(countdown,1000);
    }

    function countdown() {
        if (timer.seconds > 0) {
            timer.seconds--;
        } else if (timer.minutes > 0) {
            timer.seconds = 59;
            timer.minutes--;
        } else {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
        }
        
        minBox.value = timer.minutes;
        secBox.value = timer.seconds;

    }
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

/* instantiate the timer object */
let myTimer = new timer(minBox.value, secBox.value);

/* set the minutes value*/
minBox.onchange = function() {
    myTimer.minutes = minBox.value;
}

/* set the seconds value */
secBox.onchange = function() {
    myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
}