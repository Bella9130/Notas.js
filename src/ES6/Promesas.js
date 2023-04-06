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






const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // instanciamos xmlhttprequest.
const API = 'https://api.escuelajs.co/api/v1'; // API donde vamos a traer los datos.
// estados: 0 no iniciado - 1 cargando, aún no se llama a send - 2 cuando ya se ejecuto send
// 3 interactuando con la solicitud - 4 se ha completado la llamada.
// status: 200 solicitud correcta - 400 errores - 500 errores del servidor.
function fetchData(urlApi, callback) { // función donde generamos la conexión, recibe urlApi y un callback.
    let xhttp = new XMLHttpRequest(); // generamos una nueva instancia más corta en xhttp.
    xhttp.open('GET', urlApi, true); // abrimos una conexión con el método GET, urlApi y true para asincronismo.
    xhttp.onreadystatechange = function (event) { // cuando este cambio suceda, escuchamos el estado:
        if (xhttp.readyState === 4) { // comparamos el estado que sea igual a 4 (completado).
            if (xhttp.status === 200) { // comparamos el estatus sea igual a 200 (solicitud correcta).
                callback(null, JSON.parse(xhttp.responseText)); // retornamos callback null en error. Parse de datos.
            } else { // si lo anterior no ocurre:
                const error = new Error('Error' + urlApi); // generamos un nuevo error + urlApi.
                return callback(error, null); // retornamos callback con el error y null(para los datos).
            };
        };
    };
    xhttp.send(); // Enviamos el llamado o solitud.
};


fetchData(`${API}/products`, function (error1, data1) { // llamamos la función con argumentos de url y func anónima.
    if (error1) return console.error(error1); // si se genera error retornamos error, info en data 1.
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) { // volvemos a llamar a la función.
        if (error2) return console.error(error2); // retornamos error2 (si se produce) e info guardada en data2.
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) { // 3er llamado a la func.
            if (error3) return console.error(error3); // retorn. error3 (si se produce). Info guardada en data3.
            console.log(data1[0]); // mostramos los datos de la primer llamada (estudiar la api).
            console.log(data2.title); // mostramos los datos de la 2da llamada.
            console.log(data3.name); // 3er llamada.
        });
    });
    setTimeout( () => { // agregué este setTimeout para mostrar los mismos datos solo con el primer llamado a 5 seg.
        console.log(data1[1]); // se utilizó la posición 1 del array de la api para variar del ej. anterior.
        console.log(data1[1].title);
        console.log(data1[1].category.name);
        console.log(data1[1].price);
    }, 5000); // tiempo en milisegundos para ejecutar esos console.log.
});