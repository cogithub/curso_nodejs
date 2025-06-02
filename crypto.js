import { createHash } from 'node:crypto';

const mensaje = 'Hola, mundo';
const hash = createHash('sha256').update(mensaje).digest('hex');

console.log('*** vHash SHA-256:', hash);
