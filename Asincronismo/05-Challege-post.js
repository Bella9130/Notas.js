
import { type } from "os";
import fetch from "node-fetch";
const API = 'https://fakeapi.platzi.com/en/rest/products'

//Guardar o crear un producto
function postData(UrlApi, data){
    const response = fetch(UrlApi,{ //vamos a aagregarle estructura de datos a fetch para que entienda que vamos a guardar datos
        method: 'POST',//
        mode: 'cors',//Tiene que ver con los cors que son los permisos que va a tener y por defecto estara en cors
        credencials: 'sem-origin',//pasar valores que por defecto tiene confis, es el estadar de que sino hay una autenticacion no esta pasando nada 
        headers: {//Son las cabezeras que vamos a enviar la solicitud para que lo reconozca(tenemos que decirle que tipo de valor estamos enviando)
            'content-type': 'application/json'//para decir que el valor que estamos enviando es JSON pero si enviando un blocdedatos, archivos tendriamos que cambiar el elemetos o agregar  
        },
        body: JSON.stringify(data) //es la info que se le va a transmitir a  la API, transformar informacion a stringify porqeu se va a resivir como un obejeto y se va a mandar como texto
    });//como argumento data porque es la info que va a recibir para cambiarla
    return response; 
}


const data = {
    "title": "libro",
    "price": 125,
    "description": "Good book",
    "categoryId": 1,
    "images": ["/src/imagenes/Mi familia y Yo (1).png"]
  }


  postData(`${API}/products`, data)//data el objeeto que se va a transmitir a la API
  .then(response => response.json())
  .then(data => console.log(data))

/*METODOS(SIEMPRE VAN EN MAYUSCULAS)
-GET:obtener 
-POST: para enviar 
-PUT: actualizar
-DELETE: eliminar
*/

/*Mode
-cors:delimita con quien intercabia info osea intercambia info solo a ti mismo a mi propio origen y sino es de mi mismo backed se bloquea
-no-cors: que de permiso indiscriminadamente osea a cualquier backed
-Cache:
 */

/*JSON.stringify()
convierte un objeto o valor de JavaScript en una cadena de texto JSON */