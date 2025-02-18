// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
 

  // --- read user input ---

  let name = readString('the-name');
  


  // --- create a message ---


  let greeting = 'Hello  ' +  name + ' !'  + '\n' +  'Good bye' ;


  // --- display the message ---

  displayString('greeting-output', greeting);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
