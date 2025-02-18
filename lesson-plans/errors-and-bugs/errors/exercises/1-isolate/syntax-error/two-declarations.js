'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name:Identifier 
  message:'tree' has already been declared

  location:22

  life cycle: execution phase

  the mistake: delared tree 2 times

  the fix(es): delares tree one time
*/

let tree = 'oak';

let tree1 = 'birch';

console.log(tree, tree1)
