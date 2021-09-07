// var randomLoc = Math.floor(Math.random() * 5);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;
// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

// while (isSunk == false) {
//   guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//   if (guess < 0 || guess > 6) {
//     alert("Please enter a number between 0 and 6");
//   } else {
//     guesses++;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("HIT!");
//       hits++;
//       if (hits == 3) {
//         isSunk = true;
//         alert("You sank my battleship!");
//       }
//     } else {
//       alert("MISS!");
//     }
//   }
// }

// let stats =
//   "You took " +
//   guesses +
//   " guesses to sink the battleship, " +
//   "which means your shooting accuracy was " +
//   3 / guesses +
//   " or " +
//   ((3 / guesses) * 100).toFixed(2) +
//   "%";
// // alert(stats);
// document.write(stats);


var scores = 
[60, 50, 60, 58, 54, 54, 18, 72,
58, 50, 52, 72, 54, 48, 69, 11,
34, 55, 51, 69, 18, 52, 44, 51,
72, 69, 64, 66, 55, 69, 52, 61,
46, 31, 57, 72,  55, 52, 44, 18,
41, 53, 55, 61, 72, 51, 62, 44];

let list;
let highestScore = 0;

for(i = 0; i < scores.length; i++) {
// list = "Bubble solution #" + i + " scores :" + scores[i];
list = `Bubble solution # ${i}, scores : ${scores[i]}`;
document.write(list + '<br>');
// console.log(list);
if(scores[i] > highestScore) {
    highestScore = scores[i];
    }
}

let bestSolutions = [];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] == highestScore) {
    bestSolutions.push(i)
    }
}

let report = 
`
Bubbles tests: ${scores.length}<br>
Highest bubble score: ${Math.max(...scores)}<br>
Solutions 1 with highest score: ${scores.indexOf(Math.max(...scores))}<br>

Solutions 2 with highest score: ${bestSolutions}
`;


document.write( '<br>' + report);