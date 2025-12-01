 class Auto { // se crea la clase Auto para que se pueda ser reutilizada 

  acelerar(velocidadActual: number, incremento: number): number { // declaracion del metodo, recibe dos numeros ademas number devolvera un numero 
    return velocidadActual + incremento; // suma los valores y regresa la nueva velocidad 
  }

  frenar(velocidadActual: number, decremento: number): number { // declara el metodo frenar, recibe los numeros e indica que va a regresar un numero 
    const nuevaVelocidad = velocidadActual - decremento; // se declara una nueva variable y calcula la nueva velocidad
    return nuevaVelocidad < 0 ? 0 : nuevaVelocidad; // operacion para que el  numero no salga negativo 
  }

  recorrer(distancia: number, tiempo: number): number { // declara el metodo recorrer , recibe los dos numeros y number indica que va a devolver un numero 
    return distancia / tiempo; // realiza la operacion y devuelve el nuevo numero 
  }
}

// Pruebas en consola 
const auto = new Auto(); // se crea un objeto real de la clase Auto para usar sus metodos 

const velocidad1 = auto.acelerar(50, 20); // llama al metodo acelerar 
console.log("Nueva velocidad después de acelerar:", velocidad1);// muestra en la consola la velocidad calculada 

const velocidad2 = auto.frenar(40, 60); // llama al metodo frenarv
console.log("Nueva velocidad después de frenar:", velocidad2); //  muestra en la consola el resultado 

const velocidadMedia = auto.recorrer(120, 2); // llama al metodo recorrer 
console.log("Velocidad media:", velocidadMedia); // muestra en la consola la velocidad media 
