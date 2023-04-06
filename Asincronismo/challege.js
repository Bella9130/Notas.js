// const XMlhttprequest = require('xmlhttprequest').XMLHttpRequest;

// const APIS = 'https://api.escuelajs.co/api/v1'

// function fetchData(urlapi, callback) {
//     let XHTTP = new XMlhttprequest();

//     XHTTP.open('Get', urlapi, true )
//     XHTTP.onreadyststechange = function (event) {
//         if(XHTTP === 4 ){
//             if(XHTTP === 200){
//                 callback(null, JSON.parse(XHTTP.responseText));
//             }else {
//                 const error = new Error('Error' + urlapi);
//                 return callback(error, null)
//             };
//         }
//     } 
//     XHTTP.send(); 
// };

// fetchData(`${APIS}/products`, function(error1, data1){
//     if (error1) return console.error(error1);
//     fetchData(`${APIS}/products/${data1[0].id}`, function (error2, data2) {
//         if(error2) return console.error(error2);
//         fetchData(`${APIS}/categories/${[data2?.categories?.id]}`, function(data3, error3) {
//             if(error3) return console.error(error3);
//             console.log(data1[0]);
//             console.log(data2.title);
//             console.log(data3.name);
//         });
//     });
// });





const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // instanciamos xmlhttprequest.
const API = 'https://api.escuelajs.co/api/v1/products/4'; // API donde vamos a traer los datos.
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
            } else { // si lo anterior no ocurre: Alli el if conforma solo el estado que va a estar constantemente cambiando segun lo que pasa con el server
                const error = new Error('Error' + urlApi); // generamos un nuevo error + urlApi.
                return callback(error, null); // retornamos callback con el error y null(para los datos).
            };
        };
    };
    xhttp.send(); // Enviamos el llamado o solitud. https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=928:metodos-open-send-getresponseheader-setrequestheader-de-xmlhttprequest-ajax-ejemplos-cu01209f&catid=83&Itemid=212
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