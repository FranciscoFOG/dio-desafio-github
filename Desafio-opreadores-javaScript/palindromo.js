//solução 01

function verificaPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

//solução 02

function verificaPalindromo(string) {
    if (!string) return "string inexixtente";

    for(let i = 0; i < string.length / 2; i++) {
      if (string[1] !== string[string.length - 1 - i]) {
        return false 
      }  
    }

    return true;
}

console.log(verificaPalindromo("abbba"));