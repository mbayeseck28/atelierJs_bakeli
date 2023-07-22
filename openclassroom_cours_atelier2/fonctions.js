// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length;
};

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText =
    tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText =
    colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${
    calculateAverageRating([]) === 0
      ? 'No ratings'
      : calculateAverageRating([]) + ' stars'
  }`;
}

// ______________________________________________________________________________
class Show {
  constructor(title, numberOfSeasons, episodesPerSeason) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ======================

const generateComponent = (show) => {
  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + ' seasons';
  const episodesText = show.episodesPerSeason + ' episodes per season';
  return {
    titleText,
    seasonsText,
    episodesText,
  };
};

const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// ======================
// Modify the code above

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();
