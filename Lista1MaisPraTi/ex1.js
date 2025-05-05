const prompt = require('prompt-sync')();
let valor = 0

valor = Number(prompt('Informe um valor inteiro: '));
 
if(valor % 2 == 0){
    console.log(`o valor ${valor} é par`)
}else{
    console.log(`o valor ${valor} é impar`)
}
