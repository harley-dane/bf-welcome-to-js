'use strict';

/*let input = prompt('enter something with 5 characters:');

let message = '';
if (input === null) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let input  = prompt("System need your info for Protection purposes")

let message = ""
if(input === null){
   message =  "put your info dud! :(!"
}else if(input.length < 4){
  message = "too short character"
}else if (input.length === 4){
  message = "Thank you " + input
}else {
  message = "too long"
}

alert(message)