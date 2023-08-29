// VARIABLES

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Votre avenir est créé par ce que vous faites aujourd’hui, pas demain."`,
    person: `Robert T. Kiyosaki`,
  },
  {
    quote: `"Il est bien des choses qui ne paraissent impossibles que tant qu’on ne les a pas tentées."`,
    person: `André Gide`,
  },
  {
    quote: `"Le succès c’est tomber sept fois, se relever huit."`,
    person: `Proverbe Japonais`,
  },
  {
    quote: `"J’ai appris que le courage n’est pas l’absence de peur, mais la capacité de la vaincre."`,
    person: `Nelson Mandela`,
  },
  {
    quote: `"C’est à la peur qu’il surmonte qu’on mesure le courage."`,
    person: `Jacques Ferron`,
  },
  {
    quote: `"Ceux qui pensent qu’il est impossible d’agir sont généralement interrompus par ceux qui agissent."`,
    person: `James Baldwin`,
  },
  {
    quote: `"Le succès modifie les gens, tandis que l’échec révèle qui ils sont vraiment."`,
    person: `Mark Twain`,
  },
  {
    quote: `"Le meilleur moyen de prévoir le futur, c’est de le créer."`,
    person: `Peter Drucker`,
  },
  {
    quote: `"Je suis convaincu que ce qui sépare les entrepreneurs qui ont du succès de ceux qui n’en ont pas est la persévérance."`,
    person: `Steve Jobs`,
  },
  {
    quote: `"Le futur appartient à ceux qui croient à la beauté de leurs rêves."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"J’aime l’impossible. La concurrence y est moins rude."`,
    person: `Walt Disney`,
  },
  {
    quote: `"L’action est la clé fondamentale de tout succès."`,
    person: `Pablo Picasso`,
  },
  {
    quote: `"Les gagnants trouvent des moyens, les perdants des excuses…"`,
    person: `F. D. Roosevelt`,
  },
  {
    quote: `"Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté."`,
    person: `Winston Churchill`,
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
