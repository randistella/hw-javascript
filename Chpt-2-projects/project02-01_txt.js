/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Randi Stella
      Date:   Nov 24th 2022

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
     return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
      return degree*1.8 + 32;
}

/* add onchange event handler to the element by with id cValue
attach an anonymous function to the event handler. within the anonymous function, declare a variable named cDegree equal to the value of the element with the id cValue. set the value of the element with the id fValue to the value returned by the CelsiusToFarenheit function using cDegree as the parameter value*/
document.getElementById("cValue").onchange = function() {
        let cDegree = document.getElementById("cValue").value;
        document.getElementById("fValue").value = 
            CelsiusToFahrenheit(cDegree);
    }

/*same as above but switching fValue and cValue*/
document.getElementById("fValue").onchange = function() {
        let fDegree = document.getElementById("fValue").value;
        document.getElementById("cValue").value = 
            FahrenheitToCelsius(fDegree);
}
