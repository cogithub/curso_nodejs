const _ = require('lodash');

// Ejemplo de datos
const users = [
  { name: 'Carlos', age: 34 },
  { name: 'Ana', age: 28 },
  { name: 'Luis', age: 34 },
  { name: 'Sofía', age: 28 },
  { name: 'Pedro', age: 40 }
];

// Agrupar por edad
const groupedByAge = _.groupBy(users, 'age');
console.log('👥 Agrupado por edad:', groupedByAge);

// Ordenar por edad descendente
const sortedUsers = _.orderBy(users, ['age', 'name'], ['desc', 'asc']);
console.log('📊 Ordenado por edad descendente:', sortedUsers);

// Eliminar duplicados por nombre
const usersWithDuplicates = [...users, { name: 'Carlos', age: 50 }];
const uniqueUsers = _.uniqBy(usersWithDuplicates, 'name');
console.log('🧹 Sin duplicados por nombre:', uniqueUsers);

// Mezclar aleatoriamente los usuarios
const shuffledUsers = _.shuffle(users);
console.log('🎲 Mezclado aleatoriamente:', shuffledUsers);