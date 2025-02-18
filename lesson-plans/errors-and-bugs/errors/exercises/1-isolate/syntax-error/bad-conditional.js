

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: VM310:27 Uncaught SyntaxError 
  message:Unexpected token '{'

  location:27

  life cycle: phase

  the mistake: using else 2 times

  the fix(es): using else one time
*/

let userName = 'ind';

if (userName.length < 3) {
  console.log('too short');
} else if  (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


