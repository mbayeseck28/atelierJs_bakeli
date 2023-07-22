// Créer un tableau
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);

// Accéder (via son index) à un élément du tableau
let first = fruits[0];
let last = fruits[fruits.length - 1];

// Boucler sur un tableau
fruits.forEach;
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

// Ajouter à la fin du tableau
let newLength = fruits.push('Orange');

// Supprimer le dernier élément du tableau
let supElm = fruits.pop();

// Supprimer le dernier élément du tableau
let supDerElm = fruits.shift(); // supprime Apple (au début)

// Supprimer le premier élément du tableau
let supPremElm = fruits.shift();

// Ajouter au début du tableau
let ajtDeb = fruits.unshift('Strawberry');

// Trouver l'index d'un élément dans le tableau
fruits.push('Mango');
let pos = fruits.indexOf('Banana');

// Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1);

// Supprimer des éléments à partir d'un index
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
let posit = 1,
  n = 2;
let removedItems = vegetables.splice(pos, n);
console.log(vegetables);
console.log(removedItems);

// Copier un tableau
let shallowCopy = fruits.slice();

// Accéder aux éléments d'un tableau
let arr = ['le premier élément', 'le deuxième élément', 'le dernier élément'];
console.log(arr[0]); // affiche "le premier élément"
console.log(arr[1]); // affiche "le deuxième élément"
console.log(arr[arr.length - 1]); // affiche "le dernier élément"

let années = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(années[0]); // fonctionne correctement

renderer['3d'].setTexture(model, 'personnage.png'); // fonctionne correctement

console.log(années['2'] != années['02']);

let promise = {
  var: 'text',
  array: [1, 2, 3, 4],
};

console.log(promise['var']);

// Relation entre length et les propriétés numériques
let legumes = [];
legumes.push('banane', 'pomme', 'pêche');
console.log(legumes.length); // 3

fruits[5] = 'mangue';
console.log(fruits[5]); // "mangue"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

// Matche un "d" suivit par un ou plusieurs "b" et suivit d'un "d"
// Capture les "b" et le "d" qui suit
// Ignore la casse
let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec('cdbBdbsbz');
console.log(monTableau);
// [ 0:"dbBd", 1:"bB", 2:"d", index:1, input:"cdbBdbsbz", length:3 ]
