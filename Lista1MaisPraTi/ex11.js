const prompt = require('prompt-sync')();
let valor = 0
let i = 0
let soma = 0

for( i ; i < 5 ; i++){
    valor = Number(prompt('informe um valor: '));
    soma = soma + valor
}
console.log(`a soma final é : ${soma}`)