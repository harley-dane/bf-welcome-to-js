'use strict';

/*let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);*/

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let input = prompt("Your first and last name is required");

let greeting = "";

if(input === null){
  greeting = "HI! Put your name";
}else {
  greeting = "Wellcome " + input  + " !";
}

alert(greeting);