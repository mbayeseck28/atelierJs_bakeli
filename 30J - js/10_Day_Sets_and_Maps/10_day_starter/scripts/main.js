/* Set */
/*Set is  a collection of elements. Set can only contains unique elements.
Let us see how to create a set in the section below.*/

/* Creating an empty set */
const companies = new Set();
console.log(companies);

/* Creating set from array */
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages) {
  console.log(language);
}

/* Adding an element to a set */
const companies1 = new Set(); // creating an empty set
console.log(companies1.size); // 0

companies1.add('Google'); // add element to the set
companies1.add('Facebook');
companies1.add('Amazon');
companies1.add('Oracle');
companies1.add('Microsoft');
console.log(companies1.size); // 5 elements in the set
console.log(companies1);

//We can also use loop to add element to a set.
const companies2 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];
setOfCompanies = new Set();
for (const company of companies2) {
  setOfCompanies.add(company);
}

/* Deleting an element a set */
//We can delete an element from a set using a delete method.
console.log(companies.delete('Google'));
console.log(companies.size); // 4 elements left in the set

/* Checking an element in the set */
//The has method can help to know if a certain element exists in a set.
console.log(companies.has('Apple')); // false
console.log(companies.has('Facebook')); // true

/* Clearing the set */
//It removes all the elements from a set.
companies.clear();
console.log(companies);

const counts = [];
const count = {};
for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

//Other use case of set. For instance to count unique item in an array.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers); //Set(5) {5, 3, 2, 9, 4}

/* Union of sets */
//To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);

console.log(C);

/* Difference of sets */
//To find an the difference between two sets can be achieved using filter.
//Lets find the different of set A and set B (A \ B)
let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let A1 = new Set(a);
let B1 = new Set(b);

let c1 = a.filter((num) => !B.has(num));
let C1 = new Set(c);

console.log(C);

/* Map */
//Creating an empty Map
const map = new Map();
console.log(map);

/* Creating an Map from array */
countries2 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const map1 = new Map(countries2);
console.log(map1);
console.log(map1.size);

/* Adding values to the Map */
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap);
console.log(countriesMap.size);

/* Getting a value from Map */
console.log(countriesMap.get('Finland'));

/* Checking key in Map */
//Check if a key exists in a map using _has_ method. It returns _true_ or _false_.
console.log(countriesMap.has('Finland')); //true

//Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}
