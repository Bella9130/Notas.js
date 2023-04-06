/*generators son la forma que permite trabajar con una funcion que va permitir 
llamar o parar una solicitud. es una estructua que permite usar un iterador
con el cual se puede pausar y retomar una soli o lo quereramo en cualquier 
momento para identificar un generator se usa un =>(*) */

function* generators() {
    yield 1;
    yield 2;
    yield 3;
}

//llamarlos
const g = generators();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(arr) {
    for(let value of arr){
        yield value; 
    }
};

const it = iterate(['Bella', 'estefania', 'salguero']);
console.log(it.next().value);
console.log(it.next());



/*Operadores
-Yield: es una palabra reservada la cual ayuda a tener steps o a pausar y reaudar
una funcion generadora, tambien indica que va regresar algo  

-next(): es la propiedad del iterador permite acceder a la funcion del generador y obetener
con yield dos valores(value, done) es decir el yield 1 y el resultado se imprime con next
y se obtiene{value:1, done:false} y sale falso proque mientras haya otro yield va a ser falso






https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es
*/