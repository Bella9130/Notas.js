//asi es cmo se hace hoy en en dia para llamar a una API 
import fetch from "node-fetch";
const API = 'https://fakeapi.platzi.com/en/rest/products'

 
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json()
    return data;
}

//funcion de solicitudes
//a todos los productos a uno en particular y a las categorias
const fnasync = async(urlAPI) => {
    try{//en try sucede todo lo que queremos para la logica de la aplicacion | explicación  👇🏻| 
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`); 
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch (error){ //lo que pasas si falla el reject|explicacion 👇🏻|
        console.error(error);
    }
}


fnasync(API)



/*Explicación de try y catch
son bloque de codigos y palabras reservadas para manejar errores y ejecuciones exitosas

-try: es una palabra reservada con 1 o mas sentecias y para cuando algo se ejecuta bien osea 
cuando algo se ejecuto bien sale lo que pusimos en try sucede cuando es resolve osea resuelto 

-catch: esta palabra reservada es una sentecia que se usa cuando tira un error o algo salio mal
basicamente tira para reject Si no se lanza ninguna excepción en el bloque try, el bloque catch 
se omite(cath es opcinal).




Por defecto utilizamos promesas con Async/Await, pero muchas veces algunos métodos nativos
reciben una función como parámetro, lo que las vuelve callbacks, realmente entender como
funciona podemos sacarle ventaja según el problema a resolver.




throw() El método throw() reanuda la ejecución de un generador al lanzar un 
error en éste y regresar un objeto con las dos propiedades done y value 
*/