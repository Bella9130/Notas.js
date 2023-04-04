//Nos devuelve la primera que cumpla y si es reject la ignora 
const promise1 = new Promise((resolve, reject) => resolve('resuelto'))
const promise2 = new Promise((resolve, reject) => reject('No se resolvio'))
const promise3 = new Promise((resolve, reject) => reject('resolvio'))

Promise.any([promise1, promise2, promise3])
.then(Response => console.log(Response));

//A veces se va a llamar 