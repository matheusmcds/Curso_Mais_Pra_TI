const prompt = require('prompt-sync')()
let valor = Number(prompt('informe um valor: ')) 

let fatorial = 1


    
    for (let i = 1; i <= valor; i++) {
        fatorial *= i;  
    }
    
    console.log(`O fatorial de ${valor} é: ${fatorial}`);

