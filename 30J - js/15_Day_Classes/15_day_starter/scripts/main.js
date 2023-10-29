/* Classes */

/* Defining a classes */
/*To define a class in JavaScript we need the keyword _class_ , the name of a class in **CamelCase** and block code
(two curly brackets). Let us create a class name Person.*/

/* Class Instantiation */
/*Instantiation class means creating an object from a class. We need the keyword _new_ and we call the name
of the class after the word new.*/
class Person {
  // code goes here
}
const person1 = new Person();
console.log(person1); //Person {}

/* Class Constructor */
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person = new Person();
console.log(person); //Person {firstName: undefined, lastName:undefined}

class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person2 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');

console.log(person2); //Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}

/* Class methods */
/*The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class
we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.*/
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}

const person3 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
const person4 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(person3.getFullName());
console.log(person4.getFullName());
//Asabeneh Yetayeh
//test.js:19 Lidiya Tekle

/* Properties with initial value */
//A method could be regular method or a getter or a setter. Let us see, getter and setter.

/* getter */
/*The get method allow us to access value from the object. We write a get method using keyword _get_
followed by a function. Instead of accessing properties directly from the object we use getter
to get the value. See the example bellow*/

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person5 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
const person6 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(person5.getScore); // We do not need parenthesis to call a getter method
console.log(person6.getScore);

console.log(person5.getSkills);
console.log(person6.getSkills);
/*resutat */
/*
0
0
[]
[]
*/

/* setter */
/*The setter method allow us to modify the value of certain properties. We write a setter method
using keyword _set_ followed by a function. See the example bellow.*/

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

const person7 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
const person8 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

person7.setScore = 1;
person7.setSkill = 'HTML';
person7.setSkill = 'CSS';
person7.setSkill = 'JavaScript';

person8.setScore = 1;
person8.setSkill = 'Planning';
person8.setSkill = 'Managing';
person8.setSkill = 'Organizing';

console.log(person7.score);
console.log(person8.score);

console.log(person7.skills);
console.log(person8.skills);
//resultat
/*
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
*/

/* Static method */
/*The static keyword defines a static method for a class. Static methods are not called on instances of the class.
Instead, they are called on the class itself. These are often utility functions, such as functions to create or
clone objects. An example of static method is _Date.now()_. The _now_ method is called directly from the class.*/

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : '';

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let dateMonthYear = date + '.' + month + '.' + year;
    let time = hours + ':' + minutes;
    let fullTime = dateMonthYear + ' ' + time;
    return fullTime;
  }
}

console.log(Person.favoriteSkill()); //Node
console.log(Person.showDateTime()); //18.10.2023 23:04

//The static methods are methods which can be used as utility functions.

/* Inheritance */
/*Using inheritance we can access all the properties and the methods of the parent class.
This reduces repetition of code. If you remember, we have a Person parent class and we will create
children from it. Our children class could be student, teach etc.*/

// syntax
class ChildClassName extends Parent {
  // code goes here
}

//Let us create a Student child class from Person parent class.

class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class');
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki');
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
