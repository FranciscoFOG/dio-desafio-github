/* Exemplos de if e else e condição ternária

return saoIguais ? "São iguais" : "Não são iguais";*/

   /* if(saoIguais) {
        return "São iguais";
    }

    return "Não são iguais"*/


function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeirafrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return '${primeiraFrase} ${segundaFrase}';
}

function criaPrimeirafrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'Não';
    }

    return 'Os números ${num1} e ${num2} $ {saoIguais} são iguais.'
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior'
    }

    return 'Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20';
}

console.log(comparaNumeros(20, 20));

