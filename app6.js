 let numeroSecreto = 2;
 let numeroUsuario = 0;
 let intentos= 1;	
 let palabraVeces = 'vez';	


        while(numeroSecreto != numeroUsuario)
        {
        numeroUsuario = prompt('Ingrese un número del 1 al 10');

        console.log('El número ingresado es: ' + numeroUsuario);
            console.log('El número secreto es: ' + numeroSecreto);

            if (numeroUsuario == numeroSecreto) {
                //Acertamos , fue verdadera la condición 
                alert(`Felicitaciones, acertaste el número secreto ${numeroSecreto}`);
                alert(`Gracias por participar`);
                alert(`El número de intentos que utilizaste fueron: ${intentos}, ${palabraVeces}`);
            
            }else{
                if(numeroUsuario > numeroSecreto){
                    alert('El número ingresado es mayor al número secreto');
                //No acertamos, fue falsa la condición
                alert(`El número secreto es menor a ${numeroUsuario}`);
            
                }else{
                    alert('El número ingresado es menor al número secreto');
                    alert(`El número secreto es mayor a ${numeroUsuario}`);
                    
            }
            intentos++; 
            palabraVeces = 'veces';
        }
        
        }
   