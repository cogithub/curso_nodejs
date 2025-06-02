import { readdir } from 'fs/promises';

async function listarDirectorio(ruta) {
    try {
        const archivos = await readdir(ruta);
        console.log(`Contenido de ${ruta}:`);
        archivos.forEach(archivo => console.log(archivo));
    } catch (error) {
        console.error(`Error al leer el directorio: ${error.message}`);
    }
}

listarDirectorio('.');

