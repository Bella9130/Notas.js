/*-ASYNC es una palarbra reservada es una declaracion de una define a una funcion asincrona la 
cual vaa a dar un objeto 

//estas palabras se usan para no detener el uso de las demas cosas

-AWAIT se usa dentro de asyn lo que hace que el programa espere hasta que la variable 
(promesa) se resuelva para continuar permite trabajar formato asincrono de las llamamdas que se trabajen
*/

//el asinc y await no va a bloquear el resto de operaciones sino las va a ejecutar y hasta que este se manda

const fn = () => {
    return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('ascronoissssmooo'), 5000)
        :reject(new Error('Error'))
    })
}


const asyncfn = async () => {
    const algo = await fn();
    console.log(algo);
    console.log('hola');
}

console.log('Before');
asyncfn();
console.log('after');