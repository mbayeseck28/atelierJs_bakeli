/* Data types and Variables */
/* undefined, null, boolean, string, symbol, number, and object */

var myName = 'Beau';
myName = 8;
let ourName = 'freeCodeCamp';
const pi = 3.14;

/* Storing values with assignment operator */
var a;
var b = 2;
a = 7;
console.log(a);

/* uninitialized variables */
var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + ' String !';

/* Adding numbers */
var sum = 10 + 10;
console.log(sum);
var difference = 45 - 33;
console.log(difference);

/* Find lenght of string */
// Example
var firstNameLenght = 0;
var firstName = 'Ada';

firstNameLenght = firstName.length;

// Set up
var lastNameLenght = 0;
var lastName = 'Lovelace';

lastNameLenght = lastName.length;
console.log(lastNameLenght);

/* Store multiple values with arrays */
// Example
var ourArray = ['John', 23];

var myArray = ['Quincy', 1];

/* Nested Arrays */
var ourArray = [
  ['the universe', 42],
  ['evrything', 101010],
];

/* Access multi-dimensional arrays with indexes */
// Setup
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[2][1];
console.log(myData); // resultat : 8

/* Manipulate arrays with push() */
var ourArray = ['Stimpson', 'J', 'cat'];
ourArray.push(['happy', 'joy']);
// Le tableau devient : ["Stimpson", "J", "cat", ["happy", "joy"]]

/* Manipulate arrays with pop() */
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// L'élément du tableau retiré est 3, et le tableau devient : [1,2]

/* Manipulate arrays with shift() */
var ourArray = ['Stimpson', 'J', 'cat'];
var removedFromOurArray = ourArray.shift();
// Le tableau devient : ["J", "cat"]
ourArray.unshift('Happy');
// Le tableau devient : ["Happy", "J", "cat"]

/* Passing values to Functions with arguments */
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // le resultat donne 5

/* Global Scope and functions */
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += 'oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

/* Else if statement */
function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}
testElseIf(7);

/* GOLF CODE */
var names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home',
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));
