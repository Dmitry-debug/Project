"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');
         }
    },
     rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Классика");
        } else if (personalMovieDB.count >= 30){
            console.log("ОГО");
        } else {
            console.log("Что то пошло не так...");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
    }, 
    writeYouGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номероm ? ${i}`);
            if (genre === " " || genre == null){
                console.log("Попробуй снова");
                i--;
            } else {
                personalMovieDB.genres[i - 1] =  genre;
            }
           
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

        });
 
}
};
