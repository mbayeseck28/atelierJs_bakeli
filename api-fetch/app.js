// Variables globaux
let listTodoNonComplet = [];
let listTodoComplet = [];

// Fonction pour récupérer les données de l'API non complétés
function fetchTodosNonCompleted() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      const todoList = document.getElementById('todo-list');
      // let btnBack = document.querySelector('.btnBack');
      // btnBack.classList.add('d-none');
      data.forEach((todo) => {
        if (todo.completed == false) {
          listTodoNonComplet.push(todo);
          const list = document.querySelector('#todo-list');
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${todo.title}</td> <td>${todo.completed}</td> 
            <td><button type="button" class="btn btn-success sup" onclick="completeTodo(${todo.id})">Completer</button></td>               
             `;
          list.appendChild(tr);
        }
      });
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de l'API.",
        error
      );
    });
}
// Fonction pour passer le completed de false à true
function completeTodo(todoId) {
  // const todoList = document.getElementById('todoId');
  let chiffre = document.querySelector('.chiffre');
  const cleRecherche = 'id';
  const valeurRecherche = todoId;
  const objetTrouve = listTodoNonComplet.find(
    (objet) => objet[cleRecherche] === valeurRecherche
  );
  objetTrouve.completed = true;
  if (objetTrouve) {
    listTodoComplet.push(objetTrouve);
    chiffre.textContent = listTodoComplet.length;
    document.querySelector('#todo-list').addEventListener('click', (e) => {
      target = e.target;
      if (target.classList.contains('sup')) {
        target.parentElement.parentElement.remove();
      }
    });
    // console.log({ listTodoComplet });
  } else {
    console.log('Aucun objet trouvé avec la clé de valeur recherchée.');
  }
}

// Afficher la page des tache completer
let boutonNot = document.querySelector('.boutonNot');
boutonNot.addEventListener('click', (e) => {
  const list = document.getElementById('todo-list');
  let alert = document.getElementById('alert');
  alert.classList.add('d-none');
  let btnBack = document.querySelector('.btnBack');
  btnBack.classList.remove('d-none');
  list.innerHTML = '';
  // const container = document.querySelector('.container')

  listTodoComplet.forEach((todo) => {
    if (todo.completed == true) {
      console.log(todo);
      listTodoNonComplet.push(todo);
      const list = document.querySelector('#todo-list');
      const tr = document.createElement('tr');
      tr.innerHTML = `
            <td>${todo.title}</td> <td>${todo.completed}</td>
            <td>
              <button type="button" class="btn btn-danger sup" onclick="nonComplet(${todo.id})">Non completer</button>
              <button type="button"data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" class="btn btn-primary det" onclick="details(${todo.id})">Détails</button>
            </td>
             `;
      list.appendChild(tr);
    }
  });
});
// Bouton retour
const btnBack = document.querySelector('.btnBack');
btnBack.addEventListener('click', (e) => {
  // window.location.href = './index.html';
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  let alert = document.getElementById('alert');
  alert.classList.remove('d-none');
  // let btnBack = document.getElementById('btnBack');
  // btnBack.classList.add('d-none');
  fetchTodosNonCompleted();
});

// Afficher les détails d'une tache
function details(todoId) {
  const cleRecherche = 'id';
  const valeurRecherche = todoId;
  const objetTrouve = listTodoNonComplet.find(
    (objet) => objet[cleRecherche] === valeurRecherche
  );
  objetTrouve.completed = true;
  if (objetTrouve) {
    const div = document.querySelector('.offcanvas-body');
    div.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    ul.innerHTML = `
    <li class="list-group-item"><span class="fw-semibold">User Id: </span>${objetTrouve.userId}</li>
    <li class="list-group-item"><span class="fw-semibold">Id: </span>${objetTrouve.id}</li>
    <li class="list-group-item"><span class="fw-semibold">Title: </span>${objetTrouve.title}</li>
    <li class="list-group-item"><span class="fw-semibold">Completed: </span>${objetTrouve.completed}</li>
    `;
    div.appendChild(ul);
    // modal.classList.add('z-0');
    // offcanvas.classList.add('z-1');
  } else {
    console.log('Aucun objet trouvé avec la clé de valeur recherchée.');
  }
}

// ____________________________________________
// Appeler les fonction pour afficher les données au chargement de la page
fetchTodosNonCompleted();
