/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Randi Stella
      Date: Sept 6th, 2022

      Filename: project02-01.js
 */

//set up f to c calculation
function FarenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

//set up c to f calculation 
function CelsiusToFahrenheit(degree) {
      return degree*1.8 + 32;

}

//event handler cValue
document.getElementById("cValue").onchange = function() {
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree); 
}

//event handler fValue
document.getElementById("fValue").onchange = function() {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
}