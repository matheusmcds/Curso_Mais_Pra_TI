const prompt = require('prompt-sync')();
let valor = 0
let soma = 0
let qtdValor = 0

do{
valor = Number(prompt('informe um valor diferente de zero ou informe zero para sair: '));
if(valor !== 0 ){
    soma = soma + valor
    qtdValor++
}
}while(valor !== 0){
    console.log(`media: ${soma / qtdValor}`)
}
