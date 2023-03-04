class User {
    constructor (name) {
        this.name = name;
    }
    avisoSpeak () {
        return ('Hola Cuidado Bro aqui hay virus')
    }
    Aviso( ) {
        return (`${this.name} ${this.avisoSpeak()}`)
    }
}

const JuanJrs = new User ('JuanJr')
console.log(JuanJrs.Aviso());

//Clases 
//podemos crear distintos objetos con características específicas, permitiéndonos crear un código más eficiente
//INSTANCIA: Una instancia es la accion de crear un objeto basado en una clase en particular. 
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
         this.lastName = lastName;
     }
     speakWithWold () {
         return ('Hellow Jeff')
     }
     grertingGood () {
         return(`${this.name} ${this.lastName} ${this.speakWithWold()} ${this.age}  `)
     }
     get eLage () {
         return(this.age); //Esto es para obtenerlo dentro de esta clase y leer un valor 
         //se le da el valos que se queiere cambiar y hacer referencia al elemto padre contenedor 
     }
     set eLage (Apodo) {//Puede tener el mismo nombre y en parametros se pone el valor que se va a cambiar
         this.age = Apodo;
         //Hace referencia o le dice a que devuelva el elemto pasado por esto 
     }
 }
 
 const yome = new users ('Bella', 15, 'salguero');//15 asignado
 console.log(yome.eLage);//que solo retorne esto
 console.log(yome.eLage = 20);//se le asigna nuevo valor por llamar a get y set
 //Al final nos da 15 20 porque el 15 fue asignado arriba con el nom
 
 