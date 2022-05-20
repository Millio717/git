// "use strict"

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', '');
// let b = prompt('На сколько оцените его?', '');
// let c = prompt('Один из последних просмотренных фильмов?', '');
// let d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
















// const hamburger = 5;
// const fries = 1;

// if (hamburger && fries) {
//     console.log('Я сыт!')
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola && fries) {
//     console.log('Все сыты');
// } else {
//     console.log("Мы уходим!");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 1;
// const naggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && naggets) {
//     console.log('Все Довольны');
// } else {
//     console.log("Мы уходим!");
// }

// console.log(fries === 3 && (naggets === 2 || hamburger === 3) && cola === 5);


// let hamburger;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// let jhonReport, alexReport, samReport, mariaReport = 'done';

// console.log(jhonReport || alexReport || samReport || mariaReport)

// if (jhonReport || alexReport || samReport || mariaReport) {
//     console.log('Отчеты есть');
// } else {
//     console.log('Отчетов нет');
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
        
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i <= length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n'
// }

// console.log(result);




for (let i = 0; i < 3; i++) {
    console.log(`First: ${i}`);
    for (let j = 0; j < 3; i++){
        console.log(`Second: ${j}`);
        for (let k = 0; k < 3; k++) {
            console.log(`Third: ${k}`);
        }
    }
}