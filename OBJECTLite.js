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







































