class Hospital { // se crea la clase Hospital donde estaran todos los metodos 

    calcularDosis(peso: number, mgPorKg: number): number {// metodo para calcular los miligramos  que debe tomar un paciente 
        return peso * mgPorKg; // multiplica peso por dosisi y devuelve el total de miligramos 
    }

    calcularIMC(peso: number, altura: number): number { // metodo para calcular el IMC, recibe dos valores y devolvera uno 
        return peso / (altura * altura); // realiza la formula y retorna el valor calculado de la formula 
    }

    registrarVisitas(visitasActuales: number, nuevas: number): number { // metodo para sumar nuevas visitas al total de visitas anteriores 
        return visitasActuales + nuevas; // suma las visitas que ya tiene con las visitas nuevas y retorna el resultado de la suma 
    }
}

const hospital = new Hospital();// crea un objeto de la clase Hospital para usar los metodos 

const dosis = hospital.calcularDosis(70, 10); // llama al metodo calcularDosisi y le asigna valores 
console.log("Dosis total:", dosis); // muestra en consola el resultado del metodo aplicado 

const imc = hospital.calcularIMC(70, 1.75);// llama al metodo calcularIMC y le asigna valotes 
console.log("IMC del paciente:", imc); // imprime el resultado del metodo 

const visitas = hospital.registrarVisitas(3, 2);// llama al metodo registrarVisitas y le asigna valores 
console.log("Total de visitas:", visitas);// imprime el resulatos del metodo registrarVisitas
