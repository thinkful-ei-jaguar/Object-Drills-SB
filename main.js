
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

function createCharecter({name, nickname, race, origin, attack, defense})




//Iterating through objects
function makeStudentsReport(data) {

  //create an empty array
  const final = [];
  //iterate through the entire array
  for (let i = 0; i < data.length; i++) {
   //new variable item is assigned to value as passed
    const item = data[i];
    final.push(`${item.name}: ${item.grade}`);
  }
  return final;
  }

  function enrollInSummerSchool(students) {
    //we want to return an array so we must create empty1
  const final = [];
  //loop through all of the data
  for (let i = 0; i < students.length; i++) {
    //name and course pulled from students data, status is already assigned, it is & pushing 2 final
    final.push({
      name: students[i].name, 
      status: 'In Summer school', 
  course: students[i].course,
    }); 
  }
  return final;
  }

  function findById(items, idNum) {
    //pass through each item
  for (let i=0; i<items.length; i++) {
   // if item being passed is = id num, it should return that value
    if (items[i].id === idNum) {
    return items[i];}
  }
  }
  

