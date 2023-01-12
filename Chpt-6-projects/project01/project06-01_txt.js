"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

const subButton = document.getElementById("submitButton");

const pwd = document.getElementById("pwd");

const pwd2 = document.getElementById("pwd2");

subButton.addEventListener("click", function() {
    if (pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
    } else {
        pwd.setCustomValidity("");
    }
});
