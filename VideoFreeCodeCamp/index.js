//SLECTEURS
// document.querySelector("h4").style.background = "yellow";

//click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
  questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'green';
});

btn2.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'red';
});

//-------------------------------------------------------
//Mouse Events
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
  mousemove.style.left = e.pageX + 'px';
  mousemove.style.top = e.pageY + 'px';
});
mousemove.addEventListener('mousedown', () => {
  mousemove.style.transform = 'scale(2) translate(-25%, 25%)';
});

mousemove.addEventListener('mouseup', () => {
  mousemove.style.transform = 'scale(1) translate(-50%, 50%)';
  mousemove.style.border = '2px solid teal';
});

questionContainer.addEventListener('mousecenter', () => {
  questionContainer.style.background = 'rgba(0,0,0,0.6)';
});

questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = 'pink';
});
response.addEventListener('mouseover', () => {
  response.style.transform = 'rotate(2deg)';
});

//........................................................
//keyPress event
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
  const audio = new Audio();
  audio.src = 'ring.mp3';
  audio.play();
};

document.addEventListener('keypress', (e) => {
  key.textContent = e.key;

  if (e.key === 'j') {
    keypressContainer.style.background = 'pink';
  } else if (e.key === 'h') {
    keypressContainer.style.background = 'teal';
  } else {
    keypressContainer.style.background = 'green';
  }
  ring();
});

// Scroll Event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = '-50px';
  }
});
//..........................................
//Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
  pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h3>Language préférè : ${language}</h3>
    `;
  } else {
    alert('veuillez accepter les CGV');
  }
});
//----------------------------------------------------
//Load event

window.addEventListener('load', () => {
  console.log('Document Chargé !!!');
});

//--------------------------------------------------
//Foreach
const boxes = document.querySelectorAll('.box');

console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.transform = 'scale(0.7)';
  });
});
//----------------------------------------------
// addEventListener vs onclick

document.body.onclick = function () {
  console.log('Scroll !');
};

//Bubbling => fin (de base l'eventlistener est paramétré en mode bubbling)
document.body.addEventListener('click', () => {
  console.log('click 1');
});
//Use capture
document.body.addEventListener(
  'click',
  () => {
    console.log('click 2');
  },
  true
);

//--------------------------------------

// Stop propagation

// questionContainer.addEventListener("click", (e) => {
// alert("test !");
// e.stopPropagation();
// });

//----------------------------------
//BOM

// window.open("http://google.com", "cours js", "height = 400");
//window.close() pour fermer la fenetre

// btn2.addEventListener("click", () => {
//   confirm("Voulez vous vraiment ça ?");
// });

//prompt
// btn1.addEventListener("click", () => {
//   let answer = prompt("Entrer votre reponse !");

//   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
// });

// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000);

// let interval = setInterval(() => {
//   // document.body.innerHTML += "<div class='box'><h3>Nouvelle boite !</h3></div>";
// }, 1000);
// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   clearInterval(interval);
// });

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = 'http://twitter.fr'
// }

//Navigator
// console.log(navigator.userAgent);

//history
// console.log(history);
// window.history.back()
// history.go(-2)

//--------------------------------------
//set property

// window.addEventListener("mousemove", (e) => {
//   console.log(e);
//   nav.style.setProperty("--x", e.layerX + "px");
//   nav.style.setProperty("--y", e.layerY + "px");
// });
