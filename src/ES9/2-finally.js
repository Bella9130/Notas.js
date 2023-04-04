
const otraFunciones = () => {
    return new Promise((cualquierPalabraseUsa_RESOLVE_peroEJ, reject)=> { 
        
        if (true) {
           cualquierPalabraseUsa_RESOLVE_peroEJ('Hey!!');
        } else {
            reject('WHOOOOOOOOOPS!!')
        }
    }
    ) 
}

otraFuncion()
.then(Response => console.log(Response)) 
.catch(DOnerr => console.log(DOnerr))
.finally(() => console.log('finally'));
//muestra funcion anonima cuando el bloque de codigo ya termino podemos poner algo que que haga una accion o algo asi al finalizar


/*.finally es util cuando quieren hacer una acción sin importar si la respuesta fue correcta o no. Tal vez el 
cierre de una conexión a BD o actualizar un estado de loading cuando hicieron una llamada a la base de dato */


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
//

