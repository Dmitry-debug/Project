"use strict";

// alert('Hello');

//const result = confirm("Are u here?");

// const answer = prompt("Вам есть 18?", "");
// console.log(answer);

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмиотренных фильмов?", ''),
b = prompt('На сколько вы его оцените?', ''),
c = prompt("Один из последних просмиотренных фильмов?", ''),
d = prompt('На сколько вы его оцените?', '');
   
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);