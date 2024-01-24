let numeroSecreto= 6;
let contador = 0;



while(contador < 3) {

    alert('Bienvenido al juego adivine el número del 1 al 10, solamente tienes 3 intentos');
let numeroUsuario= prompt('Me indicas un número por favor: ');
alert('El número que me indicaste es: ' + numeroUsuario);
console.log('El número que me indicaste es: ' + numeroUsuario);
if (numeroSecreto == numeroUsuario) {
  alert('Acertaste');
  alert('Felicitaciones, ganaste el juego');
  alert('Gracias por participar');
  console.log('Acertaste');
    console.log('Felicitaciones, ganaste el juego');
} else {
  alert('No acertaste');
  console.log('No acertaste');  
}
contador++;
}