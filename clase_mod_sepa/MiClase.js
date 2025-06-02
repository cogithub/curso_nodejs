// Clase que maneja mensajes y confirmaciones
export class MiClase {
    // Constructor de la clase
    constructor() {
        // Inicializa el mensaje y lo muestra en consola
        this.mensaje = "haciendo el constructor";
        console.log(`*** mostrando mensaje ...${this.mensaje}`);
    }

    // Método para confirmar y actualizar el mensaje
    confirmar() {
        // Actualiza el mensaje a "Confirmando"
        this.mensaje = "*** Confirmando";
    }
}