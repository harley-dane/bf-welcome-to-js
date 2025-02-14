'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
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
