const prompt = require('prompt-sync')();
let nota = 0

nota = Number(prompt('Informe sua nota: '));

if (nota <= 5){
    console.log('reprovado')
} else if ((nota > 5) && (nota < 7 ) ){
    console.log('recuperação')
} else{
    console.log('aprovado')
}
