//se genra diferentes reglas para filtrar y verificar que si se este cumpliendo una regla
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Orange, etc, etc, etc,';

for(let match of fruit.matchAll(regex)) {
    console.log(match);
}


const reget = /\b(Apple)+\b/g;

const fruitt = 'Apple, Banana, Tomato, Kiwi, Orange, etc, etc, etc';

for(const match of fruitt.matchAll(reget)) {
        console.table(match)
}
/*El método matchAll de los strings devuelve un iterable con todas las coincidencias del string
 específico a partir de una expresión regular, colocada como argumento. */

/*Lo utilizó mucho para validad si un tipo de código de una pieza es válido o no. Tanto buscar ese valor que me permite 
identificar la pieza por ejemplo Pieza A = código “2NZ” y la cantidad de caracteres que tiene el código completo. */