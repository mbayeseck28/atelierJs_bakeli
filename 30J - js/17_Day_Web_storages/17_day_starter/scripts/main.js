/* HTML5 Web Storage */
//There are two Web Storage objects:
/*
- sessionStorage
- localStorage
*/

/*localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time,
data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.*/

/*The keys and the values are always strings (note that, as with objects, integer keys will be
automatically converted to strings).*/

/* sessionStorage */
/*sessionStorage is only available within the browser tab or window session. It’s designed to store data
in a single web page session. That means if the window is closed the session data will be removed.
Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.*/

/* localStorage */
/*The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no
expiration data. The data will be available on the browser even after the browser is closed. localStorage is kept
even between browser sessions. This means data is still available when the browser is closed and reopened, and also
instantly between tabs and windows.*/
//There are five methods to work on local storage:
// _setItem(), getItem(), removeItem(), clear(), key()_

/* HTML5 Web Storage Objects */
//HTML web storage provides two objects for storing data on the client:

/*
- window.localStorage - stores data with no expiration date
- window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
*/

//Web Storage objects:

/*
- _localStorage_ - to display the localStorage object
- _localStorage.clear()_ - to remove everything in the local storage
- _localStorage.setItem()_ - to store data in the localStorage. It takes a key and a value parameters.
- _localStorage.getItem()_ - to display data stored in the localStorage. It takes a key as a parameter.
- _localStorage.removeItem()_ - to remove stored item form a localStorage. It takes key as a parameter.
- _localStorage.key()_ - to display a data stored in a localStorage. It takes index as a parameter.
*/

/* Setting item to the localStorage */
//We store data in the localStorage using the _localStorage.setItem_ method.
localStorage.setItem('key', 'value');

//- Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh'); // since the value is string we do not stringify it
console.log(localStorage); //Storage {firstName: 'Asabeneh', length: 1}

//- Storing number in a local storage
localStorage.setItem('age', 200);
console.log(localStorage); //Storage {age: '200', firstName: 'Asabeneh', length: 2}

//- Storing an array in a localStorage. If we are storing an array, an object or object array,
//we should stringify the object first. See the example below.
const skills = ['HTML', 'CSS', 'JS', 'React'];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage); //Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}

let skills1 = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 },
];
let skillJSON = JSON.stringify(skills1);
localStorage.setItem('skills', skillJSON);

//-Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userText);

/* Getting item from localStorage */
//We get data from the local storage using _localStorage.getItem()_ method.
//syntax
localStorage.getItem('key');

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills2 = localStorage.getItem('skills');
console.log(firstName, age, skills2); //'Asabeneh', '200', '['HTML','CSS','JS','React']'

//As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.
let skillsObj = JSON.parse(skills2, undefined, 4);
console.log(skillsObj); //['HTML','CSS','JS','React']

/* Clearing the localStorage */
//The clear method, will clear everything stored in the local storage
localStorage.clear();
