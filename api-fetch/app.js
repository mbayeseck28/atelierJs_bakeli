let listTodoNonComplet = [];
let listTodoComplet = [];
// Fonction pour récupérer les données de l'API non complétés
function fetchTodosNonCompleted() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      const todoList = document.getElementById('todo-list');
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
// Fonction pour récupérer les données de l'API complétés
function completeTodo(todoId) {
  // const todoList = document.getElementById('todoId');
  const cleRecherche = 'id';
  const valeurRecherche = todoId;
  const objetTrouve = listTodoNonComplet.find(
    (objet) => objet[cleRecherche] === valeurRecherche
  );
  objetTrouve.completed = true;
  if (objetTrouve) {
    listTodoComplet.push(objetTrouve);
    const todoCompleted = document.getElementById('todoCompleted');
    let chiffre = document.querySelector('.chiffre');
    if (objetTrouve.completed == true) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
            <td>${objetTrouve.title}</td> <td>${objetTrouve.completed}</td> 
            <td><button type="button" class="btn btn-danger sup" onclick="falser(${objetTrouve.id})">retourner</button></td>              
            <td><button type="button"data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" class="btn btn-primary det" onclick="details(${objetTrouve.id})">Détails</button></td>              
            `;
      todoCompleted.appendChild(tr);
    }
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

function details(todoId) {
  const cleRecherche = 'id';
  const valeurRecherche = todoId;
  const objetTrouve = listTodoNonComplet.find(
    (objet) => objet[cleRecherche] === valeurRecherche
  );
  objetTrouve.completed = true;
  if (objetTrouve) {
    let modal = document.querySelector('#exampleModal');
    let offcanvas = document.querySelector('.offcanvas');
    const div = document.querySelector('.offcanvas-body');
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
console.log(listTodoNonComplet);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// ____________________________________

// Fonction pour récupérer les données de l'API

// let todos = [];
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((res) => {
//     todos = res;
//   });
// console.log(todos);

// _________

// const fetchTodo = async () => {
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   try {
//     return response.json();
//   } catch (error) {
//     return 'Error';
//   }
//   // throw new Error('Impossible de recuperer les données');
// };
// // console.log(todos);
// fetchTodo().then((todo) => console.log(todo));
// // console.log('Seck');
