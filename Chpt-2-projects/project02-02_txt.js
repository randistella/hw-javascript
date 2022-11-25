/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Randi Stella
      Date:   Nov 25 2022

      Filename: project02-02.js
 */
 
/*create a function with no parameters and declare variable equal to the value input controls of ids*/
function verifyForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    (name && email && phone ) ? //conditional operator
        window.alert("Thank you!") : //true?
        window.alert("Please fill in all fields."); //false
}
/*insert a statement that attaches an event listener to the page element with the id 'submit'*/
    document.getElementById("submit").addEventListener("click", verifyForm); //when click event occurs, run verifyForm function

