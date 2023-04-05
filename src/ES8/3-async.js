async function* funcion () {
    yield await Promise.resolve(1 + 2) //nos va a dar el valor ya resuelto
    yield await Promise.resolve(2 + 6)
    yield await Promise.resolve(1 + 2) //nos va a dar el valor ya resuelto
    yield await Promise.resolve(2 + 7)
}
const otra = funcion(); //Es para llamarla o asignarle valores
otra.next().then(cualquier => console.log(cualquier.value));
//llamado | pida el valor uno por uno | luego |como se llamara | arrow fun return implicito | console de el nom de |. los valores
otra.next().then(cualquier => console.log(cualquier.value));
otra.next().then(cualquier => console.log(cualquier.value));
otra.next().then(cualquier => console.log(cualquier.value));
console.log('finally');

//VALUES: Solo nos va a dar los valores de donde se ponga del objeto
//Then(): es para que diga que va a pasar despues
//Next va a pedir cada uno de esos valores del estado que nos genera el generator
// RESOLVE: resolve(value) retorna un objeto Promise que es resuelto con el valor dado. Si el valor es una promise,
// esa promise es devuelta; si el valor es un thenable (si tiene un método "then" ), el valor devuelto le seguirá a 
// ese thenable, adoptando su estado; de otro modo la promise devuelta estará completada con el valor

//¿QUE PASA SI?
function* funcions () { //Generators no haya problema si esta repetido pero igual cambia nom si otra cosa
    yield  Promise.resolve(1 + 2)
    yield  Promise.resolve(2 + 6)
    yield  Promise.resolve(1 + 2) 
    yield  Promise.resolve(2 + 7)
}
const otras = funcions(); //Es para llamarla o asignarle valores
otras.next(cualquier => console.log(cualquier.value));
otras.next(cualquier => console.log(cualquier.value));
otras.next(cualquier => console.log(cualquier.value));
otras.next(cualquier => console.log(cualquier.value));

// otra.next().then(cualquier => console.log(cualquier.value));
// otra.next().then(cualquier => console.log(cualquier.value));
// otra.next().then(cualquier => console.log(cualquier.value));
console.log('finally');

/*call-back: es una funcion que se pasa a otra función como un argumento que luego se llama dentro
de la funcion externa para hacer una accion Una forma de trabajar con Asincronismo es algo que va 
a pasar hoy mañana o nunca esta es una forma mas amigable de trabajar con nuestro codigo Sin que 
se bloquee y poder seguir trabajando con el bloque de codigo adentro o que tenga una respuesta  */



//Iteradores para for
async function nose(Array) { //recuerda hacer referencia del nombre abajo 
    for await (let value of Array){//referencia del nombre
        console.log(value);
    }
}

const names = nose(['Bella', 'Estefania', 'Salguero']);
console.log('after');











