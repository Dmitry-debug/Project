"use strict";



let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms () {
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
}
rememberMyFilms ();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Классика");
    } else if (personalMovieDB.count >= 30){
        console.log("ОГО");
    } else {
        console.log("Что то пошло не так...");
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

function writeYouGenres () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номероm ? ${i}`);
        }

}
writeYouGenres ();