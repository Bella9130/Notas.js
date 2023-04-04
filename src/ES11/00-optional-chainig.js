/*Optional chaining: Es una forma de evitar errores solicitando propiedades de forma opcional utilizando el símbolo => ? , sirve cuando no estamos seguros de que los valores estén completos. */
//valida que la informacion este presenta y que no rompa la aplicativo y despues la interfaz falle
const User = { //RECORDATORIO ELEMENTO Y OTRO VALOR 
    Bella: { //elemento
        country: 'Gu'
    },
    Cano: {
        country: 'Gu'
    }
}
console.log(User.Bella.Cano);
console.log(User.Cano.Bella.EstoNoesta.ejempl);


//DIFERENCIAS: Que aqui como pregunta si esta para que no salga un error 
const users = {
    Bella: {
        age: '15'
    },
    Cano: {
        age: '16'
    }
}
console.log(Users.Bella.Cano);
console.log(users?.esteej?.country);
//Esta pregunando si esta alli y asi ya no rompe el codigo si no esta 
