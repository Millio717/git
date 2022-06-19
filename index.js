'use strict';


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания



// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', ''); 
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);         
//     }
// }

// writeYourGenres();




1) Создайте функцию, которая будет вычислять объем и площать полной поверхности куба ( тоже базовая математику, иногда используется в создании анимаций). Эта функция принимает в себя целове число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
function calculateVolumeAndArea(value) {
    if (typeof(value) !== 'number' || value < 0 || !Number.isInteger(value)){
        return 'При вычислении произошла ошибка';
    } 
    let volume = 0,
        area = 0;
    
    volume = value * value * value;
    area = 6 * (value * value);

    return `Объем куба: ${volume}, площадь всей поверхности ${area}`;
}
console.log(calculateVolumeAndArea(5));

calculateVolumeAndArea(5);

function getCoupeNumber(value) {
    if (typeof(value) !== 'number' || value < 0|| !Number.isInteger(value)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (value === 0 || value > 36) {
        return "Таких мест в вагоне не существует";
    } else if (value >= 1 && value <= 4) {
        return 1;
    } else if (value >= 5 && value <= 8) {
        return 2;
    } else if (value >= 9 && value <= 12) {
        return 3;
    } else if (value >= 13 && value <= 16) {
        return 4;
    } else if (value >= 17 && value <= 20) {
        return 5;
    } else if (value >= 21 && value <= 24) {
        return 6;
    } else if (value >= 25 && value <= 28) {
        return 7;
    } else if (value >= 29 && value <= 32) {
        return 8;
    } else if (value >= 33 && value <= 36) {
        return 9;
    }
}
console.log(getCoupeNumber(5));