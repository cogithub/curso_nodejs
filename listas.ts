// limpio la pantalla  
console.clear();


// Definimos una variable con un tipo explícito
let variable: any = "*** "+"Hola, soy un string"; 
console.log(`Valor: ${variable} - Tipo: ${typeof variable}`);

variable = 42; // Ahora es un número
console.log(`Valor: ${variable} - *** Tipo:  ' ${typeof variable}`);

variable = true; // Ahora es un booleano
console.log(`Valor: ${variable} - *** Tipo:  ' ${typeof variable}`);

variable = { nombre: "Carlos", edad: 30 }; // Ahora es un objeto
console.log(`Valor: ${JSON.stringify(variable)} - *** Tipo:  ${typeof variable}`);

variable = [1, 2, 3, 4]; // Ahora es un array (que sigue siendo un objeto)
console.log(`Valor: ${variable} - *** Tipo:  ' ${typeof variable}`);