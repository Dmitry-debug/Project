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



for (let i = 0; i<2; i++) {
    const a = prompt("Один из последних просмиотренных фильмов?", ''),
          b = prompt('На сколько вы его оцените?', '');
          
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Классика");
} else if (personalMovieDB.count >= 30){
    console.log("ОГО");
} else {
    console.log("Что то пошло не так...");
}

console.log(personalMovieDB);