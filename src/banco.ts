 class Banco { // Creamos la classe, ademas indica que se puede volver a ocupar la misma 
    depositar (saldo:number, monto:number) :number{ // Define un metodo llamado depositar dentro de la clase 
        return saldo + monto ; // Devuelve el saldo sumado en el monto depositado
        
    } // cierra el metodo depositar

    retirar (saldo:number, monto:number) : number { // inicia el metodo de retirar y recibe dos numeros(saldo y monto)-
     
        if (monto > saldo ) { // condicional que verifica si el monto que va a retirar es menor que el saldo 

            throw new Error ("Fondos insuficientes") ; // si no hay suficiente dinero, lanza un error que detiene el programa  
        } // cierra el condicional 

        return saldo - monto ; // retorna el valor que resta del monto a saldo

    } // cierra el metodo retirar 

    transferir ( saldoOrigen:number, monto:number) : number { // inicia el metodo transferir 

        if ( monto > saldoOrigen) { // verifica si el monto que se va a transferir es mayor al saldo original 

            throw new Error (" No se puede realizar la tranferencia") // si el valor a tranferir es aun mas alto que el S.O detiene el programa  
        }
        return saldoOrigen - monto ; // resta el saldo ori del monto y devuelve el nuevo valor 
        
    

        } 
    }
 const banco = new Banco (); // crea un ojeto de la clase Banco 
 let saldo = 150; // inicia el valor que va a tener la cuenta de banco 
  
 console.log("Saldo inicial", saldo); // muestra por consola el saldo inicial 

 saldo= banco.depositar(saldo, 20); // llama al metodo depositar y le asigna un valor de 20
 console.log ( "Saldo actual al depositar", saldo); // muestra el valor de saldo al depositar 

 saldo = banco.retirar( saldo, 10 );// llama al metodo retirar y le asigna un valor de retiro de 10 
 console.log ("Saldo actual al retirar",saldo); // imprime el valor despues de retirar 

 saldo= banco.transferir(saldo, 40); // llama al metodo tranferir y le da un valor de 40 
 console.log("saldo actual al hacer la transferencia:", saldo) // muestra el valor al hacer la transferencia 