"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let lastFilm = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      ).trim();
      let lastFilmRating = prompt("На сколько оцените его?", "");
      if (+lastFilm.length !== 0 || +lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = lastFilmRating;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("mnogo");
    } else if (personalMovieDB.count > 30) {
      console.log("kinoman");
    } else {
      console.log("some error");
    }
  },
  showMyDb: (someDb) => {
    if (someDb.privat === false) {
      console.log(someDb);
    }
  },
  togleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 4; i++) {
      const yourGenre = prompt(`Tvoj lubimij zanr pod nomerom ${i}?`);
      if (yourGenre === "" || yourGenre === mull) {
        console.log("incorect data");
        i--;
      } else {
        personalMovieDB.genres.push(yourGenre);
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`${i + 1} - ${item}`);
    });
  },
};
