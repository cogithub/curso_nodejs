// Definir una clase
class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    // Método para obtener información de la persona
    obtenerInformacion() {
        return `*** Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`;
    }
}

// Crear una instancia de la clase
const personal = new Persona("María", 25, "Santiago");
// Obtener y mostrar la información de la instancia
console.log(personal.obtenerInformacion());

// Crear una instancia de perro con raza "pequines"
// Llamar al método peinado() que mostrará el mensaje
// "*** yo peine a mi perro raza: pequines"

class perro {
    constructor(raza) {
        this.raza = raza;

    }

    peinado() {
        console.log("*** yo peine a mi perro raza:", this.raza)
    }
}
// Instanciar la clase perro y llamar al método peinado
// para mostrar información sobre el perro
// Definir una clase llamada perro que recibe la raza como parámetro en el constructor
// El constructor inicializa la propiedad raza
// El método peinado muestra un mensaje indicando que se peinó al perro de cierta raza
// Luego se crea una instancia de perro y se llama al método peinado

const p = new perro("pequines");
console.log(p.peinado());

