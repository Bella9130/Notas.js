//generator
//es como funcion pero con * [function* name (array para poner en el llop si no como se hace reference)]
function* iterates(array) {
    for (let value of array){ //{for (let nombre of iterable)}en el nombre se puede poner cualwuiera por es se inicia con let
        //Yield: Es una palabra reservada que va a retornar cada uno de los valores segun sea el caso osea el nombre para que tantas cosas es mas moldeable que la return
        yield value;
    }
}
    const it = iterates(['Bella', 'Salguero', 'Linda','MAMI', 'PaPa' , 'Cano', 'JoseJeff', 'JoseMay', 'josekim' ]);
    console.log(it.next().value);
// {la nomconst.next(next para que pase).indicar el nom para que sepa que alli esta} para que pase acac vez a una como [i(0)] i++  
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
//el numero de string va a tener el mismo nuemero de array pero pss si no te va a aparecer undifined 
   
    
    //generator
/*Es un tipo especial de funcion que nos va a retornar una serie de valores 
segun del algoritmo definido*/ 

/*QUE ES ITERAR:
es un objeto que permite recorrer una colección y devolver un valor al terminar. Específicamente,
un iterador es un objeto que implementa el protocolo de iteración a través del método next(),
el cual devuelve un objeto con dos propiedades: value. o puede ser
ccada espacio */

//PRACTICA

function* getId (juanes) {
    let nom = 1;
    while(true) {
        yield nom ++;
    }

}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);




