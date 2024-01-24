//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
alert('Bienvenido al juego del día de la semana.');
let dia = prompt("Qué día de la semana es hoy?");
console.log('El día que elegiste es:'+ dia);

if(dia == "Sábado" || dia == "Domingo"){	
    alert("!Buen fin de semana¡");}
else{
    alert(`¡Buen día ${dia} de la semana!`);

}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
alert('Continuemos con el juego del número positivo o negativo');
let numero = prompt("Ingrese un número");
console.log(`El número que ingresaste es: ${numero}`);

if(numero > 0 ){
    alert('El número que ingresasate es positivo');

}else{
    alert('El número que ingresaste es negativo');

}

alert(`Fin del juego, gracias por participar`);

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
alert('Bienvenido al juego de la puntuación');
let puntuacion = prompt("Ingrese su puntuación");
console.log(`La puntuación que ingresaste es: ${puntuacion}`);
if(puntuacion >= 100){
    alert('¡Felicidades, has ganado!');	
}else{
    alert('Intenta nuevamente para ganar.');
}
alert(`Fin del juego, gracias por participar`);
//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo./
alert('Bienvenido al juego del saldo de tu cuenta');
let saldo = prompt("Ingrese el saldo de su cuenta");
    console.log(`El saldo de tu cuenta es; ${saldo}`);
    alert(`El saldo de tu cuenta es; ${saldo}`);
    alert(`Fin del juego, gracias por participar`);

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
alert('Bienvenido al juego del nombre');
let nombre = prompt("Ingrese su nombre");
    console.log(`Tu nombre es: ${nombre}`);
    alert(`Tu nombre es: ${nombre}`);
    alert(`Fin del juego, gracias por participar`);         
    