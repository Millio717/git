tmp = '';


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i <= 10; i++) {
//     tmp += i + ' ';
// }

// let i = 5;
// while (i >= 5 && i <= 10) {
//     tmp += i + ' ';
//     i++;
// }


// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18). Когда цикл дойдет до числа 13 - остановить весь цикл
// for (let i = 20; i >= 10; i--) {
//     tmp += i + ' ';
//     if (i === 13) {
//         break;
//     }
// }

// let i = 20;
// while (i <= 20 && i >= 10) {
//     tmp += i + ' ';
//     i--;
//     if (i === 13-1) {
//         break;
//     }
// }


// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         tmp += i + ' ';
//     }
// }
// hah = '';
// let i = 2;
// while (i >= 2 && i <= 10) {
//     if (i % 2 !== 0) {
//         i++;
//     } else {
//         hah += i + ' ';
//         i++;
//     }
// }
// console.log(hah);

// Перепишите цикл for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while (i >= 2 && i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//         i++;
//     }
// }


// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним arr[0];
// let arr = [];
// for (let i = 5; i <= 10; i++) {
//     arr[i - 5] = i;
// }
// console.log(arr);

// let arr = [];
// let i = 5;
// while (i >= 5 && i <= 10) {
//     arr[i - 5] = i;
//     i++;
// }
// console.log(arr);





// 1. Заполните  новый массив (result) числами из старого (arr). Количество элементов все так же: arr[0], arr[1] и тд. Должен получиться точно такой же мессив
// function array() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i]; 
//     }   
//     console.log(result);
// }
// array();


// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза\, а если попадаеться строка строка - то к ней было добавлено ' - done'.
// Для определения типа данных используйте typeof();
// Должно получиться: [10, 20, 'Shopping - done', 40, 'Homework - done']
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] *= 2;   
//     } else if (typeof(data[i]) === 'string') {
//         data[i] += ' - done';
//     }
// }
// console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: ['Homework', 20, 'Shopping', 10, 5]
// const data = ['Homework', 20, 'Shopping', 10, 5];
// const result = [];
// for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i])
// }
// console.log(result);



// Ласт задачу решить сам не смог, посмотрел решение, подумал и более менее понял как её делать!
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= lines - i; j++) {
//         result += ' ';
        
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
    
// }
// console.log(result);