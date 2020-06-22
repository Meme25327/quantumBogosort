const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Takes the unsorted list, declares a variable unsortedList which contains the unsorted list
rl.question('Please input the unsorted list (seperated by commas, like so: 1, 3, 4, 2, 5) ', (unsortedList) => {
  console.log(`The unsorted list is: ` + unsortedList);
rl.close();})

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = new Array (unsortedList);
shuffle(arr);
console.log(arr);














//do not touch
console.log("randomized: " + toBeSorted)