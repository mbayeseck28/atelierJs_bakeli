/* Promise */

/* A Promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.*/

//As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

/* Callbacks */
/*To understand promise very well let us understand callback first. Let's see the following callbacks.*/
//- call back
/*Let us see a callback function which can take two parameters. The first parameter is err and the second is result.
If the err parameter is false, there will not be error other wise it will return an error.*/

//In this case the err has a value and it will return the err block.

//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback('It did not go well', skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};
doSomething(callback); //It did not go well
//In this case the err is false and it will return the else block which is the result.

const doSomething1 = (callback) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback(false, skills);
  }, 2000);
};

doSomething1((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
}); //["HTML", "CSS", "JS"]

/* Promise constructor */
/*We can create a promise using the Promise constructor. We can create a new promise using the key word `new`
followed by the word `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback`
function. The promise callback function has two parameters which are the _`resolve`_ and _`reject`_ functions.*/

// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success');
  reject('failure');
});

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject('Something wrong has happened');
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error)); //["HTML", "CSS", "JS"]

// The above promise has been settled with resolve.
// Let us another example when the promise is settled with reject.

// Promise
const doPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.includes('Node')) {
      resolve('fullstack developer');
    } else {
      reject('Something wrong has happened');
    }
  }, 2000);
});

doPromise1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error)); // Something wrong has happened

/* Fetch API */
/*The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar
to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
In this challenge we will use fetch to request url and APIS. In addition to that let us see
demonstrate use case of promises in accessing network resources using the fetch API.*/

const url = 'https://restcountries.com/v2/all'; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

/* Async and Await */
//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
const square = async function (n) {
  return n * n;
};
square(2); //Promise {<resolved>: 4}

/*The word _async_ in front of a function means that function will return a promise.
The above square function instead of a value it returns a promise.*/

//How do we access the value from the promise? To access the value from the promise, we will use the keyword _await_.

const square1 = async function (n) {
  return n * n;
};
const value = await square1(2);
console.log(value); // 4

/*Now, as you can see from the above example writing async in front of a function create a promise and
to get the value from a promise we use await. Async and await go together, one can not exist without the other.*/

//Let us fetch API data using both promise method and async and await method.

//- promise
const url1 = 'https://restcountries.com/v2/all';
fetch(url1)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

//- async and await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log('===== async and await');
fetchData();
