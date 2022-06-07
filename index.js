'use strict';

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));


function test(test) {
    for (let i = 0; i  < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);



function test(test) {
    return test * test;
}
// console.log(test(2));

function promotion(prom) {
    console.log(prom * 2);
}
promotion(test(2));


function relax() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
        if (i === 10) return;
    }
}

relax();