// Definir una función
function saludar(nombre) {
    return `*** ¡Hola, ${nombre}! Bienvenido a Node.js`;
}

// Llamar a la función
const mensaje = saludar("Carlos");
console.log(mensaje);

function saludo2(apodo) {
    return `*** compadre ${apodo}`;
}

const mensaje2 = saludo2("ramiro");
console.log(mensaje2);

const saludar3 = (param) => {
    return `*** que fue perrin como esta todo ${param}`;
}

const mensaje3 = saludar3('alejandro');
console.log(mensaje3);