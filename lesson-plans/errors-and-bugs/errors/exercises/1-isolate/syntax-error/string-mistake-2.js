

'use strict';

console.log('--- in execution phase ---');


/*
  environment:chrome

  name:Uncaught ReferenceError
  message:quotesInQuotes is not defined

  location: 25

  life cycle:  execution phase

  the mistake: quotesInQuotes was miss spelled 

  the fix(es): correct the quotesInQuotes spelling
*/

const quotesInQuotes = 'remind yourself  ' + 'I can do this!  ' +' at least once a day';

console.log(quotesInQuotes)


