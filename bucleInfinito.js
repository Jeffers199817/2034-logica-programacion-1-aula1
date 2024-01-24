let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = 0;

while(contador < qtdNumeros	){
    let numero = parseInt(prompt(`Digite el numero:${contador+1}`));
    soma += numero;
    contador++;	
}

let promedio = soma / qtdNumeros;

console.log(promedio);
alert(`El promedio de los números ingresados es: ${promedio}`);	