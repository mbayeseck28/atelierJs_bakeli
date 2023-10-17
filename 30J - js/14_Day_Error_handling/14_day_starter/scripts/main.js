// JavaScript similaire à Python ou Java fournit un mécanisme de gestion des erreurs pour détecter les erreurs d'exécution à l'aide du bloc try-catch-finally.
try {
  let lastName = 'Yetayeh';
  let fullName = fistName + ' ' + lastName;
} catch (err) {
  console.log(err);
}
// ___________________
try {
  let lastName = 'Yetayeh';
  let fullName = fistName + ' ' + lastName;
} catch (err) {
  console.log(err);
}
// __________________
try {
  let lastName = 'Yetayeh';
  let fullName = fistName + ' ' + lastName;
} catch (err) {
  console.error(err); // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed');
}
// Le bloc catch prend un paramètre. Il est courant de passer e, err ou error en tant que paramètre au bloc catch. Ce paramètre est un objet et il possède des clés de nom et de message. Utilisons le nom et le message.
try {
  let lastName = 'Yetayeh';
  let fullName = fistName + ' ' + lastName;
} catch (err) {
  console.log('Name of the error', err.name);
  console.log('Error message', err.message);
} finally {
  console.log('In any case I will be executed');
}
// throw : l'instruction throw nous permet de créer une erreur personnalisée. Nous pouvons le faire via une chaîne, un nombre, un booléen ou un objet. Utilisez l'instruction throw pour lever une exception. Lorsque vous lancez une exception, expression spécifie la valeur de l'exception. Chacun des éléments suivants lève une exception :
throw 'Error2'; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error('Required'); // generates an error object with the message of Required

const throwErrorExampleFun = () => {
  let message;
  let x = prompt('Enter a number: ');
  try {
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

let firstName = 'Asabeneh';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

let square = 2 x 2
console.log(square)
console.log('Hello, world")

let num = 10
console.log(num.toLowerCase())