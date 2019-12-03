'use strict';

let loaf = {
  flour: 300,
  water: 150,
};
loaf.hydration = function() {
 return loaf.flour / loaf.water * 100;
};

console.log(loaf.hydration());