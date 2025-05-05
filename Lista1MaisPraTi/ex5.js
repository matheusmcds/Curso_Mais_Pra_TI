const prompt = require('prompt-sync')();
let altura = 0
let peso = 0
let imc = 0

altura = Number(prompt('Digite sua altura: '));
peso  =  Number(prompt('Digite seu peso: '));

imc = peso / (altura*altura)

if (imc < 18.5) {
    console.log('abaixo do peso')
} else if ((imc == 18) || (imc <= 24.9)){
    console.log('peso normal')
} else if ((imc == 25) || (imc <= 29.9)){
    console.log('sobrepeso')
} else {
    console.log('obesidade')
}