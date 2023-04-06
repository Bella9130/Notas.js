import { log } from "console"; 
import fetch from "node-fetch";
const API = 'https://fakeapi.platzi.com/en/rest/introduction';

function fetchData (UrlApi) {
    return fetch(UrlApi)
};

//fetch ya es una promesa por taanto no se agrega ña sintaxis
//llamad a API para que muestre informacion
// fetchData(`$[API]/products`)
// .then(Response => Response.json())//para transformas la info del primer llamado a products (con la data que me esta regresando) a un objeto json
// .catch(products => { console.log(products)})
// .then(() => {
//     console.log('hol')
// })
// .catch(error => console.log(error));

//EN PACKAGE.JSON: "type": "module" abajo de Nombre y author etc hassta abajo


//Hacer multiples llamamdos(La logica es haci solo que algo paso con el paquete)


fetchData(`${API}/products`)
.then(Response => Response.json() )//solo el => significa return pero solo en las promesas
.then(products => {
    console.log(products);
    return fetchData( `${API}/products${products[0].id}`)
})
.then(Response => Response.json)
.then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);

})
.catch(error => console.log(error))
.finally(() => console.log('finally'));

