/*El método Promise.allSettled() devuelve una promesa que se cumple después de que todas las promesas 
dadas se hayan cumplido o rechazado, con una matriz de objetos que describen el resultado de cada promesa.
Por lo general, se usa cuando tiene varias tareas asincrónicas que no dependen unas de otras para completarse correctamente,
o si siempre desea saber el resultado de cada promesa. En comparación, la Promesa devuelta por Promise.all()
puede ser más apropiada si las tareas dependen unas de otras/si desea rechazar inmediatamente cualquiera de ellas */

const promise = new Promise((resolve, reject) => reject('reject'));
const promise1 = new Promise((resolve,reject) => resolve('resolve'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));

//allsettled: Va a validar  
Promise.allSettled([promise1, promise2, promise])//Se pone un array adentro de ese
.then(response => console.log(response)); //then como la respuesta
//repose palabra reserv funcion anonima y que la regrese


const promise3 = new Promise((resolve, reject) => resolve('resolve'))
const promise4 = new Promise((resolve, reject) => reject('reject'))
const promise5 = new Promise((resolve, reject) => reject('reject'))
const promise6 = new Promise((resolve, reject) => resolve('resolve'))

Promise.all(promise3, promise4, promise5, promise6)
.then(anonimeFunc => console.log(anonimeFunc))