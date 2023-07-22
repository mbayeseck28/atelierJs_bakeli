// Modify the code here
// ======================

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }

  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }

    this.averageRating = sum / this.ratings.length;
  }
}

// ======================

const tau = new Show('The Story of Tau', 5);
const colin = new Show('The Hero of Old Meldrum', 3);
const clara = new Show('The Bugs of Isla Clara', 6);

const shows = [tau, colin, clara];

const body = document.querySelector('body');
const refresh = document.querySelector('#refresh');

refresh.addEventListener('click', () => {
  removeShows();
  addRandomRatings();
  updateShows();
});

const updateShows = () => {
  for (let show of shows) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.title;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.numberOfSeasons + ' seasons';
    const ratings = document.createElement('p');
    ratings.innerText =
      show.averageRating > 0
        ? show.ratings.length +
          ' ratings\n' +
          show.averageRating.toFixed(1) +
          ' stars'
        : 'No ratings yet';
    showDetails.append(seasons);
    showDetails.append(ratings);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

const removeShows = () => {
  const children = [];
  for (let childNode of body.childNodes) {
    children.push(childNode);
  }
  for (let child of children) {
    if (child.tagName == 'DIV') {
      body.removeChild(child);
    }
  }
};

const addRandomRatings = () => {
  for (let show of shows) {
    if (Math.random() >= 0.2) {
      const numberOfRatings = Math.floor(Math.random() * 4 + 1);
      for (let i = 0; i < numberOfRatings; i++) {
        const rating = Math.floor(Math.random() * 5 + 1);
        show.addRating(rating);
      }
    }
  }
};

updateShows();
