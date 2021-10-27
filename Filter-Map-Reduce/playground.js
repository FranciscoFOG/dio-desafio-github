/*Map com This */

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const num = [1, 2];

console.log('this -> maçâ', mapComThis(num, maca));

console.log('this -> laranja', mapComThis(num, laranja));