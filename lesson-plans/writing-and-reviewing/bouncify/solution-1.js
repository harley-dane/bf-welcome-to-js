'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let inputText = ""

while(inputText === null || inputText === ""){
inputText = prompt("enter some text, the letters will be bouncified")

if(inputText === null){
  alert("there is no escape!")
}
if(inputText === ""){
  alert("no empty input, try again.")
}
}

const  bouncifyText = (text) => {

let result = '';
let makeUpperCase = true;

for (let char of text) {
  if (char.match(/[a-z]/i)) { // Check if the character is a letter
    if (makeUpperCase) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    makeUpperCase = !makeUpperCase; // Alternate between uppercase and lowercase
  } else {
    result += char; // Add non-letter characters as they are
  }
}

  return result;
}

// Example usage:
const bouncifiedText = bouncifyText(inputText);

alert(bouncifiedText); 


