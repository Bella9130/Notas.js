//PRIVATE: Este se vuelve privado con un # y solo se puede accer en la misma clase
//Casos de uso: ver libreria de react
 //GETTER: el codigo ejcutado para obtener el objetoNom
 //SET: Es el codigo ejecutado para asignar objetoNom = Value 

class users {
    constructor (name, age, lastName) {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
    }
    #speakWithWold () {
        return ('Hellow Jeff')
    }
    #grertingGood () {
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

