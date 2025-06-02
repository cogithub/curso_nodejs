// Ejemplo 1: Eliminar elemento usando splice
let lista = [1, 2, 3, 4, 5];
lista.splice(2, 1); // Elimina el tercer elemento (índice 2)
console.log(lista); // [1, 2, 4, 5]

// Ejemplo 2: Eliminar elemento usando filter
lista = [1, 2, 3, 4, 5];
let nuevaLista = lista.filter(item => item !== 3); // Elimina el número 3
console.log(nuevaLista); // [1, 2, 4, 5]

// Ejemplo 3: Eliminar primer y último elemento
lista = [1, 2, 3, 4, 5];
lista.pop(); // Elimina el último elemento
lista.shift(); // Elimina el primer elemento
console.log(lista); // [2, 3, 4]

