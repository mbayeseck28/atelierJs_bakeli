const addition = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`L'addition de ${a} et ${b} est ${a + b}`);
  });
};

const soustraction = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`La soustraction de ${a} par ${b} est ${a - b}`);
  });
};

const multiplication = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`La multiplication de ${a} par ${b} est ${a * b}`);
  });
};

const division = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(`La division par zéro n'est pas autorisée`);
    } else {
      resolve(`La division de ${a} par ${b} est ${a / b}`);
    }
  });
};

const modulo = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(`Le modulo par zéro n'est pas autorisé`);
    } else {
      resolve(`Le modulo de ${a} par ${b} est ${a % b}`);
    }
  });
};

addition(10, 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

soustraction(20, 8)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

multiplication(6, 7)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

division(50, 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

modulo(15, 0)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
