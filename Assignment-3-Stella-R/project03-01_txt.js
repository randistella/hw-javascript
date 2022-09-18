/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Randi Stella
      Date:  Sept 18th, 2022

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i=0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal)
}

//function to add values of selected check boxes and display total
function calcTotal() {
    let orderTotal = 0;
    
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }
    
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }