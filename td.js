// tipado_dinamico.js

let variable = 42; // número
console.log(`Tipo: ${typeof variable} | Valor: ${variable}`);

variable = "Ahora soy un string";
console.log(`Tipo: ${typeof variable} | Valor: ${variable}`);

variable = true;
console.log(`Tipo: ${typeof variable} | Valor: ${variable}`);

variable = { nombre: "Carlos", edad: 30 };
console.log(`Tipo: ${typeof variable} | Valor: ${JSON.stringify(variable)}`);

variable = [1, 2, 3];
console.log(`Tipo: ${typeof variable} | Valor: ${variable}`);

variable = function () {
  return "Soy una función";
};
console.log(`Tipo: ${typeof variable} | Valor: ${variable()}`);