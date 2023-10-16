/* Higher Order Function */
/*Higher order functions are functions which take other function as a parameter or return a function as a value. The
function passed as a parameter is called callback.*/

/* Callback */
//A callback is a function which can be passed as parameter to other function. See the example below.
// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
  }
console.log(cube(callback, 3))


// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
console.log(higherOrder(2)(3)(10))


/*Let us see were we use call back functions. For instance the _forEach_ method uses call back.*/
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers))



//The above example can be simplified as follows:
const numbers1 = [1, 2, 3, 4]
​
const sumArray1 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers1))



/* Functional Programming */
/*Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us
to solve complicated problems. All builtin methods take callback function. In this section, we will see _forEach_,
_map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_.*/

/* forEach */
/*_forEach_: Iterate an array elements. We use _forEach_ only with arrays. It takes a callback function with elements,
index parameter and array itself. The index and the array optional.*/
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function
  arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))


let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)
console.log(sum)



/*_map_: Iterate an array elements and modify the array elements. It takes a callback function with elements,  index,
array parameter and return a new array.*/

//Example
const numbers3 = [1, 2, 3, 4, 5]
const numbersSquare = numbers3.map((num) => num * num)
console.log(numbersSquare)


const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)//["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]



/* filter */
//_Filter_: Filter out items which full fill filtering conditions and return a new array.
const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)



/* every */
//_every_: Check if all the elements are similar in one aspect. It returns boolean
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)



/* find */
//_find_: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)


const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
const score = scores.find((user) => user.score > 80)
console.log(score)




/* Sorting string values */
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted



/* Sorting Numeric values */
const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()) //[100, 3.14, 37, 9.81]
numbers4.sort(function (a, b) {
  return a - b
})

console.log(numbers4) // [3.14, 9.81, 37, 100]

numbers4.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]



/* Sorting Object Arrays */
//Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]

  