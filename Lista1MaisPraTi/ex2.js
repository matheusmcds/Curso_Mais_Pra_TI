const prompt = require('prompt-sync')();
let idade = 0

idade = Number(prompt('Informe sua idade: '));

if (idade <= 12){
    console.log('criança')
} else if ((idade > 12) && (idade <= 17) ){
    console.log('adolescente')
} else if ((idade > 17) && (idade <= 59) ){
    console.log('adulto')
} else{
    console.log('idoso')
}