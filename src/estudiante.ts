class Estudiante { // se crea la clase que permite reutilizarlo

    agregarNota ( promedio: number, nuevaNota : number): number  { // defino el metodo, ademas recibe dos numeros
      return (promedio + nuevaNota)/ 2 ; // suma los dos valores y devueleve una nueva 

    }

    aprobar (nota:number , minima: number) :boolean { // define el metodo aprobar, recibe dos numeros y devuleve un valor booleano 
      return nota >= minima ; // compara si la nota es mayor o igual a la minima 
    }

    calcularFaltas(faltasActuales: number , nuevas :number ) : number {
        return faltasActuales + nuevas ; // suma las faltas y devuelve la cantidad sumada 
    }

}

const estudiante = new Estudiante (); // crea una instancia de la clase Estudiante 

const nuevoPromedio = estudiante.agregarNota (8,10) ; // llamado al metodo y guarda el resultado el guargadarPromedio 
console.log (" Nuevo promedio: ",nuevoPromedio) ;

const aprobacion = estudiante.aprobar(7,8) ; // llama al metodo aprobar y el resultado se guarda en aprobacion 
console.log ("Aprobado:" , aprobacion); // improme en la consol el resultado

const totalFaltas= estudiante.calcularFaltas (3,2) ; // llama al metodo calcularFaltas y guarda el resultado 
console.log (" Total de faltas:", totalFaltas) ;

