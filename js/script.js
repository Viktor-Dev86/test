"use strict";


const numberOfFilms = +prompt("Сколько фильмов Вы уже смотрели?", "221");
console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько Вы его оцениваете?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько Вы его оцениваете?", "");


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    console.log(personalMovieDB);