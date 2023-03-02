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

const JuanJr = new User ('JuanJr')
console.log(JuanJr.Aviso());

