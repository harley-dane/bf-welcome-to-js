'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name:chrome
  message:Cannot access 'isValidUserName' before initialization

  location: 22

  life cycle:

  the mistake: 'isValidUserName' before initialization

  the fix(es):'isValidUserName' after initialization
*/

const userName = 'chiobin';


if (userName.length > 3) {
  
  console.log('userName:', typeof userName, userName);
}

let isValidUserName = true

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
