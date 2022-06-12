'use strict';

// №1
function sayHello(name) {
    return `Привет ${name}`;
}
console.log(sayHello('Антон'));

// №2
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5));

// №3
function getMathResult(num, num2) {
    if (typeof(num2) !== 'number' || num2 <= 0) {
        return num;
    }
    let str = '';
    for (let i = 1; i <= num2; i++) {
        if (i === num2) {
            str += `${num * i}`;
            
        } else {
            str += `${num * i}---vbn ere`;
            
        }
    }
    return str;
}
console.log(getMathResult(5, 3));