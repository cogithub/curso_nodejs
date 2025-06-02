// Exporta la clase Calculos
export class Calculos {
  // Método para sumar dos números
  suma(a, b) {
    // Retorna la suma de a y b
    return a + b;
  }

  // Método para restar dos números
  resta(a, b) {
    // Retorna la resta de a menos b
    return a - b;
  }

  // Método para multiplicar dos números
  multiplicacion(a, b) {
    // Retorna el producto de a y b
    return a * b;
  }

  // Método para dividir dos números
  division(a, b) {
    // Verifica si el divisor es cero
    if (b === 0) {
      // Lanza un error si se intenta dividir por cero
      throw new Error("No se puede dividir entre cero");
    }
    // Retorna el cociente de a dividido por b
    return a / b;
  }
}