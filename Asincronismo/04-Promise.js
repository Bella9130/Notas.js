/*Es algo que puede pasar pero no se sabe cuand es depende comos se ponga y si se rechaaza la 
solicitudpuede ser nunca 🙁*/

/*3 ESTADOS
-Pendiente(Se esta ejecutado)
-Cumplido(Cuando regreso la informacion dada)
-Rechzado
 */

//PRACTICA

const promise = new Promise( (resolve, reject)=> {
    resolve('Funciono')

})

const EjPromesasCows = 50;

const contar = new Promise((resolve, reject) => {
    if (EjPromesasCows > 10){
        resolve(`We have ${EjPromesasCows} Are enogh `)
    } else {
        reject ('triste tu caso')
    }
})

contar.then((reusult) => {
    console.log('Siuuuu');
} )
.catch((error) => {
    console.log(error);
}).finally(() =>{
    console.log('Final')
} )



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

