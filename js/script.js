"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  let lastFilmRating = prompt("На сколько оцените его?", "");
  if (+lastFilm.length !== 0 || +lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = lastFilmRating;
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    let lastFilmRating = prompt("На сколько оцените его?", "");
    if (+lastFilm.length !== 0 || +lastFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = lastFilmRating;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("malo");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("mnogo");
  } else if (personalMovieDB.count > 30) {
    console.log("kinoman");
  } else {
    console.log("some error");
  }
}

detectPersonalLevel();

function showMyDb(someDb) {
  if (someDb.privat === false) {
    console.log(someDb);
  }
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const yourGenre = prompt(`Tvoj lubimij zanr pod nomerom ${i}?`);
    personalMovieDB.genres.push(yourGenre);
  }
}

writeYourGenres();

showMyDb(personalMovieDB);
