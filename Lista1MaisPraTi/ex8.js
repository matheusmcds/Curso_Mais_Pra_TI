const prompt = require('prompt-sync')();
let valorA = 0
let valorB = 0

valorA = Number(prompt('informe o valor A? '));
valorB = Number(prompt('informe o valor B? '));

if(valorA < valorB){
    console.log(valorA, valorB)
}else{
    console.log(valorB, valorA)
}
