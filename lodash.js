import _ from 'lodash';

// Importamos la librería lodash que nos provee utilidades para manipular datos
// Lodash es una biblioteca de utilidades de JavaScript que proporciona funciones útiles para:
// - Manipulación y transformación de arrays, números y objetos
// - Validación de valores
// - Creación de funciones compuestas
const valores = [1, 2, 2, 3, 4, 4, 4, 5];
console.log("*** valoes repeticos",_.uniq(valores)); 

// Los métodos más comunes son:
// _.uniq() - Elimina elementos duplicados de un array
// _.get() - Obtiene el valor de una propiedad de un objeto de forma segura
const usuario = { perfil: { nombre: "*** objeto Carlos eduardo" } };
console.log(_.get(usuario, "perfil.nombre", "Desconocido")); 
