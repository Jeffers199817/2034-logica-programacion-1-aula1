//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

alert('Bienvenido al juego del contador');
let contador = 1;
while(contador <=10){
    console.log(contador);
    alert(`El contador es: ${contador}`);
    contador++;
}
alert(`El contador final es: ${contador}`);
alert(`Fin del juego, gracias por participar`);

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

alert("Bienvenido al juego del contador regresivo");

let contador1 = 10;

while(contador1 >= 0){
    console.log(contador1);
    alert(`El contador es: ${contador1}`);
    contador1--;

}
alert(`El contador final es: ${contador1}`);
alert(`Fin del juego, gracias por participar`);



//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

alert("Bienvenido al juego de la cuenta progresiva");
let numero = prompt("Ingrese un número para la cuenta progresiva");
contador2=0;
while(contador2 <=numero){
    console.log(contador2);
    alert(`El contador es: ${contador2}`);
    contador2++;
}
alert(`El contador final es: ${contador2}`);	
alert(`Fin del juego, gracias por participar`);


//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

alert("Bienvenido al juego de la cuenta regresiva");
let numero1 = prompt("Ingrese un número para la cuenta regresiva");

contador3=numero1;
while(contador3 >=0){
    console.log(contador3);
    alert(`El contador es: ${contador3}`);
    contador3--;
}
alert(`El contador final es: ${contador3}`);
alert(`Fin del juego, gracias por participar`);