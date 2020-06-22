const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Takes the unsorted list, declares a variable unsortedList which contains the unsorted list
rl.question('Please input the unsorted list (seperated by commas, like so: 1, 3, 4, 2, 5) ', (unsortedList) => {
  console.log(`The unsorted list is: ` + unsortedList);
rl.close();

var toBeSorted = new Array (unsortedList)
console.log("The following list will be sorted: " + toBeSorted)

toBeSorted.sort(function (randomization) { return 0.5 - Math.random() })

if (toBeSorted.length > 0) {
randomization(toBeSorted)
} else {
  return;
}















//do not touch
console.log(toBeSorted)})