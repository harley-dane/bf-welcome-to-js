'use strict';
/*
let input = null;
while (input === null) {
  input = prompt('input something:');
}

alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

let input = '';
while (input === null || input.length < 5) {
  input = prompt('put your name');
}
if (input == null) input = prompt('you cant go like that');

alert('Good job');
