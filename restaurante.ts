 class Restaurante { // se crea la clase Restaurante para poder ocuparla en el codigo 

  calcularTotal(precio: number, cantidad: number): number { // define metodo llamado calculatrToltal, recibe dos numeros y devuelve uno 
    return precio * cantidad; // multiplica precio por cantidad y devuelve el el total
  }

  aplicarDescuento(total: number, descuento: number): number {// definde un metodo para aplicar descuento al total del pedido 
    return total - (total * descuento / 100);// resta el valor descontado al total y devuelve el resultado 
  }

  calcularPropina(total: number, porcentaje: number): number {// define metodo para calcular la prpina, total es el valor sin prpina 
    return total * (porcentaje / 100);// calcula la propina multiplicando el total por el porcentaje convertido a decimal 
  }
}

// Pruebas en consola
const restaurante = new Restaurante(); // crea un objeto de la clase Restaurante para poder usar sus metodos 

const totalProducto = restaurante.calcularTotal(5, 3); // llama al metodo calcularTotal y guarda el resultado el totalProducto
console.log("Total del producto:", totalProducto);// muestra el resultado en totalProducto 

const totalConDescuento = restaurante.aplicarDescuento(50, 10);// llama al metodo aplicarDescuento 
console.log("Total con descuento:", totalConDescuento);// muestra el resultado 

const propina = restaurante.calcularPropina(45, 15); // llama al metodo calcularPropina 
console.log("Propina:", propina);// imprime la propina calculada 
