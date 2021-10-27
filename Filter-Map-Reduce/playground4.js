/*Reduce */

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));

/*Exercicio 2 */

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco:12,  
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;
function calculaSaldo(saldoDisponivel, lista) {
    return calculaSaldo(function(prev, current) {
        return prev - current.preco;    
    }, saldoDisponivel);    
}

console.log(calculaSaldo(saldoDisponivel, lista));