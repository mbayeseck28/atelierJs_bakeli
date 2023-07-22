//On pointe sur l'élément de message
const espaceMessage = document.getElementById('message');
//On pointe sur l'élément de bouton
const bouton = document.getElementById('bouton');
//On pointe sur l'élément de champ de saisie de l'année
const numberInput = document.getElementById('number');

//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let number;

//======FONCTION À ECRIRE======
function factorielle(number) {
  if (number <= 1) return 1;
  else return number * factorielle(number - 1);
}
//======/FONCTION À ECRIRE======

function onCalcul() {
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  number = parseInt(numberInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(number)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  espaceMessage.innerHTML =
    'La factorielle de ' + number + ' est ' + factorielle(number);
}

//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener('click', onCalcul);
