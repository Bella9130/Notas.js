/*un callback es una funcion qe se le a pasar a otra funcion como argunemtno que luego se llama a dentro de la funcion externa
para hacer un accion*/

function sum(num1, num2) {
    return num1 + num2;

}; // = Callback 

//Esta funcion para llamar y ejecutar al callback

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

//!!!!⚠️CALLBACK NO ES UNA PALABRA RESERVADA

function ej2(no1, no2){
    return no1 + no2
}            
  
function recib(no1, no2, cualquier) {
    return cualquier(no1, no2)   /*callbkack es mientras se meta un funciond de algo como argumento(argumetno es mientras 
    no haya nada o no se pondra ningun valor) y ese argumento llame a una funcion externa*/
};

console.log(recib(1, 2, ej2));

//CASO#2 🤔 (setTimeout())
/*setTimeout recibe en sus argumentos una funcion, tiempo y argumentos esta es parte de la API de js  */

setTimeout(function () {
    console.log('Juan JR');
},2000)

// EJ: SetTimeout en si ya es un callback porque recibe funcion co l a logica

let elemtosProduc = { 
Bella: 'Nombre',
Grado: '4tobach',
MaestroOdio: 'Profe Douglas'
}
   

setTimeout( function() {
    console.log(elemtosProduc)
}, 5000)

/*No poner funcion a anonima porque setTimeout es un callback en si no puede contener este tipo de funciones de arrow*/ 

//Caso #3  🤔

function saludar(AÑOS) {
    console.log(`Hola ${AÑOS}`);
} 

setTimeout(saludar, 4000, 'Bella')


// function execCallback(callback) {
//     console.log('Execute myFunc 2s after');
//   }
  
//   setTimeout(execCallback, 2000);
  

function execCallback(callback) {
    setTimeout(function () {
      console.log('Execute myFunc 2s after');
    }, 2000); 
  }