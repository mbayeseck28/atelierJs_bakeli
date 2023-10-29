/* DOM(Document Object Model)-Day 2 */
//-Creating an Element
/*To create an HTML element we use tag name. Creating an HTML element using JavaScript is very
simple and straight forward. We use the method _document.createElement()_.
The method takes an HTML element tag name as a string parameter.*/

// syntax
document.createElement('tagname');

let title = document.createElement('h1');
title.className = 'title';
title.style.fontSize = '24px';
title.textContent = 'Creating HTML element DOM Day 2';

console.log(title);

/* Appending child to a parent element */
/*To see a created element on the HTML document we should append it to the parent as a child
element. We can access the HTML document body using *document.body*. The *document.body*
support the *appendChild()* method. See the example below.*/

// creating multiple elements and appending to parent element
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1');
  title.className = 'title';
  title.style.fontSize = '24px';
  title.textContent = i;
  document.body.appendChild(title);
}

// Removing a child element from a parent node
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');
for (const list of lists) {
  ul.removeChild(list);
}

/*As we have see in the previous section there is a better way to eliminate all the inner HTML
elements or the children of a parent element using the method *innerHTML* properties.*/

const ul1 = document.querySelector('ul');
ul1.innerHTML = '';
