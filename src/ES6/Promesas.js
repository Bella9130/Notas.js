//PROMESAS 
//Primeramente tenemos que ver que es un call-back, es una funcion que se pasa a otra función como un argumento que luego se llama dentro de la funcion externa para hacer una accion 
//Una forma de trabajar con Asincronismo es algo que va a pasar hoy mañana o nunca esta es una forma mas amigable de trabajar con nuestro codigo Sin que se bloquee y poder seguir trabajando con el bloque de codigo adentro o que tenga una respuesta 

const otraFuncion = () => {
    return new Promise((cualquierPalabraseUsa_RESOLVE_peroEJ, reject)=> { //Esto (()=> ) es una funcion anonima que puede ser representada con una arrow function //Importante promise es una palabra reservada 
        //IMPORTANT: LOS VALORES A PONER SERAN RESOLVE Y REJECT PERO NO SON OBLIGATOTIO ES LO MAS COMÚN 
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




// Practica
//Retornar Bienvenido Si tiene Cuenta Y si no LLevar a cuentas 
let Subcription = {primera: 'Una AÑo! Enjoy', segunda: 'DOS AÑOS! ENJOY' }

const EjPromesas = () => {
    return new Promise((Cuenta, sinCuenta) => {
        if (false) {
            Cuenta('Bienvenido')
        } else {
            sinCuenta(Subcription)
        }
    })
}

EjPromesas()
.then(Acceder => console.log(Acceder))
.catch(AcessoFail => console.log(AcessoFail));

//CATH:catch señala un bloque de instrucciones a intentar ( try ), y especifica una respuesta si se produce una excepción ( catch ).
//** */.then() ** es un método de la promesa que retorna anotherFunction(), no es “algo llamado then” y si bien es una ‘palabra reservada’, decir que es una ‘palabra reservada’ no aporta nada, es un método, y por ser un método se “llama” o “ejecuta” y recibe parámetros, en este caso un callback*/ 



let error = {
    primera: 'Una AÑo! Enjoy',
    segunda: 'DOS AÑOS! ENJOY'
 }

const envioDerFormulario = () => {
    return new Promise ((RESOLVE, REJECT) => {
        if (false){
            RESOLVE('enviado exitosamente')

        }else
            REJECT(error)

    })
}


envioDerFormulario()
.then(enviadoExitodamente => console.log(enviadoExitodamente))
.catch(noEnviado => console.log(noEnviado))