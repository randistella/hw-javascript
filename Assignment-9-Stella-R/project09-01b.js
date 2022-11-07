"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Randi Stella
      Date:   Nov 11th, 2022

      Filename: project09-01b.js
*/

//retrieve the text of the query string
let query = location.search.slice(1);

//replace the encoded characters in the query string
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

//split the field=name pairs into seperate array items
let cardFields = query.split(/&/g);

for (let items of cardFields) {
    //extract the field names and values
    let nameValue = items.split(/=/);
    let name = nameValue[0];
    let value = nameValue[1];
    
    document.getElementById(name).textContent = value;
}