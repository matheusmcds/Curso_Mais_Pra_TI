const prompt = require('prompt-sync')();
let valorA = 0
let valorB= 0
let valorC= 0

valorA = Number(prompt('informe o valor A: '));
valorB  = Number(prompt('informe o valor B: '));
valorC  = Number(prompt('informe o valor C: '));

if((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB)){
    if((valorA == valorB) && (valorB == valorC) ){
        console.log('triângulo equilatero')
    }
    } else if ((valorA !== valorB) && (valorB !== valorC) && (valorA !== valorC)){
        console.log('triângulo escaleno')
    } else if((valorA == valorB) || (valorA == valorC) || (valorB == valorC)){
        console.log('triângulo isósceles')
} else {
    console.log('o valores indicados não formam um triangulo')
}

