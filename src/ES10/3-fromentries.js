//OBJECT.ENTRIES(): ademas de convertir un objeto en un array de arrays vamos a poder a hacer una cambio inverso de array a objeto
const prueba = new Map([['name', 'Bella'], ['age', 15]]);
console.log(prueba);
console.log(Object.fromEntries(prueba)); 

//=> es como un indicador
//MAP: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

/*map()crea una nueva matriz llamando a una función para cada elemento de la matriz.

map()llama a una función una vez para cada elemento en una matriz.

map()no ejecuta la función para elementos vacíos.

map()no cambia la matriz original. */

