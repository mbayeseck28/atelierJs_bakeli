let tab = [5, 1, 1, 1, 5];

function numAverage(tableau) {
  let total = 0;
  let moyenne = 0;
  for (let i = 0; i < tableau.length; i++) {
    total += tableau[i];
    moyenne = total / tableau.length;
  }
  console.log(`La moyenne est: ${moyenne}`);
}
numAverage(tab);
