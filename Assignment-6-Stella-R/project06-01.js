"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Randi Stella
      Date:  October 16th, 2022

      Filename: project06-01.js
*/

let subButton = document.getElementById("submitButton");

let pwd = document.getElementById("pwd");

let pwd2 = document.getElementById("pwd2");

subButton.addEventListener("click", function() {
    if (pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
    } else {
        pwd.setCustomValidity("");
    }
});