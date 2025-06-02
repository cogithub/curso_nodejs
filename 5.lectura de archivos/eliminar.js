// Este código elimina un archivo usando Node.js
// Primero importamos el método unlink del módulo fs (filesystem)
// unlink es la función que permite eliminar archivos del sistema
import {unlink} from 'fs';

// Llamamos a unlink pasando dos parámetros:
// 1. La ruta del archivo a eliminar ('texto2.txt')
// 2. Una función callback que maneja el resultado
unlink('Copia de texto.txt', (err) => {
    // El callback recibe un parámetro err que será null si todo salió bien
    // o contendrá información del error si algo falló
    if (err) {
        // Si err tiene un valor, significa que hubo un error al eliminar
        // Mostramos el error en la consola
        console.error('Error al eliminar el archivo:', err);
    } else {
        // Si err es null, significa que el archivo se eliminó correctamente
        // Mostramos un mensaje de éxito
        console.log('Archivo eliminado exitosamente');
    }
}
);
