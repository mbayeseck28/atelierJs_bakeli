/*Document Object Model (DOM) - Day 1*/
//Getting Element
/*We can access already created element or elements using JavaScript. To access or get elements we use different
methods. The code below has four _h1_ elements. Let us see the different methods to access the _h1_ elements.*/

//<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class="title" id="first-title">
      First Title
    </h1>
    <h1 class="title" id="second-title">
      Second Title
    </h1>
    <h1 class="title" id="third-title">
      Third Title
    </h1>
    <h1></h1>
  </body>
</html>;

//-Getting elements by tag name
/*_getElementsByTagName()_**:takes a tag name as a string parameter and this method returns an HTMLCollection
object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the
collection. Whenever we use this method we access the individual elements using index or after loop through each
individual items. An HTMLCollection does not support all array methods therefore we should use regular
for loop instead of forEach.*/

// syntax
document.getElementsByTagName('tagname');

const allTitles1 = document.getElementsByTagName('h1');

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

//-Getting elements by class name
/*_getElementsByClassName()_** method returns an HTMLCollection object. An HTMLCollection is an
array like list of HTML elements. The length property provides the size of the collection.
It is possible to loop through all the HTMLCollection elements. See the example below*/

const allTitles = document.getElementsByClassName('title');
console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

//-Getting an element by id
//**_getElementsById()_** targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id');

let firstTitle = document.getElementById('first-title');
console.log(firstTitle); // <h1>First Title</h1>

//-Getting elements by using querySelector methods
/*The _document.querySelector_ method can select an HTML or 
HTML elements by tag name, by id or by class name.*/

/* **_querySelector_**: can be used to select HTML element by its tag name,
id or class. If the tag name is used it selects only the first element.*/

/* **_querySelectorAll_**: can be used to select html elements by its tag name or class.
It returns a nodeList which is an array like object which supports array methods. We can
use **_for loop_** or **_forEach_** to loop through each nodeList elements.*/

//-const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

/* Adding attribute */
/*An attribute is added in the opening tag of HTML which gives additional information
about the element. Common HTML attributes: id, class, src, style, href,disabled,
title, alt. Lets add id and class for the fourth title.*/

const titles = document.querySelectorAll('h1');
titles[3].className = 'title';
titles[3].id = 'fourth-title';

/* Adding attribute using setAttribute */
/*The **_setAttribute()_** method set any html attribute. It takes two parameters
the type of the attribute and the name of the attribute.*/
//-Let's add class and id attribute for the fourth title.

const titles = document.querySelectorAll('h1');
titles[3].setAttribute('class', 'title');
titles[3].setAttribute('id', 'fourth-title');

/* Adding class using classList */
/*The class list method is a good method to append additional class. It does not override
the original class if a class exists rather it adds additional class for the element.*/

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title');

/* Removing class using remove */
/*Similar to adding we can also remove class from an element. 
We can remove a specific class from an element.*/

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title');

/* Adding Text to HTML element */
/*An HTML is a build block of an opening tag, a closing tag and a text content.
We can add a text content using the property _textContent_ or \*innerHTML.*/

//-Adding Text content using textContent
/* The _textContent_ property is used to add text to an HTML element. */

const titles = document.querySelectorAll('h1');
titles[3].textContent = 'Fourth Title';

//-Adding Text Content using innerHTML
/*Most people get confused between _textContent_ and _innerHTML_. _textContent_ is meant to add
text to an HTML element, however innerHTML can add a text or HTML element or elements as a child*/

/* Text Content */
//-We assign *textContent* HTML object property to a text
const titles = document.querySelectorAll('h1');
titles[3].textContent = 'Fourth Title';

/* Inner HTML */
/*We use innerHTML property when we like to replace or a completely 
new children content to a parent element.*/

const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`;
const ul = document.querySelector('ul');
ul.innerHTML = lists;

/*The innerHTML property can allow us also to remove all the children of a parent element.
Instead of using removeChild() I would recommend the following method.*/
const ul = document.querySelector('ul');
ul.innerHTML = '';

/* Adding style */
//- Adding Style Color
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px'; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
});

//-Adding Style Background Color
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px'; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green';
  } else {
    title.style.backgroundColor = 'red';
  }
});

//-Adding Style Font Size
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px'; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px';
  } else {
    title.style.fontSize = '30px';
  }
});

/*As you have notice, the properties of css when we use it in JavaScript is going to be a
camelCase. The  following CSS properties change from background-color to backgroundColor,
font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.*/
