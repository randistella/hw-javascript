"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Randi Stella
      Date:   10/31/22

      Filename: project07-01.js
*/

 let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

    e.preventDefault();
    
    let regex1 = /[A-Z]/;
    let regex2 = /\d/;
    let regex3 = /[!\$#%]/; 
    
    if (pwd.length < 8) {
        feedback.textContent = "Your password must have at least 8 characters.";
    } else if (regex1.test(pwd) === false) {
        feedback.textContent = "Your password must incldue an uppercase letter.";
    } else if (regex2.test(pwd) === false) {
        feedback.textContent = "Your password must include number.";
    } else if (regex3.test(pwd) === false) {
        feedback.textContent = "Your password must include one of the following: !$#%.";
    } else {
        signupForm.submit();
    }
}
);