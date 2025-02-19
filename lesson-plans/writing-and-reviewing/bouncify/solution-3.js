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

const bouncifyText = () => {
      let text = ""

      while (text === null || text === "") {
        text = prompt("Enter some text to bouncify:");

        if(text === null){
          alert("there is no escape")
        }
        if(text === ""){
          alert("no empty input, try again.")
        }
      }

      let result = '';
      let makeUpperCase = true;
      let i = 0;

      while (i < text.length) {
        const char = text[i];

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

        i++;
      }

      alert("Bouncified Text: " + result);
    }

    // Call the function to bouncify text
    bouncifyText();