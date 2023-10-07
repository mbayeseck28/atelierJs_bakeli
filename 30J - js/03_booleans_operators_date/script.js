                                    /* Booleans */

/*A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The
use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value
which is either true or false.*/

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

                                    /* Undefined */

/*If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a
function is not returning the value, it will be undefined.*/
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet



                                    /* Operators */
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


                                        /* Comparison Operators */
/*In programming we compare values, we use comparison operators to compare two values. We check if a value is greater
or less or equal to other value.*/

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false



                                        /* Date Object */
/*Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and
date is created using JavaScript Date Object. The object we create using Date object provides many methods to work
with date and time.The methods we use to get date and time information from a date object values are started with a
word _get_ because it provide the information.
_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), 
getTime(), getDay()_*/

//Creating a time object
// const now = new Date()
console.log(now) // Fri Oct 06 2026 18:29:11 GMT

//Getting full year
// const date = new Date()
console.log(now.getFullYear()) // 2023

//Getting month
const mois = new Date()
console.log(now.getMonth()) // 9, because the month is October,  month(0-11)

/* Let us format these values to a human readable time format. */
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 6/10/2023 18:46
