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
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.id = todo.id;
          listTodoNonComplet.push(todo);
          listItem.innerHTML = `
          Todo: <span class="fw-bold">${todo.title}</span> - Completed: <span class="fw-bold">${todo.completed}</span>
          <div class="btn-group float-right">
            <button type="button" class="btn btn-success" onclick="completeTodo(${todo.id})">True</button>
          </div>
          `;
          todoList.appendChild(listItem);
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
  const todoList = document.getElementById('todoId');
  console.log(todoList);
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
      const list = document.createElement('li');
      list.classList.add('list-group-item');
      list.id = objetTrouve.id;
      list.innerHTML = `
      Todo: <span class="fw-bold">${objetTrouve.title}</span> - Completed: <span class="fw-bold">${objetTrouve.completed}</span>
      <div class="btn-group float-right">
        <button type="button" onclick="details(${objetTrouve.id})" class="btn btn-primary">Détails</button>
        <button type="button" onclick="falser(${objetTrouve.id})" class="btn btn-danger">False</button>
      </div>
      `;
      todoCompleted.appendChild(list);
    }
    chiffre.textContent = listTodoComplet.length;
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
    console.log(objetTrouve);
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
