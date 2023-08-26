// // ______________Exercice 0___________________
// let saisi = prompt('Inscrire une chaine de carractère: ');
let text = document.querySelector('#text');
// text.innerHTML = saisi;

// // ______________Exercice 1___________________
// let a = 10,
//   b = 5;
// let result = a + b;
// alert(result);

// // ______________Exercice 2___________________
// let note_maths = 11;
// let note_francais = 9;
// let note_hg = 16;
// let moy = (note_francais + note_hg + note_maths) / 3;
// alert('La moyenne est de ' + moy);

// // ______________Exercice 3___________________
// let budget = 20000;
// let achats = 35000;
// if (budget >= achats) {
//   alert(`Vous pouvez payer `);
// } else {
//   alert(`Desolé vous n'avez pas un udget suffisant pour payer ses articles`);
// }

// // ______________Exercice 4___________________
// let ht = prompt("Montant HT ?");
// let ttc = ht * 1.2;
// text.innerText = ttc;

// // ______________Exercice 5___________________
// let prixht = prompt('Prix HT ?');
// let tauxTVA = prompt('Taux TVA ?');
// let calculTauxTva = tauxTVA / 100 + 1;
// let ttc = prixht * calculTauxTva;
// text.innerText = ttc;

// // ______________Exercice 6___________________
// let prixht = prompt('Prix HT ?');
// let tauxTVA = prompt('Taux TVA ?');
// let calculTauxTva = tauxTVA / 100 + 1;
// let ttc = prixht * calculTauxTva;
// text.innerText = ttc;
// if (ttc > 100) {
//   text.style.color = 'red';
// } else {
//   text.style.color = 'green';
// }

// // ______________Exercice 7___________________
// document.getElementById('cocktail').innerText = 'Long Island Iced Tea';

// // ______________Exercice 8___________________
// for (let i = 10; i <= 1000; i += 10) {
//   console.log(i);
// }

// // ______________Exercice 9___________________
// let age = prompt('Quel est votre âge ?');
// if (age >= 18) {
//   alert('Vous êtes majeur !');
// } else {
//   alert('Vous êtes mineur !');
// }

// // ______________Exercice 10___________________
// let cp = 77000;
// while (cp <= 77999) {
//   console.log(cp);
//   cp++;
// }

// // ______________Exercice 11___________________
// let n = 5;
// let html = '';
// for(let i = 1;i <= 10;i++) {
//    html = html + n + ' x ' + i + ' = ' + (n * i) + ' <br />';
// }
// document.body.innerHTML = html;

// // ______________Exercice 12___________________
// let html = '';
// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= i; k++) {
//     html = html + i;
//   }
//   html = html + '<br />';
// }
// document.body.innerHTML = html;

// // ______________Exercice 13___________________
// let html = '';
// let k = 0;

// while (k <= 20) {
//   html = html + k + '<br />';
//   k = k + 2;
// }
// document.body.innerHTML = html;

// // ______________Exercice 14___________________
// let tableau = '<table>';
// let lignes = 5;
// let colonnes = 3;

// for (let i = 1; i <= lignes; i++) {
//   tableau = tableau + '<tr>';
//   for (let k = 1; k <= colonnes; k++) {
//     tableau = tableau + '<td>yolo</td>';
//   }
//   tableau = tableau + '</tr>';
// }
// tableau = tableau + '</table>';
// document.body.innerHTML = tableau;

// // ______________Exercice 15___________________
// let lignes = prompt('Nombre de lignes ?');
// let colonnes = prompt('Nombre de colonnes ?');
// let tableau = '<table>';

// for (let i = 1; i <= lignes; i++) {
//   tableau = tableau + '<tr>';
//   for (let k = 1; k <= colonnes; k++) {
//     tableau = tableau + '<td>yolo</td>';
//   }
//   tableau = tableau + '</tr>';
// }
// tableau = tableau + '</table>';
// document.body.innerHTML = tableau;

// // ______________Exercice 16___________________
// let html = '<ul>';
// let nalea = 10;
// for (let i = 0; i < nalea; i++) {
//   html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
// }
// html = html + '</ul>';
// document.body.innerHTML = html;

// // ______________Exercice 17___________________
// let html = '<ul>';
// let nalea = 10;
// for (let i = 0; i < nalea; i++) {
//   let tmp = Math.floor(Math.random() * 11);
//   if (tmp == 10) {
//     console.log('Le nombre 10 fait parti du tirage.');
//   }
//   html = html + '<li>' + tmp + '</li>';
// }
// html = html + '</ul>';
// document.body.innerHTML = html;

// // ______________Exercice 18___________________
// let html = '<ul>';
// let nalea = 10;
// let nalea10 = 0;
// for (let i = 0; i < nalea; i++) {
//   let tmp = Math.floor(Math.random() * 11);
//   if (tmp == 10) {
//     nalea10++;
//   }
//   html = html + '<li>' + tmp + '</li>';
// }
// html = html + '</ul>';
// html = html + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>';
// document.body.innerHTML = html;

// // ______________Exercice 19___________________
// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);
// let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
// document.body.style.background = color;

// ______________Exercice 20___________________
let html = '';
let nalea = 12;
for (let i = 1; i <= nalea; i++) {
  html = html + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
document.body.innerHTML = html;
