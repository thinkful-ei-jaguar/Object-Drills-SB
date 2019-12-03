
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

const eat = {
  meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(eat.meals[3]);
  
const friends = {
  name: 'Kristy',
  jobTitle: 'bartender'
};
const friendsTwo = {
  name: 'Nalani',
  jobTitle: 'student', 
  boss: "Brandon"
};
const friendsThree = {
  name: 'Brandon',
  jobTitle: 'buddy', 
  boss:'Kristy'
};
let bigList = [friends, friendsTwo, friendsThree];

for(let i = 0; i < bigList.length; i++){

  console.log(bigList[i]);
  console.log("${title} ${name} reports to ${boss}.")
 
}



