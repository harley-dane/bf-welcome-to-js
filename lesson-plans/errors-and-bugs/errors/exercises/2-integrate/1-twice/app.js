// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';


  /*
  const environment = {

  name: "Ana",
  message: "Make friend",

  location: " Antwerp",

  lifeCycle: 90,

  theMistake: "Not saving money",

  theFix: "Start to save money"
  }
  */


whenFormDataChanges('user-data', () => {

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---


 displayString(displayString, readString, repeated  )
});





