
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
  listOne:['Shannon, Princess', 'Kristy, Bartender']
};
const friendsTwo = {
  listTwo:['Nalani, Student', 'Brandon, Student']
};
const friendsThree = {
  listThree:['Riot, Businessman', 'Evie, Dog']
};
let bigList = [friends.listOne, friendsTwo.listTwo, friendsThree.listThree];

for(let i = 0; i < bigList.length; i++){

  console.log(bigList[i]);
 
 }



