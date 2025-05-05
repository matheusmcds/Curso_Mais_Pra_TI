
let a = 0
let b = 1
let i = 0
let proximo 

console.log('Os 10 primeiros números da sequência de Fibonacci:')

for ( i = 1; i <= 10; i++) {
    console.log(a)          
    proximo = a + b       
    a = b                  
    b = proximo      
}
