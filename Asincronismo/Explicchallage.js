/*que es xmlhttprequest https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_1_%E2%80%93_how_to_make_an_http_request */
/*Es el llamado a una API a travez de XMLHttprequest */
/*require: Es importar el modulo del id que le pasemos, ademas puede importar JSON y archivos 
locales. Pero necesitamos trabajar con XMLHttpRequest para manipular la API osea que importar o 
traer o hacer referencia a la API osea en terminos tecnicos taducidos es traer el modulo(recordarModulos)
del id que se le pase en este caso xmlhttprequest en los parentesis para llamerlo basicamente
el como llamar a una cosa externa por medio del nombre que le pusimos 
dpcument(https://nodejs.org/api/modules.html#requireid) */

//llamado al archivo con el que se llama a API (llamado con require())
const ExplicXMLHTTPRequest = require('xmlhttprequest')

/* Llamado a API */
/*para llamar poner link de la API */
const ExAPI = 'https://fakeapi.platzi.com/';
//poner en mayuscula es como decri que eso no va a cambiar dentro de los arch asi podemos decir que es unico



/*Antes de empezar estos callback que se van a  anidar para hacer el llamado a elementos claves de esta funcion */



//LLmado de XHTTP(para controlar los estados, status y mostrar llamado de forma correcta )

/*Funcion para recibir la url en este caso la API y el callback que va a ser una funcion anonima
para recibir la solicitud que nos entrege el llamado a una ApI*/

function ExplicfetchData(urlApi, callback){/*En parametro van a ser la url del llamado(urlApi para no hacer referencia
a la variable que esta arriba) y el callback(Sera la info que nos va a retornar los elementos o el error de la llamamda)*/
/*Referencia 👇🏻 ejxhttp a la de arriba para haci poner new  */
    let ejxhttp = new ExplicXMLHTTPRequest()//<-- para hace referencia a la constante de arriba
    /*Vamos a utilizar el XmlHTTPRequest vamos a poder controlar el flujo del llamado por hay difrentes maneras de hacer peticiones de una API*/
    
    /*Elemetos que entrega de forma amigable  */
    ejxhttp.open('Get', urlApi, true);
//para abrir conexion a API que este el tipo de poticion este caso obtener, el url que se va usar y para habilitar 

/*onreadyststechange es parte de los elementos que entrega XMLHttpRequest para escuchar diferentes
estado que tiene la solicitud y con esto saber cuadno esta disponible la información   */
    ejxhttp.onereadystatechange = function(event) {
   //  validar es que ya este complatada la info para poner un valor 
        if (ejxhttp.readystate === 4) { //EXPLICACION 4 |abajo 👇🏻 👇🏻 |
            if(ejxhttp.status === 200){//queremos validar que nuestro servidor respondio de forma correcta y poder obetener(get la info)  
                callback(null, JSON.parse(ejxhttp.responseText))//aqui dice el valor que de transfomalo a .JSON
/*responseText regresa el valor dado por el servidor esto es de las propiedades XMLhttpresponse*/
/*status estado osea que el estado es 200 -parse: transforma la info por quejemplo en este caso a JSON  */
            }
        }else {//para el manejo de info cuando haya un error
            const error = new Error('error' + urlApi)//se pone un error y se le pasa 
//un error segun sea el caso como la url para decir que el error fue del lado de la API
            return callback(error, null);
        }
        ejxhttp.send()

    }
/*readystate es por decir haci cuando ya no esta viendo la soli sino que ya esta listo  */
/*Esta Para validar soluciones y errores que puede y va a haber */
}

/*Explicacion del 4 detro de los estados hay varios elementos que son 
EX-0:No se ha iniclializado 
EX-1:Loading todavia no se ha llamado el valor de send cuando se ejecuta
EX-2:cuadno ya se ejecuto el valor de send 
EX-3:interacturar descargar o trabajar con la solicitud
EX-4:cuando se completa la llamada lo que queremos queremos 

*/

/*Queremos que es traer todos los prductos llmar a un producto y luego llamar a la categoria y mostrar la info al finalizar las solicitudes que se estan haciendo al servidor que se encarga de mostrar  */
/*se llama a la Api que vaya a la peticion de product al llamarlo ya tenemos la lista completa  */
ExplicfetchData(`${ExAPI}/products`, function (error1, data1){
    if(error1) return console.error(error1);
    //Si detecta un error que de esto para detener logica

//va a volver a llamar a fetchdata con otro objetivo de poner otra logica consecuente de obener info osea que si la info es correcta y tengo datos ahora dispongo de la info de data1 por lo cual yo puedo pasarla a frchtdata y volvinedola a llamar y pasar otro callback con el valor de error asi como los datos de error o consecuentes(consecuencias)
    ExplicfetchData(`${ExAPI}/products/${data1[0].id}`)//data1 es el objeto que esta entregando
    /*Se pone la API de products y data de datos especificos pero lo que quiero que en el primer elelmento y que pase su id con esto se hace una 2peticion pero al primer elemto del array que trajo la primer peticion   */
})