// const lists = document.getElementById("lists")

// const liNode = document.createElement("li");

// const textnode = document.createTextNode("Atelier meet");

// // liNode.append(textnode)

// // lists.appendChild(liNode)

// // console.log(liNode);

// /**
//  * <li>Atelier meet</li>
//  * ! CREER <li></li> : document.createElement("li")
//  *
//  * ! CREER LE TEXT A INSERER DANS <li></li> : document.createTextNode("Atelier meet");
//  *
//  * ! AJOUTER(append) LE TEXT DANS LE NODE <li></li>
//  */

// // node.appendChild(textnode);
// // document.getElementById("myList").appendChild(node);

// function insererLiNode(textAInserer) {
//     const liNode = document.createElement("li");

//     const textnode = document.createTextNode(textAInserer);

//     liNode.append(textnode)

//     lists.append(liNode)
// }

// insererLiNode("On fait un meet 1") // p
// insererLiNode("On fait un meet 2") // div
// insererLiNode("On fait un meet 3") // li
// insererLiNode("On fait un meet 4") // section
// insererLiNode("On fait un meet 5")
// insererLiNode("On fait un meet 6")
// insererLiNode("On fait un meet 7")
// insererLiNode("On fait un meet 8")

function inserListe(tag, text) {
  const recup = document.getElementById('contain');

  const creeElemt = document.createElement(tag);

  const textnode = document.createTextNode(text);

  creeElemt.append(textnode);

  recup.append(creeElemt);
}

inserListe('p', 'Mbaye Seck');
inserListe('div', 'Mbaye Seck');
inserListe('li', 'Mbaye Seck');
inserListe('section', 'Mbaye Seck');
inserListe('h1', 'Mbaye Seck');
inserListe('h4', 'Mbaye Seck');
