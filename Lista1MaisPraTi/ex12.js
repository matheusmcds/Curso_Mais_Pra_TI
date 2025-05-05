const prompt = require('prompt-sync')();
let valor = 0
let i = 0

valor = Number(prompt('informe um valor: '));

for( i ; i <= 10 ; i++){
   console.log(`${valor}x${i} = ${valor * i }`)
}
