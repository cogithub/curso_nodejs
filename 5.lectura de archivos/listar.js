import { readdir } from 'fs/promises';
import { resolve } from 'path';

async function listarDirectorio(ruta = '.') {
    try {
        const rutaAbsoluta = resolve(ruta);
        const archivos = await readdir(rutaAbsoluta);

        // Filtrar archivos que comiencen con "texto"
        const archivosFiltrados = archivos.filter(archivo => archivo.startsWith('texto'));

        archivosFiltrados.forEach(archivo => console.log(archivo));
    } catch (error) {
        console.error(`Error al listar el directorio: ${error.message}`);
    }
}

// Llamada a la función con el directorio actual
listarDirectorio();
