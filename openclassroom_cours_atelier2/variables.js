let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Calculate totalShowTime here
// =====================================

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime =
  (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;

// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`;
