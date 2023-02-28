//enahced(mejora) object Literal

//Esto nos va a servir para no asignar valores y tener los valores claros ENTONCES SE VA A USAR LO SIGUIENTE:
//Asi se hacia primeramente: 
function newUserForma1(user, age) { //Es importante poner todos los valores aqui ya que si no se ponene la funcion NO FUNCIONA no da los datos
    return{
        user:'user',
        age: 'age',
        country: 'country',
        id: 'Uid'
    }
}

console.log(newUserForma1('Bella', 15, 'GU', 2)); //Poner todo en el console.log RECORDATORIO: Poner todo arriba para que aparesca si no da error y no aparece aparte

//Como se hizo En ES6
//En estas situaciónes fue asi ya que se ponia lo mismo y para que fuera mas leguble y para ahorrar codigo se puso esto pero con la reglas de siempre poner los parametros que se van a usar.
function newUserForma2(user, age, country, uid) {
    return{
        user,
        age,
        country,
        uid //poner uid
    }
}
console.log(newUserForma2('Bella', 34, 'GU', 2)); //RECORDATORIO: Aqui lo mismo que arriba poner lo mismo si no no aparece
//Tenemos que asignarlo y ponerlo en orden para no tener errores.
















//PROMESAS 
//Primeramente tenemos que ver que es un call-back, es una funcion que se pasa a otra función como un argumento que luego se llama dentro de la funcion externa para hacer una accion 
//Una forma de trabajar con Asincronismo es algo que va a pasar hoy mañana o nunca esta es una forma mas amigable de trabajar con nuestro codigo Sin que se bloquee y poder seguir trabajando con el bloque de codigo adentro o que tenga una respuesta 

const otraFuncion = () => {
    return new Promise((cualquierPalabraseUsa_RESOLVE_peroEJ, reject)=> { //Esto (()=> ) es una funcion anonima que puede ser representada con una arrow function //Importante promise es una palabra reservada 
        //IMPORTANT: LOS VALORES A PONER SERAN RESOLVE Y REJECT 
        if (true) {
           cualquierPalabraseUsa_RESOLVE_peroEJ('Hey!!');
        } else {
            reject('WHOOOOOOOOOPS!!')
        }
    }
    ) 
}

otraFuncion()
.then(Response => console.log(Response)) //La palabra response no es necesaria pero es la que mas se usa. THEN: Esta palabra reservada va a ayudar a retornarnos con la palabra qjue asigno en este caso Response 
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


//**.then() ** es un método de la promesa que retorna anotherFunction(), no es “algo llamado then” y si bien es una ‘palabra reservada’, decir que es una ‘palabra reservada’ no aporta nada, es un método, y por ser un método se “llama” o “ejecuta” y recibe parámetros, en este caso un callback*/ 











//Clases 
//INSTANCIA: para saber que son las clases necesitamos saber que es una insatansia: Una instancia es la accion de crear un objeto basado en una clase en particular. 
//CONSTRUCTOR: Este es un metodo especial para crear o inicializar un objeto creado aparti de una clases 

class user { //Un clase es para ordenar cuando tenemos varios elemntos del mismo esta es la sintaxis: 
   constructor() { //
    console.log('Nuevo usuario');
   }
    elMethod() { //Esto es un metodo es una forma abreviada para la asignación de una funcion al nombre del metodo 
       return('hellow');              //Estructura similar a una funcion
    } 
}

//Variables sin funcion constructora
const Bella = new user() //INSTANCIA: esta es la instancia de esta clases porque se efiere a ella
console.log(Bella.elMethod());//Aqui estoy accediendo al metodo que voy a utilizar para hacer la accion requerida

const salguero = new user() //accede a la constante para que despues devuelva:
console.log(salguero.elMethod()); //se pueden hacer varia instancias que pueden acceder al metodo para realizar la accion que esta adentro

//Variables sin funcion constructora
const Cano = new user(); //User es solo la referencia No se pone pone console cuando hay constructora pero si 
//si se quiere llamar al metodo es como un por defecto que estas poniendo a la  hora de poner un constructor

//THIS: hace referencia al elemento padre que lo contiene
class user  {
    constructor(name) {
        this.name = name;
    }
    //method
    speak () {
        return ('hellow')
    }
    grerting () {
        return(`${this.speak(/*Como esto es un metodo se tiene que llamar con ()*/)} ${this.name}`);
    }
} 

const bella = new user ('Bella')
console.log(bella.grerting(/*RECORDATORIA: cuando llamamos a un metodo o algo parecido siempre se agrega()*/));//porque ana.tatata porque es la que se va a hacer referencia
//RECUERDA: Hacer referencia a la variable y llamar a su metodo ('se llama .nomMetodo(importante llamar con () porque si no no se llama solo se hace referencia)').
//Las clases una forma en la que podemos trabajar con diferentes estructuras como constructores, metodos.

//Ejercicios Mios propios
class User {
    constructor (name) {
        this.name = name;
    }
    avisoSpeak () {
        return ('Hola Cuidado Bro aqui hay virus')
    }
    avisoBabo () {
        return ('burro')
    }
    Aviso() {
        return (`${this.avisoBabo()} ${this.name} ${this.avisoSpeak()} `) //importa mucho el orden depende de cual quieras primero
    }
}

const JuanJr = new User ('JuanJr')
console.log(JuanJr.Aviso()); //TE LLEGAAAAAAAAAAAAAAA 


// SETTERS, GETTERS: Una palabra reservada 
//GETTER: el codigo ejcutado para obtener el objetoNom
//SET: Es el codigo ejecutado para asignar objetoNom = Value 


class users {
    constructor (name, age, lastName) {
        this.name = name;
        this.age = age;
    }
    speakWithWold () {
        return ('Hellow Jeff')
    }
    grertingGood () {
        return(`${this.name} ${this.speakWithWold()} ${this.age}  `)
    }
    get uAage () {
        return(this.age); //Esto es para obtenerlo dentro de esta clase y leer un valor 
    }
    set uAge (n) {//Puede tener el mismo nombre y en parametros se pone el valor que se va a cambiar
        this.age = n;
    }
}

const yome = new user ('Bella', 15);
console.log(yome.eLage);
console.log(yome.age = 20);