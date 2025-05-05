const prompt = require('prompt-sync')();
let macas = 0


macas = Number(prompt('quantas maçãs você comprou? '));

if (macas < 11){
    console.log(`o valor total das maçãs é: ${macas * 0.30 }`)
} else{
    console.log(`o valor total das maçãs é: ${macas * 0.25 }`)
}
