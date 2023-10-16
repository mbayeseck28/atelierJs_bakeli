
console.log('30 Days of JavaScript');
console.log('%d %s of JavaScript', 30, 'Days');
console.log('%c30 Days Of JavaScript', 'color:green'); // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
); // log output green red and yellow text

console.warn('This is a warning');
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
console.warn('Warning is different from error');

console.error('This is an error message');
console.error('We all make mistakes');

const names = ['Asabeneh', 'Brook', 'David', 'John'];
console.table(names);

const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250,
};
console.table(user);

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
console.table(countries);

const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];
console.table(users);

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd('forEach loop');

console.info('30 Days Of JavaScript challenge is trending on Github');
console.info('30 Days Of fullStack challenge might be released');
console.info('30 Days Of HTML and CSS challenge might be released');

console.assert(4 > 3, '4 is greater than 3'); // no result
console.assert(3 > 4, '3 is not greater than 4'); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log('the # is ' + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

const names = ['Asabeneh', 'Brook', 'David', 'John'];
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250,
};
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];

console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countries);
console.groupEnd();

console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();

const func = () => {
  console.count('Function has been called');
};
func();
func();
func();

Function has been called: 1
Function has been called: 2
Function has been called: 3
