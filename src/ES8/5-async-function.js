//Funcion Asincrona
//es la forma de correr una funcion sincrona asincrona 
//Concepto ternario: es otro tipo de condicional 
const FuncAsin = () => {
    return new Promise((resolve, reject) => { /* return(una promesa(con propiedad (parame de arrow func) => {
    }) )*///(Lo que esta adentro de la promesa va ser el onjetivo no oficial pero alli va)
    //concepto ternario
    (true) 
        ? setTimeout( () => {resolve('Async'), 2000})

        : reject(new Error('error'))//LOS: : hacen referencia a el else que se ubiera teniado
        }) 
} 


const funcions = async ( ) => { 
//Nos ayuda a ejecutar un bloque de codigo para que cuando este listo de devuelva que nos lo de pue
    const Raro = await FuncAsin()
    console.log(Raro);
    console.log('HAOLA');
}


// async function ejemOtrMod () {
//     try{
//         const ejemplMod = await FuncAsin();
//         console.log(ejemplMod);
//     }catch (err) {
//         console.log(err);
//     }  
// }


//NO porque espere aqui el resto de las funciones va a dejar de correr
console.log('antes');
funcions(); // YA NO LLAMAR A LA MERA PROMESA PORQUE YA LA LLAMAMOS ANTERIORMENTE ENTONCES SOLO SE LLMA A LA FUNCION QUE LA LLAMO
console.log('despues');

/*La función setTimeout() es una función nativa de JavaScript que establece un temporizador en 
milisegundos para ejecutar una función callback al finalizar dicho temporizador.
Dicho de otro modo, setTimeout() sirve para ejecutar una función tras un periodo determinado. */

/*¿QUE ES ASYNC?: es la palabra resevada La declaración de función async define una función asíncrona, la cual devuelve un objeto que esta en una
 AsyncFunction. Es posible definir también funciones asíncronas a través de una expresión de función async. */


/*¿QUE ES AWAIT?: (es como decir esperate alafun()) cualquier  puede utilizarse junto a la palabra clave await para manejarla. Lo que hace await es esperar
 a que se resuelva la promesa, mientras permite continuar ejecutando otras tareas que puedan realizarse*/

    const Async = () => {
        return new Promise((resolve, reject) => {
            (true)
        })
    }


/*En  se introducen las palabras clave async/await, que no son más que una forma de azúcar sintáctico para gestionar las
promesas de una forma más sencilla.Con async/await seguimos utilizando promesas, pero abandonamos el modelo de encadenamiento de 
.then() para utilizar uno en el que trabajamos de forma más tradicional. */















//que es la instancia "Error": Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript.
//Por ejemplo: "demasiada recursividad". Crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.

//Una funcion asincrona es algo que no se corre de corrido Sin que el otro se haya ejecutado primero

//Resumen 
/*Funcion asincrona:
Una función asincrona lo que hace es aislar todo el flujo que contiene para que no intervenga en el flujo externo de la función, o sea nuestra aplicación completa. 
En otras palabras simula ser un HILO el cual en otros lenguajes de programación el usar hilos podemos ejecutar varios procesos simultaneos sin detener nuestro programa.
Por ejemplo: Tengo una aplicación en la que mis clientes manipulan y consultan datos continuamente y mi aplicación
quiere hacer una descarga de un archivo pesado, si lo asemos sin asincronismo o sin usasr un “HILO” lo que pasará es que mientras ses descarga el archivo nuestro programa se congelara hasta que se termine de descargar el archivo. PERO si usamos funciones asincronas o HILOS lo que podremos hacer es que podremos decargar el archivo en segundo plano y nuestros clientes podran seguir usando el sistema sin problemas */


    /* Funcion asincrona:
Una función asincrona lo que hace es aislar todo el flujo que contiene para que no intervenga en el flujo externo de la función, o sea nuestra aplicación completa. 
En otras palabras simula ser un HILO el cual en otros lenguajes de programación el usar hilos podemos ejecutar varios procesos simultaneos sin detener nuestro programa.
Por ejemplo: Tengo una aplicación en la que mis clientes manipulan y consultan datos continuamente y mi aplicación quiere hacer una descarga de un archivo pesado,
si lo asemos sin asincronismo o sin usasr un “HILO” lo que pasará es que mientras ses descarga el archivo nuestro programa se congelara hasta que se termine de descargar el archivo. 
PERO si usamos funciones asincronas o HILOS lo que podremos hacer es que podremos decargar el archivo en segundo plano y nuestros clientes podran seguir usando el sistema sin problemas*/


//EJERCICIO:
//Que tire primero hola y luego adios con sintaxis primera adios
const ejer1 = () => {
    return new Promise( (hecho, deshecho) => {
        if(true) {
            setTimeout(() => {
                hecho('Adios'),
                2000
            })
        }else 
        deshecho('errrrr')
    })
//Aqui recuerda que en vez de ponerle console.log va a ser el parametro de la funcion incognita de la promesa 
}

let ejer1DeEje = async () => {
    let algoEjer  = await ejer1()
    console.log(algoEjer);
    console.log('holap');//este No lo va a retornar primero ya que esta adentro de la funcion asincronica 
}

console.log('hola');
ejer1DeEje();




















//RECORDATORIO
//PROMESAS 
//Primeramente tenemos que ver que es un call-back, es una funcion que se pasa a otra función como un argumento que luego se llama dentro de la funcion externa para hacer una accion 
//Una forma de trabajar con Asincronismo es algo que va a pasar hoy mañana o nunca esta es una forma mas amigable de trabajar con nuestro codigo Sin que se bloquee y poder seguir trabajando con el bloque de codigo adentro o que tenga una respuesta 

const otraFuncion = () => {
    return new Promise((cualquierPalabraseUsa_RESOLVE_peroEJ, reject)=> { //Esto (()=> ) es una funcion anonima que puede ser representada con una arrow function //Importante promise es una palabra reservada 
        //IMPORTANT: LOS VALORES A PONER SERAN RESOLVE Y REJECT 
        if (true) {
           cualquierPalabraseUsa_RESOLVE_peroEJ('Hey!!');
        } else {
            reject('WHOOOOOOOOOPS!!')
        }
    }
    ) 
}

otraFuncion()
.then(Response => console.log(Response)) //La palabra response no es necesaria pero es la que mas se usa. 
//THEN: Esta palabra reservada va a ayudar a retornarnos con la palabra que asigno en este caso Response 
.catch(DOnerr => console.log(DOnerr)); //Igual se usa cualquier palabra 
//APARTE: NO SE PONE ESTA ";" PARA QUE SE CONCATENE CON LA OTRA A MENOS QUE TERMINE 
//Aclaración THEN Y CATH SON PALABRAS RESERVADAS SE EXPLICAN LUEGO 

