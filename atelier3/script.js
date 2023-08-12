const bouton1 = document.querySelector('.bouton1');
const bouton2 = document.querySelector('.bouton2');
const bouton3 = document.querySelector('.bouton3');
const bouton4 = document.querySelector('.bouton4');
const bouton5 = document.querySelector('.bouton5');
const myDiv = document.querySelector('.myDiv');
bouton1.addEventListener('click', () => {
  myDiv.style.borderRadius = '5px';
});
bouton2.addEventListener('click', () => {
  myDiv.style.borderRadius = '10px';
});
bouton3.addEventListener('click', () => {
  myDiv.style.borderRadius = '15px';
});
bouton4.addEventListener('click', () => {
  myDiv.style.borderRadius = '20px';
});
bouton5.addEventListener('click', () => {
  myDiv.style.borderRadius = '25px';
});
