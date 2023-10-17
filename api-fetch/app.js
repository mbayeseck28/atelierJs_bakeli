// Fonction pour récupérer les données de l'API
function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then((data) => {
      const todoList = document.getElementById('todo-list');
      data.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `ID: ${todo.id}, Titre: ${todo.title}, Complété: ${todo.completed}`;
        todoList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de l'API.",
        error
      );
    });
}

// Appeler la fonction pour afficher les données au chargement de la page
fetchTodos();

// async function fetchTodo() {
//   const r = await fetch('https://jsonplaceholder.typicode.com/todos/');
//   if (r.ok === true) {
//     return r.json();
//   }
//   throw new Error('Impossible de contacter le serveur');
// }
// fetchTodo().then((todo) => console.log(todo));

// Fonction pour récupérer les données de l'API
