let str = 'hello my friends!';
console.log(str.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
}).join(' '));