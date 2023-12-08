"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

first: for (let i = 0; i < 2; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  let lastFilmRating = prompt("На сколько оцените его?", "");
  if (+lastFilm.length !== 0 || +lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = lastFilmRating;
  }

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

console.log(personalMovieDB);
