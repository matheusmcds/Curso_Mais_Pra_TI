const prompt = require('prompt-sync')();
let opcao = 0 

opcao = prompt('Escolha uma opção 1( mostrar saudação), 2(somar) ou 3(verificar para ou impar) ');

switch (opcao) {
  case '1': {
    const nome = prompt('Digite seu nome: ');
    console.log(`Olá, ${nome}! Bem-vindo(a)!`);
    break;
  }

  case '2': {
    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo número: '));
    const soma = num1 + num2;
    console.log(`A soma de ${num1} + ${num2} é ${soma}`);
    break;
  }

  case '3': {
    const numero = Number(prompt('Digite um número: '));
    const resultado = (numero % 2 === 0) ? 'par' : 'ímpar';
    console.log(`O número ${numero} é ${resultado}`);
    break;
  }

  default:
    console.log('Opção inválida. Tente novamente.');
}
