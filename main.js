
'use strict';

let loaf = {
  flour: 300,
  water: 150,
};
loaf.hydration = function() {
  return loaf.flour / loaf.water * 100;
};

console.log(loaf.hydration());

const fun = {
  foo: 'fennecFox',
  bar: 'macaw',
  fum: 'monkey',
  quux: 'owl',
  spam: 'croc'
};

for (const property in fun) {
    console.log(`${property}: ${fun[property]}`);
}



  
