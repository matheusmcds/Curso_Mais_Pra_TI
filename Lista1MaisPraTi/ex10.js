
const prompt = require('prompt-sync')();
let valor = 0
let i = 0

valor = Number(prompt('informe um valor inteiro? '));

for( i = 0 ; i < 10; i++){
    console.log(valor)
}